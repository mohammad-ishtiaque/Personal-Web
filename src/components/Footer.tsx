
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className={cn(
              "group flex items-center gap-2 text-sm text-muted-foreground",
              "transition-colors duration-300 hover:text-foreground"
            )}
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
