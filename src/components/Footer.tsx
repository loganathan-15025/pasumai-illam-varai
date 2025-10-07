import { Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ஸ்மார்ட் கிரீன்ஹவுஸ்
              </span>
            </div>
            <p className="text-muted-foreground">
              எதிர்கால விவசாயத்தை இன்று உருவாக்குதல்
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">தயாரிப்பு</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">அம்சங்கள்</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">விலை நிர்ணயம்</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">உதாரணங்கள்</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ஒருங்கிணைப்புகள்</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">நிறுவனம்</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">எங்களைப் பற்றி</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">வலைப்பதிவு</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">தொழில்கள்</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">தொடர்பு</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">ஆதரவு</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">உதவி மையம்</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ஆவணங்கள்</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API குறிப்பு</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">நிலை</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 ஸ்மார்ட் கிரீன்ஹவுஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">தனியுரிமை கொள்கை</a>
            <a href="#" className="hover:text-primary transition-colors">பயன்பாட்டு விதிமுறைகள்</a>
            <a href="#" className="hover:text-primary transition-colors">குக்கீ அமைப்புகள்</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
