import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-5"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl">
            <div className="bg-background rounded-3xl p-12 md:p-16 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  உங்கள் விவசாயத்தை{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    புரட்சி செய்ய
                  </span>{" "}
                  தயாரா?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  இன்றே தொடங்குங்கள் மற்றும் உங்கள் கிரீன்ஹவுஸை அடுத்த நிலைக்கு எடுத்துச் செல்லுங்கள்
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="email" 
                    placeholder="உங்கள் மின்னஞ்சல்" 
                    className="pl-10 h-12 text-lg"
                  />
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity h-12 px-8 group">
                  தொடங்குங்கள்
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                கிரெடிட் கார்டு தேவையில்லை • 14 நாள் இலவச சோதனை • எந்த நேரத்திலும் ரத்து செய்யுங்கள்
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
