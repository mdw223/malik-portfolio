# faster-whisper Push-to-Talk Setup on Linux

A complete guide to setting up local, offline voice-to-text on Ubuntu, Linux Mint, and other Linux desktops. Works on both **Wayland** and **X11**.

---

## What You're Building

```
Hotkey press → start recording → speak → hotkey press → transcribe → deliver text
```

Everything runs locally. No internet. No API costs.

**How text is delivered depends on your session type:**

| Session | Behavior after transcription |
|---------|------------------------------|
| **X11** (Linux Mint Cinnamon, older Ubuntu) | Copies to clipboard, then auto-pastes with `Ctrl+V` |
| **Wayland** (Ubuntu 22.04+ default) | Copies to clipboard — you press `Ctrl+V` manually |

> **Why the difference?** Wayland intentionally blocks programs from injecting keystrokes into other windows (`xdotool`, `wtype`, `ydotool` all fail in different ways). On X11, `xdotool` works reliably, so the script auto-pastes for you. On Wayland, clipboard + manual paste is the only dependable approach.

---

## Prerequisites

### 1. Check your Python version

```bash
python3 --version
```

You need **Python 3.8 or higher**. Ubuntu 22.04+ ships with 3.10, so you're almost certainly fine.

### 2. Check your session type

```bash
echo $XDG_SESSION_TYPE
```

- `wayland` — Ubuntu 22.04+ default; text goes to clipboard, you paste manually
- `x11` — Linux Mint Cinnamon, most older setups; script auto-pastes after copying

The toggle script detects this automatically — no configuration needed.

### 3. Install system dependencies

```bash
sudo apt update
sudo apt install ffmpeg python3-venv python3-full alsa-utils libnotify-bin \
    wl-clipboard xclip xdotool
```

- `ffmpeg` — audio processing backend that Whisper depends on
- `python3-venv` / `python3-full` — required to create virtual environments on Ubuntu 24.04+
- `alsa-utils` — provides `arecord` for microphone recording
- `libnotify-bin` — desktop notifications (`notify-send`)
- `wl-clipboard` — clipboard on Wayland (`wl-copy`)
- `xclip` — clipboard on X11 (fallback: `xsel`)
- `xdotool` — auto-paste on X11 only (`Ctrl+V` injection)

> You only need the clipboard tool for your session (`wl-clipboard` on Wayland, `xclip` on X11), but installing all three is harmless and keeps the script portable if you switch sessions.

### 4. Verify your microphone is detected

```bash
arecord -l
```

You should see at least one capture device listed. If nothing shows, your mic isn't recognized yet — check your audio settings before proceeding.

> **Don't copy the venv from another machine.** Virtual environments are tied to a specific Python version and OS. Always recreate `~/.venvs/whisper` locally. You *can* copy `~/.cache/huggingface/` to skip re-downloading the model.

---

## Installation

### 1. Create a virtual environment

Ubuntu 22.04+ protects its system Python and will block a plain `pip3 install` with an `externally-managed-environment` error. The fix is a virtual environment — it keeps faster-whisper isolated and won't touch system Python at all.

```bash
# Remove any broken/copied venv first if it exists
rm -rf ~/.venvs/whisper

python3 -m venv ~/.venvs/whisper
source ~/.venvs/whisper/bin/activate
pip install faster-whisper
```

You can deactivate the venv with `deactivate` when done — it persists on disk regardless.

> **Why not `--break-system-packages`?** You can pass that flag to force a system-wide install, but it's risky on Ubuntu 24.04+ where system Python is used by GNOME internals and apt tooling. A version conflict can break things that are annoying to debug. The venv approach is the right call.

### 2. Verify the install

```bash
~/.venvs/whisper/bin/python3 -c "from faster_whisper import WhisperModel; print('faster-whisper installed OK')"
```

You should see the confirmation message. Use the venv's Python directly (as the hotkey script does), not system `python3`.

