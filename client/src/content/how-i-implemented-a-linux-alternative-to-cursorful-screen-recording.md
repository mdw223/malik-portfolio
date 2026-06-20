# How I Found a Linux Alternative to Cursorful Screen Recording

## The lesson I wish I'd learned on day one

I wanted Cursorful-style autozoom screen recording on Linux. I asked AI for open-source options. It gave me two repos. I spent weeks on one, discovered it lacked autozoom, then spent *much* longer trying to bend my entire operating system around making those original suggestions work.

They didn't work. The tools that actually solved my problem — **Screenix** (native Linux, software-level autozoom) and **Cursorfly** (free open-source Chrome extension for browser-only demos) — were never on that first list. I changed my OS twice, broke my desktop environment once, migrated to a new distro, and debugged VPN compatibility along the way. The fix wasn't "install package X." It was "question whether you're solving the right problem."

If you're using AI to troubleshoot, here's what I'd do differently: **validate the constraint before changing the environment.** Ask "does this feature require X11/Wayland/compositor APIs?" before reinstalling anything. Search for *recent* Wayland-native alternatives before downgrading your desktop. And when the first two suggestions fail, explicitly ask AI for a wider net — not variations on the same broken approach.

The rest of this post is the journey that taught me that. Consider it a cautionary field report, not a how-to you should copy step-for-step.

---

## Act 1: Two AI suggestions and a missing feature

**Starting point:** Ubuntu on a ThinkPad, GNOME 50.1, Wayland. Cursorful doesn't support Linux, so I asked AI for open-source screen recording repos I could self-host or run locally.

AI gave me two options. I was set. Life got busy; a few weeks passed before I actually installed one. It had almost everything I wanted — except **autozoom**, the one feature that made Cursorful worth using in the first place.

So I did what felt logical: prompt AI harder. Fix the computer. Make it work.

That decision — optimizing for the tools I'd already been given instead of re-validating the goal — is where the rabbit hole started.

---

## Act 2: Chasing X11 on GNOME 50.1 (a dead end)

**The theory:** ScreenArc's autozoom needs X11 APIs. Wayland's security model blocks the global mouse/screen access those tools rely on. Solution: run GNOME on Xorg.

**What I tried:**

1. Set up "GNOME on Xorg" as a login option — installed Xorg packages, created session `.desktop` files, disabled Wayland in gdm3 config. Selecting it at login bounced me straight back to the login screen.
2. Dug into Xorg logs and `journalctl`. The X server started and exited cleanly; `gnome-session` had nothing to launch on top of it.
3. Found the root cause: `/usr/share/gnome-session/sessions/gnome-xorg.session` didn't exist — no Ubuntu package ships it for this release.
4. Hand-wrote that session file using older syntax. That broke **both** GNOME-Wayland and GNOME-Xorg (`Failed with result 'protocol'`). Deleting it restored Wayland-only GNOME.
5. Confirmed via package search: **`gnome-shell-x11` doesn't exist in Ubuntu's repos for GNOME 50.1.** This isn't a config bug. GNOME dropped its X11 backend on this build. GNOME-on-Xorg is impossible here, period.

**Side quest — XFCE:** Installed XFCE as an X11-capable alternative. It technically worked but broke GNOME theming (apps stuck on light theme, inconsistent look), Brave misbehaved, and I disliked the GUI overall. Purged XFCE, restored GNOME theme settings via `gsettings`, removed leftover session entries, restarted gdm3.

**Outcome:** Clean GNOME/Wayland system, fully restored. ScreenArc autozoom still broken. Weeks spent; zero progress on the actual goal.

---

## Act 3: The nuclear option — migrate to Linux Mint

With GNOME 50.1 offering no X11 path, the pragmatic move was a distro built for X11 by default: **Linux Mint 22.3 "Zena" Cinnamon** — Ubuntu-based, familiar package ecosystem, Cinnamon on X11 out of the box.

