import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="p-4 shadow-2xl border-2 hover:border-primary/20 transition-colors">
              <img 
                src={dashboardImage}
                alt="Dashboard Preview" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              உங்கள் விரல் நுனியில்{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                முழு கட்டுப்பாடு
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              எங்கள் எளிதான டாஷ்போர்ட் மூலம் உங்கள் ஸ்மார்ட் கிரீன்ஹவுஸ் அனைத்து அம்சங்களையும் நிர்வகிக்கவும். நிகழ்நேர தரவு, தானியங்கு எச்சரிக்கைகள், மற்றும் AI-சக்தி வாய்ந்த பரிந்துரைகள்.
            </p>

            <ul className="space-y-4">
              {[
                "நிகழ்நேர சென்சார் தரவு காட்சிப்படுத்தல்",
                "தனிப்பயனாக்கக்கூடிய எச்சரிக்கைகள் மற்றும் அறிவிப்புகள்",
                "வரலாற்று வளர்ச்சி அறிக்கைகள்",
                "தொலைநிலை கட்டுப்பாடு மற்றும் தானியங்கு"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 group">
              டாஷ்போர்டை ஆராயுங்கள்
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