---

## Download the Model

On first run, faster-whisper downloads the model automatically from Hugging Face. But it's better to do this step now so you know it works before writing the script.

```bash
# Make sure your venv is active first
source ~/.venvs/whisper/bin/activate

python3 -c "
from faster_whisper import WhisperModel
print('Downloading base model...')
model = WhisperModel('base', device='cpu', compute_type='int8')
print('Model ready.')
"
```

This downloads ~150MB to `~/.cache/huggingface/`. It only happens once — after that it loads from disk.

> **Model size options:**
> | Model | Download Size | RAM Usage | Speed on CPU | Accuracy |
> |-------|--------------|-----------|--------------|----------|
> | `tiny` | ~75MB | ~200MB | Very fast | Good |
> | `base` | ~150MB | ~350MB | Fast | Better |
> | `small` | ~500MB | ~900MB | Moderate | Even better |
> | `medium` | ~1.5GB | ~3GB | Slow | High |
>
> **Recommendation:** Start with `base`. It hits the sweet spot of speed and accuracy for voice commands and dictation. You can always change it later by editing one line in the script.

---

## The Toggle Script

Because the script runs from a hotkey (not a terminal with the venv active), it must call the venv's Python directly by full path. Create the file in one shot with:

```bash
cat > ~/whisper-toggle.sh << 'ENDOFSCRIPT'
#!/bin/bash

PIDFILE="/tmp/whisper-recording.pid"
AUDIOFILE="/tmp/whisper-input.wav"
LOGFILE="/tmp/whisper-last.log"

copy_to_clipboard() {
    local text="$1"
    if [ "${XDG_SESSION_TYPE:-}" = "wayland" ] && command -v wl-copy >/dev/null 2>&1; then
        printf '%s' "$text" | wl-copy
    elif command -v xclip >/dev/null 2>&1; then
        printf '%s' "$text" | xclip -selection clipboard
    elif command -v xsel >/dev/null 2>&1; then
        printf '%s' "$text" | xsel --clipboard --input
    else
        notify-send "Whisper" "No clipboard tool (install wl-clipboard or xclip)" --icon=dialog-error
        return 1
    fi
}

deliver_result() {
    local text="$1"
    copy_to_clipboard "$text" || return 1

    if [ "${XDG_SESSION_TYPE:-}" = "x11" ] && command -v xdotool >/dev/null 2>&1; then
        sleep 0.15
        xdotool key ctrl+v
        notify-send "Whisper" "Pasted!" --icon=emblem-default
    else
        notify-send "Whisper" "Copied! Press Ctrl+V to paste" --icon=emblem-default
    fi
}

if [ -f "$PIDFILE" ]; then
    PID=$(cat "$PIDFILE")
    kill "$PID" 2>/dev/null
    rm -f "$PIDFILE"

    sleep 0.3

    if [ ! -f "$AUDIOFILE" ]; then
        notify-send "Whisper" "No audio file found" --icon=dialog-error
        exit 1
    fi

    notify-send "Whisper" "Transcribing..." --icon=audio-input-microphone

    RESULT=$(/home/YOUR_USERNAME/.venvs/whisper/bin/python3 - <<'EOF'
from faster_whisper import WhisperModel
model = WhisperModel("base", device="cpu", compute_type="int8")
segments, info = model.transcribe("/tmp/whisper-input.wav", beam_size=5)
text = " ".join(segment.text.strip() for segment in segments)
print(text.strip())
EOF
)

    if [ -z "$RESULT" ]; then
        notify-send "Whisper" "Nothing transcribed" --icon=dialog-warning
        exit 0
    fi

    echo "$RESULT" > "$LOGFILE"
    deliver_result "$RESULT"

else
    notify-send "Whisper" "Recording... (press hotkey again to stop)" --icon=audio-input-microphone
    arecord -f cd -r 16000 -c 1 "$AUDIOFILE" &
    echo $! > "$PIDFILE"
fi
ENDOFSCRIPT
```

