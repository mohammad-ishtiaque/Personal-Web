
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Minimal E-commerce Platform",
    description: "A sleek, intuitive shopping experience focused on seamless interactions and clean design.",
    tags: ["UI/UX", "React", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A minimalist portfolio showcasing creative work with thoughtful animations and interactions.",
    tags: ["Web Design", "Animation", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 3,
    title: "Dashboard Interface",
    description: "A comprehensive analytics dashboard with intuitive data visualization and user controls.",
    tags: ["Dashboard", "Analytics", "React"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const Projects = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(120,119,198,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <span className="text-xs font-medium text-muted-foreground">
              Featured Work
            </span>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Selected Projects
          </h2>
          
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Explore a collection of my most impactful work, showcasing attention to detail and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation({
              threshold: 0.1,
              rootMargin: "0px 0px -100px 0px",
            });
            
            return (
              <div
                key={project.id}
                ref={ref}
                className={cn(
                  "group rounded-lg overflow-hidden border border-border bg-card",
                  "transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                  `transition-delay-${index * 100}`
                )}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="#"
                    className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
