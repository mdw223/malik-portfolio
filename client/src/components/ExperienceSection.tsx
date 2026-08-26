import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6" data-testid="section-experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey building products and leading engineering teams.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative sm:pl-16"
                data-testid={`card-experience-${experience.id}`}
              >
                <div className="absolute left-0 top-0 hidden sm:block">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center z-10 relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        src={experience.logo}
                        alt={experience.company}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-xs font-medium">
                        {experience.company.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <Card className="hover-elevate overflow-visible">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <Avatar className="w-12 h-12 sm:hidden shrink-0">
                        <AvatarImage
                          src={experience.logo}
                          alt={experience.company}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-xs font-medium">
                          {experience.company.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-2">
                        <div>
                          <h3 className="text-lg font-semibold">{experience.position}</h3>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            {experience.url ? (
                              <a
                                href={experience.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-foreground/80 hover:text-primary inline-flex items-center gap-1 transition-colors"
                              >
                                {experience.company}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="font-medium text-foreground/80">
                                {experience.company}
                              </span>
                            )}
                            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
