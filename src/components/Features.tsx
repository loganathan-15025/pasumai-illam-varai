import { Droplets, Thermometer, Smartphone, Zap, Cloud, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Droplets,
    title: "தானியங்கி நீர்ப்பாசனம்",
    description: "மண் ஈரப்பதம் அளவுகளின் அடிப்படையில் துல்லியமான நீர் விநியோகம்",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Thermometer,
    title: "காலநிலை கட்டுப்பாடு",
    description: "சரியான வளர்ச்சிக்கு வெப்பநிலை மற்றும் ஈரப்பதத்தை தானாக சரிசெய்யவும்",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Smartphone,
    title: "மொபைல் கண்காணிப்பு",
    description: "எங்கிருந்தும் உங்கள் கிரீன்ஹவுஸை கண்காணிக்கவும் கட்டுப்படுத்தவும்",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "ஆற்றல் திறன்",
    description: "சூரிய ஆற்றலுடன் ஒருங்கிணைப்பு மற்றும் ஸ்மார்ட் ஆற்றல் மேலாண்மை",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Cloud,
    title: "AI வானிலை முன்னறிவிப்பு",
    description: "வானிலை தரவுகளின் அடிப்படையில் ஸ்மார்ட் பரிந்துரைகள்",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "வளர்ச்சி பகுப்பாய்வு",
    description: "உகந்த விளைச்சலுக்கான விரிவான வளர்ச்சி அறிக்கைகள்",
    color: "from-green-500 to-emerald-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            சக்திவாய்ந்த{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              அம்சங்கள்
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            வெற்றிகரமான விவசாயத்திற்காக வடிவமைக்கப்பட்ட நவீன தொழில்நுட்பம்
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
