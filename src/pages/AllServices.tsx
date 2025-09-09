import { ShoppingCart, BarChart3, Target, Users, TrendingUp, Zap, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AllServices = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Listings Management",
      description: "I optimize & manage product listings for better sales.",
      features: [
        "SEO-optimized product titles",
        "Compelling product descriptions",
        "High-quality image optimization",
        "Competitive pricing analysis"
      ]
    },
    {
      icon: BarChart3,
      title: "Shop Analytics", 
      description: "Data-driven insights for ecommerce growth.",
      features: [
        "Sales performance tracking",
        "Customer behavior analysis",
        "ROI measurement & reporting",
        "Growth opportunity identification"
      ]
    },
    {
      icon: Target,
      title: "Paid Advertisements",
      description: "Targeted ads for consistent traffic & sales.",
      features: [
        "Google Ads management",
        "Facebook & Instagram ads",
        "Campaign optimization",
        "A/B testing & analytics"
      ]
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Professional customer support to boost satisfaction.",
      features: [
        "24/7 customer inquiries",
        "Order management",
        "Returns & refunds handling",
        "Live chat support"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Strategic planning for sustainable business growth.",
      features: [
        "Market research & analysis",
        "Competitor analysis",
        "Growth plan development",
        "Performance monitoring"
      ]
    },
    {
      icon: Zap,
      title: "Store Optimization",
      description: "Complete store setup and optimization for maximum conversions.",
      features: [
        "Store design & layout",
        "Conversion rate optimization",
        "Mobile responsiveness",
        "Loading speed optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent-hover transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            All My <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive ecommerce solutions to grow your online business and maximize your revenue potential.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-service group">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how I can help you achieve your ecommerce goals.
          </p>
          
          <Button className="btn-hero" onClick={() => navigate('/#contact')}>
              Get In Touch
            </Button>
          
        </div>
      </section>
    </div>
  );
};

export default AllServices;