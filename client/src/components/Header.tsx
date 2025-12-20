import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import { Link, useLocation, useRoute } from "wouter";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [location, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isBlogPage = location.startsWith("/blog");

  useEffect(() => {
    if (isBlogPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "projects", "experience", "resume", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPage]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      if (isBlogPage) {
        setLocation("/");
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return;
      }
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/blog") return isBlogPage;
    if (href.startsWith("#") && !isBlogPage) {
      return activeSection === href.slice(1);
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-sm">MW</span> */}
              <img src="./favicon.png" alt="" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">{personalInfo.name}</span>
          </Link>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.href === "/blog" ? (
              <Link key={item.label} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`relative px-4 ${
                    isActive(item.href)
                      ? "text-foreground after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ) : (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 ${
                  isActive(item.href)
                    ? "text-foreground after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground"
                }`}
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1">
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
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
              data-testid="link-github"
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
              data-testid="link-youtube"
            >
              <Button size="icon" variant="ghost">
                <SiYoutube className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) =>
              item.href === "/blog" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      isActive(item.href) ? "bg-muted text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full justify-start ${
                    isActive(item.href) ? "bg-muted text-foreground" : "text-muted-foreground"
                  }`}
                  data-testid={`button-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              )
            )}
            <div className="flex items-center gap-2 pt-4 border-t border-border mt-2">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
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
              >
                <Button size="icon" variant="ghost">
                  <SiYoutube className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
