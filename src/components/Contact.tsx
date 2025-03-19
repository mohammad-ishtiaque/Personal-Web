
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <span className="text-xs font-medium text-muted-foreground">
              Get in Touch
            </span>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Let's Work Together
          </h2>
          
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-100",
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div 
            ref={infoRef}
            className={cn(
              "lg:col-span-2 space-y-8 transition-all duration-1000",
              infoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            )}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">hello@example.com</span>
                </a>
                
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Github size={20} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">github.com/username</span>
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">linkedin.com/in/username</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Current Availability</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and select projects. If you're interested in collaborating, please get in touch with details about your project.
              </p>
            </div>
          </div>
          
          <div 
            ref={formRef}
            className={cn(
              "lg:col-span-3 transition-all duration-1000",
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            )}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow duration-300"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow duration-300 resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={cn(
                  "px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium",
                  "transition-all duration-300 ease-in-out flex items-center justify-center gap-2",
                  "hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                )}
              >
                <span>Send Message</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
