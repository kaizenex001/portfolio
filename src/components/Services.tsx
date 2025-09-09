import { ShoppingCart, BarChart3, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Listings Management",
      description: "I optimize & manage product listings for better sales."
    },
    {
      icon: BarChart3,
      title: "Shop Analytics", 
      description: "Data-driven insights for ecommerce growth."
    },
    {
      icon: Target,
      title: "Paid Advertisements",
      description: "Targeted ads for consistent traffic & sales."
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Link to="/services">
              <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-primary">
                View All My Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services <span className="text-accent">I Provide</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service text-center group">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;