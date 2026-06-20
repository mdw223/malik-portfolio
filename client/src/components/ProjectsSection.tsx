import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, FileText, Linkedin, Globe, Play } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-muted/30" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I've built to solve real problems and explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-visible group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
                {project.liveWebsiteUrl && (
                  <a
                    href={project.liveWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-website-${project.id}`}
                  >
                    <Button size="sm" variant="default" className="gap-1.5">
                      <Globe className="w-4 h-4" />
                      Website
                    </Button>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-demo-${project.id}`}
                  >
                    <Button size="sm" variant={project.liveWebsiteUrl ? "outline" : "default"} className="gap-1.5">
                      <Play className="w-4 h-4" />
                      Video
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.blogUrl && (
                  <Link href={project.blogUrl} data-testid={`link-blog-${project.id}`}>
                    <Button size="sm" variant="ghost" className="gap-1.5">
                      <FileText className="w-4 h-4" />
                      Blog
                    </Button>
                  </Link>
                )}
                {
                  project.linkedInPostUrl && (
                    <a
                    href={project.linkedInPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-linkedinpost-${project.id}`}
                  >
                    <Button size="sm" variant="outline" className="gap-1.5">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Post
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
