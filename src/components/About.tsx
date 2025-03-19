
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "UI/UX Design", level: 90 },
  { name: "Front-end Development", level: 85 },
  { name: "JavaScript/TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Visual Design", level: 75 },
  { name: "Prototyping", level: 80 },
];

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <span className="text-xs font-medium text-muted-foreground">
              About Me
            </span>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Who I Am
          </h2>
          
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Get to know more about my background, skills, and approach to digital design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef} 
            className={cn(
              "image-reveal rounded-lg overflow-hidden h-[400px] relative transition-all duration-1000",
              imageVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="About me"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
          </div>

          <div 
            ref={contentRef}
            className={cn(
              "space-y-8 transition-all duration-1000",
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <User size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">My Background</h3>
              </div>
              <p className="text-muted-foreground">
                I'm a digital designer and developer with over 5 years of experience 
                creating thoughtful, functional user experiences. My approach combines 
                aesthetic sensibility with technical expertise to craft digital products 
                that are both beautiful and effective.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-muted-foreground">
                I've worked with clients ranging from startups to established companies, 
                helping them refine their digital presence and create memorable user 
                experiences. My specialized approach focuses on clarity, purpose, and 
                attention to detail.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Code size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">My Approach</h3>
              </div>
              <p className="text-muted-foreground">
                I believe in simplicity and purpose in design. Every element should 
                serve a function, and the most elegant solutions are often the simplest. 
                My work prioritizes user experience, accessibility, and thoughtful 
                interactions.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={skillsRef}
          className={cn(
            "mt-24 transition-all duration-1000",
            skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <h3 className="text-xl font-semibold text-center mb-12">
            Skills & Expertise
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      transition: `width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
