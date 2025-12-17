import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";
import { Calendar, Briefcase, GraduationCap, Heart, Target } from "lucide-react";
import { personalInfo } from "@/lib/data";

const bulletIcons = [Briefcase, GraduationCap, Heart, Target];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-24 pb-20 px-4 sm:px-6" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <Avatar className="w-48 h-48 border-4 border-primary/20">
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
                <span className="text-primary-foreground text-xl" aria-label="Waving hand">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.03 4.95L3.49 8.49c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0l6.01-6.01a2.517 2.517 0 00-.39-3.86l.39-.39c.97-.97.97-2.56 0-3.54a2.503 2.503 0 00-3.54 0l-.01.01a2.48 2.48 0 00-1.78-.74c-.67 0-1.29.26-1.77.74l-.5.5a2.503 2.503 0 00-3.54 0l-3.54 3.54a1.252 1.252 0 010-1.77l2.12-2.12a.75.75 0 00-1.06-1.06L7.03 4.95z"/>
                  </svg>
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
