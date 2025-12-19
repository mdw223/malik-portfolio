import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import { Calendar, Briefcase, GraduationCap, Heart, Target } from "lucide-react";
import { personalInfo } from "@/lib/data";

const bulletIcons = [Briefcase, GraduationCap, Heart, Target];
/** https://lucide.dev/ for icons */
export function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-24 pb-20 px-4 sm:px-6" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Avatar className="w-64 h-64 border-6 border-primary/20">
                <AvatarImage
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold">
                  {personalInfo.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground text-xl" aria-label="heart-handshake"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-handshake-icon lucide-heart-handshake">
                    <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium" data-testid="text-title">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg" data-testid="text-bio">
              {personalInfo.bio}
            </p>

            <ul className="space-y-3">
              {personalInfo.bullets.map((bullet, index) => {
                const Icon = bulletIcons[index] || Briefcase;
                return (
                  <li key={index} className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-foreground">{bullet}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3 justify-center md:justify-start pt-2">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-testid="link-about-linkedin"
              >
                <Button size="icon" variant="outline">
                  <SiLinkedin className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-testid="link-about-github"
              >
                <Button size="icon" variant="outline">
                  <SiGithub className="w-5 h-5" />
                </Button>
              </a>
              <a
                href={personalInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                data-testid="link-about-youtube"
              >
                <Button size="icon" variant="outline">
                  <SiYoutube className="w-5 h-5" />
                </Button>
              </a>
            </div>

            <div className="pt-4">
              <a
                href={personalInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-calendly"
              >
                <Button size="lg" className="gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule a Meeting
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