Then make it executable:

```bash
chmod +x ~/whisper-toggle.sh
```

> **Important:** Replace `YOUR_USERNAME` in the script with your actual username. Check it with `whoami`. The line to update is:
> ```bash
> RESULT=$(/home/YOUR_USERNAME/.venvs/whisper/bin/python3 - <<'EOF'
> ```

> **How session detection works:** `copy_to_clipboard` picks `wl-copy` on Wayland or `xclip`/`xsel` on X11. `deliver_result` always copies first, then on X11 sends `Ctrl+V` via `xdotool` to auto-paste into the focused window. On Wayland it stops after copying — no configuration switch needed.

> **Why not `nano`?** `nano ~/whisper-toggle.sh` opens an empty file — nothing writes the content to disk for you. The `cat > file << 'EOF'` pattern creates and fills the file in one command directly from your terminal.

Verify it looks right:

```bash
cat ~/whisper-toggle.sh
```

---

## How to Use It

1. Press your hotkey → "Recording..." notification appears
2. Speak
3. Press your hotkey again → transcription runs
4. **On X11:** "Pasted!" notification — text is inserted into the focused window automatically
5. **On Wayland:** "Copied! Press Ctrl+V to paste" — click your target field, then press `Ctrl+V`

> **X11 focus tip:** Auto-paste goes into whichever window has focus when you press the hotkey the second time. Click into your text field before stopping the recording if needed.

The transcribed text is always on your clipboard too, so you can paste it again anywhere — terminal, VS Code, browser, any app.

**Expected timing on CPU with `base` model:**
- First run: 5–10 seconds (model loads into memory)
- Subsequent runs: 2–4 seconds for a 5-second clip

---

## Assign a Hotkey

Use the **full absolute path** for the command — `~/whisper-toggle.sh` can fail in some desktop shortcut handlers.

> Replace `YOUR_USERNAME` with your actual username (`whoami`).

### GNOME (Ubuntu default)

1. Open **Settings → Keyboard → Keyboard Shortcuts**
2. Scroll to the bottom and click **View and Customize Shortcuts**
3. Click **Custom Shortcuts** → **+** (add new)
4. Fill in:
   - **Name:** `Whisper Toggle`
   - **Command:** `/home/YOUR_USERNAME/whisper-toggle.sh`
   - **Shortcut:** Click the field and press your chosen key combo (e.g. `F10`)

### Cinnamon (Linux Mint)

1. Open **Menu → Preferences → Keyboard** (or **System Settings → Keyboard**)
2. Go to the **Shortcuts** tab
3. In the left sidebar, click **Custom Shortcuts**
4. Click **Add custom shortcut** (+)
5. Fill in:
   - **Name:** `Whisper Toggle`
   - **Command:** `/home/YOUR_USERNAME/whisper-toggle.sh`
6. Click **Add**, then click the **unassigned** key field and press your combo (e.g. `F10`)

> Good key choices that rarely conflict: `F10`, `F11`, `Super+Shift+W`

---

## Performance Tuning

### Reduce first-load time

Switch to `tiny` if speed is more important than accuracy. In `whisper-toggle.sh`, change:
```python
model = WhisperModel("base", device="cpu", compute_type="int8")
```
to:
```python
model = WhisperModel("tiny", device="cpu", compute_type="int8")
```

### Improve accuracy for technical vocabulary

Add a prompt hint to guide the model. Change:
```python
segments, info = model.transcribe("/tmp/whisper-input.wav", beam_size=5)
```
to:
```python
segments, info = model.transcribe(
    "/tmp/whisper-input.wav",
    beam_size=5,
    initial_prompt="Linux terminal commands, Python code, git, SSH, bash"
)
```

This nudges the model to expect technical vocabulary, which helps with words like `git`, `sudo`, `chmod`, etc.