**Backup before wipe:** SSH keys, git config, shell profiles, Claude config, Python venvs, Git repos, downloads, videos, utility scripts, Obsidian AppImage, Cursor config — all saved to an external drive.

**Install:** Flashed the Mint ISO to USB, booted live environment, chose erase-disk install with LVM + encryption. Hit a brief installer snag (Advanced Features dialog not advancing to the passphrase screen) before completing the install.

**Immediate surprise — ProtonVPN broken on Cinnamon:** VPN wouldn't open. Traced the hang to `get_vpn_connector()` blocking on D-Bus, trying to reach GNOME-specific services Cinnamon doesn't run. Installed GNOME compatibility packages; a reboot accidentally switched the session to GNOME/Wayland.

**The tradeoff crystallized:**

| Environment | VPN | Screen recorders |
|---|---|---|
| GNOME / Wayland | ProtonVPN works | Autozoom tools broken |
| Cinnamon / X11 | ProtonVPN broken | Partial success |

I hadn't just changed distros. I'd swapped one class of problems for another.

---

## Act 4: Screen recorders on Mint — closer, still not there

**SimpleScreenRecorder** — works fine on Cinnamon/X11. No autozoom.

**ScreenArc** — detects the screen, but autozoom never triggers. Missing `xdotool`; more importantly, Cinnamon's compositor (Muffin) doesn't expose the APIs ScreenArc expects for compositor-level zoom.

**OpenScreen** — installed via `.deb`. On Wayland, autozoom fails for the expected security reasons. Switched to GNOME-on-Xorg (gear icon appeared after installing `ubuntu-session`). Autozoom *still* didn't trigger on X11 — points to a known unresolved Linux bug in OpenScreen, not user misconfiguration.

**OBS zoom plugin** — didn't autozoom properly either.

**Cinnamon accessibility zoom** — works manually, not automatically on clicks.

**Root cause pattern:** Most tools try to zoom at the **compositor level**. Muffin doesn't support that. Tools that do **software zoom on captured frames** — processing the video after capture rather than manipulating the display stack — actually work.

That distinction is the technical insight that finally unblocked me. And it came from experimentation on the new OS, not from the original AI shortlist.

---

## Act 5: What actually worked

Two tools, two use cases:

**Screenix** — Native Linux app. Works on Mint/X11. Does software-level autozoom on mouse clicks — exactly the Cursorful-style behavior I wanted. 7-day free trial; worth evaluating for production demos.

**Cursorfly** — Free, open-source Chrome extension. Browser-only, but zero OS-level fighting. Perfect for web app demos and documentation where the recording stays inside the browser.

I'm using **both**: Screenix for full-desktop native app demos, Cursorfly when the content lives in the browser and I don't want to touch the display stack at all.

**Still open:** ProtonVPN on Cinnamon remains unresolved. That's a separate thread — GNOME compatibility packages didn't exist for every DE-specific D-Bus dependency.

---

## What I'd tell past-me (and anyone asking AI for Linux tooling advice)

1. **Start with the constraint, not the install command.** "Autozoom on Linux" has a Wayland/X11/compositor dependency tree. Map that before touching your session manager.
2. **When AI gives you N options, ask for N+5.** Explicitly request alternatives that work on *your* display server, including commercial tools, browser extensions, and frame-level (not compositor-level) approaches.
3. **Don't change the OS to fit a tool until you've exhausted same-OS alternatives.** I reinstalled Ubuntu's entire desktop stack, then the entire distro, before discovering software-level zoom recorders.
4. **Verify the feature, not the app.** OpenScreen installed fine. ScreenArc detected my screen. "Works" and "does the one thing I need" are different gates.
5. **Budget for ecosystem tradeoffs.** Mint fixed recording but broke VPN. Every environment change has a shadow cost — account for it before you wipe a disk.
6. **Time-box AI troubleshooting.** If three prompts deep you're editing session files by hand, step back and reframe the question.

The rabbit hole wasn't Linux being hard. It was me treating AI's first answer as the search space instead of a starting point.
