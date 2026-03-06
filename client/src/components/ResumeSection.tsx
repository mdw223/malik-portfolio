import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";

export function ResumeSection() {
  const resumeUrl = "./Malik Wensman - Software Resume.pdf";

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 bg-muted/30" data-testid="section-resume">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my skills and experience.
          </p>
        </div>

        <Card className="overflow-hidden flex justify-center">
          <CardContent className="p-0">
            <div className="relative bg-muted/50 flex justify-center">
              <div className="aspect-[8.5/11] max-h-[500px] overflow-hidden flex items-center justify-center">
                <div className="bg-background border border-border rounded-lg shadow-lg m-8 p-8 w-full max-w-md">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold">Malik Wensman</h3>
                        <p className="text-muted-foreground">Full Stack Software Engineer</p>
                        <p className="text-sm text-muted-foreground">malik.code@proton.me</p>
                      </div>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                        <div className="space-y-2 text-muted-foreground">
                          <p>Full Stack at Axiom Software</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Education</h4>
                        <p className="text-muted-foreground">B.S. Computer Science, NC State</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {["React", "TypeScript", "Node.js", "Python", "C#", "SQL", "Angular", "Java", "C"].map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-xs text-muted-foreground italic pt-4 border-t border-border">
                      Preview - Click below to view full resume
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-background">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-view-resume"
              >
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <ExternalLink className="w-5 h-5" />
                  View Full Resume
                </Button>
              </a>
              <a href={resumeUrl} download="Malik Wensman - Technical Resume.pdf" data-testid="link-download-resume">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Download className="w-5 h-5" />
                  Download PDF
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
