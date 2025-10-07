import { Settings, Wifi, LineChart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "நிறுவுதல்",
    description: "சென்சார்களையும் சாதனங்களையும் உங்கள் கிரீன்ஹவுஸில் எளிதாக நிறுவுங்கள்"
  },
  {
    icon: Wifi,
    title: "இணைப்பு",
    description: "வைஃபை வழியாக அனைத்தையும் இணைத்து உங்கள் கணக்கை அமைக்கவும்"
  },
  {
    icon: LineChart,
    title: "கண்காணிப்பு",
    description: "நிகழ்நேர தரவு மற்றும் AI பரிந்துரைகளைப் பெறுங்கள்"
  },
  {
    icon: CheckCircle,
    title: "வெற்றி",
    description: "ஆரோக்கியமான பயிர்கள் மற்றும் அதிக விளைச்சலை அனுபவிக்கவும்"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            இது எப்படி{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              வேலை செய்கிறது
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            நான்கு எளிய படிகளில் தொடங்குங்கள்
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mx-auto">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
