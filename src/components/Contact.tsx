import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-accent text-sm font-medium mb-2">Contact Me</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Talk for Your<br />
                <span className="text-accent">Next Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                I am available to work part-time or full-time. 
                Ready to start your next project?
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">+63 926 203 4908</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">edsel@vistrium.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Quezon City, Metro Manila, 1120</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/10 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name*"
                  className="bg-primary-foreground/10 border-accent/30 text-primary-foreground placeholder:text-muted-foreground"
                />
                <Input 
                  placeholder="Email*"
                  type="email"
                  className="bg-primary-foreground/10 border-accent/30 text-primary-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <Input 
                placeholder="Subject (Optional)"
                className="bg-primary-foreground/10 border-accent/30 text-primary-foreground placeholder:text-muted-foreground"
              />
              
              <Textarea 
                placeholder="Your Message*"
                rows={5}
                className="bg-primary-foreground/10 border-accent/30 text-primary-foreground placeholder:text-muted-foreground resize-none"
              />
              
              <Button className="btn-hero w-full group">
                <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;