---

## Troubleshooting

### "arecord: command not found"
```bash
sudo apt install alsa-utils
```

### "No audio file found" notification
Your recording started but nothing was saved. Check that your mic is working:
```bash
arecord -d 3 /tmp/test.wav && aplay /tmp/test.wav
```
If you don't hear playback of your voice, open GNOME Sound Settings and confirm the correct input device is selected and not muted.

### "ModuleNotFoundError: No module named 'faster_whisper'"
The script is calling the wrong Python — one that doesn't have faster-whisper installed. Make sure the script uses the full venv path for your username:
```bash
/home/YOUR_USERNAME/.venvs/whisper/bin/python3
```
Confirm the venv Python can find the package:
```bash
/home/YOUR_USERNAME/.venvs/whisper/bin/python3 -c "from faster_whisper import WhisperModel; print('OK')"
```

### Nothing transcribed / empty clipboard
Check if the last transcription produced any output:
```bash
cat /tmp/whisper-last.log
```
If the log is empty, run transcription manually to see errors:
```bash
source ~/.venvs/whisper/bin/activate
python3 -c "
from faster_whisper import WhisperModel
model = WhisperModel('base', device='cpu', compute_type='int8')
segments, info = model.transcribe('/tmp/whisper-input.wav', beam_size=5)
print(' '.join(s.text.strip() for s in segments))
"
```

### "Notification not showing"
```bash
sudo apt install libnotify-bin
```

### "No clipboard tool" notification
Install the clipboard utility for your session:
```bash
# Wayland
sudo apt install wl-clipboard

# X11
sudo apt install xclip
```

### Auto-paste not working on X11
Confirm session type and tools:
```bash
echo $XDG_SESSION_TYPE   # should print x11
command -v xclip && command -v xdotool
```
Click into your target text field before pressing the hotkey to stop recording — `xdotool` pastes into the focused window.

### Why can't it auto-paste on Wayland?
Wayland intentionally blocks programs from injecting keystrokes into other application windows. This is a security feature. Tools like `xdotool`, `wtype`, and `ydotool` all hit this wall. On Wayland, the script copies to clipboard and you paste with `Ctrl+V`. On X11, auto-paste works automatically.

### venv creation fails with "File exists: lib -> lib64"
A broken or copied venv is already at `~/.venvs/whisper`. Remove it and recreate:
```bash
rm -rf ~/.venvs/whisper
python3 -m venv ~/.venvs/whisper
source ~/.venvs/whisper/bin/activate
pip install faster-whisper
```

### "externally-managed-environment" when running pip
You're installing into system Python instead of the venv. Activate the venv first, or use the venv pip directly:
```bash
~/.venvs/whisper/bin/pip install faster-whisper
```

---

## File Locations Summary

| File | Purpose |
|------|---------|
| `~/whisper-toggle.sh` | The main toggle script |
| `~/.venvs/whisper/` | Python virtual environment with faster-whisper |
| `~/.cache/huggingface/` | Downloaded model weights (auto-managed) |
| `/tmp/whisper-input.wav` | Temporary audio recording (overwritten each use) |
| `/tmp/whisper-recording.pid` | PID file tracking active recording |
| `/tmp/whisper-last.log` | Last transcription result (useful for debugging) |

---

## Quick Reference

```bash
# Activate venv (for manual testing only)
source ~/.venvs/whisper/bin/activate

# Check session type
echo $XDG_SESSION_TYPE

# Test manually
~/whisper-toggle.sh        # start recording
~/whisper-toggle.sh        # stop, transcribe, deliver text
# X11: auto-pasted | Wayland: Ctrl+V to paste

# Check last transcription
cat /tmp/whisper-last.log

# Change model size (edit this line in the script)
model = WhisperModel("base", device="cpu", compute_type="int8")
#                     ^^^^
#                     tiny / base / small / medium
```