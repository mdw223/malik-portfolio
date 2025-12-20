import { SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-sm">MW</span> */}
              <img src="/favicon.png" alt="" />
            </div>
            <p className="text-sm text-muted-foreground">
              {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-testid="link-footer-linkedin"
            >
              <Button size="icon" variant="ghost">
                <SiLinkedin className="w-5 h-5" />
              </Button>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-testid="link-footer-github"
            >
              <Button size="icon" variant="ghost">
                <SiGithub className="w-5 h-5" />
              </Button>
            </a>
            <a
              href={personalInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              data-testid="link-footer-youtube"
            >
              <Button size="icon" variant="ghost">
                <SiYoutube className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
