import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-greenhouse.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                எதிர்கால விவசாயம் இப்போது இங்கே
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              உங்கள் வீட்டுத்தோட்டத்தை{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                அறிவார்ந்ததாக
              </span>{" "}
              மாற்றுங்கள்
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI மற்றும் IoT தொழில்நுட்பத்துடன் உங்கள் பயிர்களை தானாகவே கண்காணித்து, நீர் பாசனம் செய்து, சரியான சூழலை பராமரிக்கவும். அதிக விளைச்சல், குறைந்த உழைப்பு.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 group">
                இலவச டெமோ பெறுங்கள்
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg px-8 group border-2">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                வீடியோ பார்க்கவும்
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">நீர் சேமிப்பு</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">3x</div>
                <div className="text-sm text-muted-foreground">விளைச்சல் அதிகரிப்பு</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">கண்காணிப்பு</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-60"></div>
            <img 
              src={heroImage}
              alt="Smart Greenhouse" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
