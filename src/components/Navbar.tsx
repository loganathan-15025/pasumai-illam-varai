import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ஸ்மார்ட் கிரீன்ஹவுஸ்
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            அம்சங்கள்
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            எப்படி வேலை செய்கிறது
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            தொடர்பு கொள்ள
          </a>
        </div>

        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          இப்போது தொடங்குங்கள்
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
