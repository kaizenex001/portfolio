import { ExternalLink, ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const AllProjects = () => {
  const projects = [
    {
      title: "PowerBI Sales Analytics Dashboard",
      description: "Comprehensive sales dashboard built in PowerBI delivering real-time insights and visual reports to analyze ecommerce performance. Features include revenue tracking, customer segmentation, and predictive analytics.",
      category: "Analytics",
      date: "2024",
      technologies: ["PowerBI", "SQL", "Excel"],
      features: [
        "Real-time sales tracking",
        "Customer behavior analysis", 
        "Revenue forecasting",
        "Interactive visualizations"
      ]
    },
    {
      title: "E-commerce Store Optimization",
      description: "Complete overhaul of an online store resulting in 45% increase in conversions. Implemented advanced SEO strategies, improved user experience, and optimized product listings.",
      category: "E-commerce",
      date: "2024",
      technologies: ["Shopify", "Google Analytics", "SEO Tools"],
      features: [
        "Conversion rate optimization",
        "SEO implementation",
        "User experience redesign",
        "Performance monitoring"
      ]
    },
    {
      title: "Automated Marketing Campaign System",
      description: "Developed an automated email marketing system that increased customer engagement by 60%. Integrated with CRM systems and implemented personalized content delivery.",
      category: "Marketing Automation",
      date: "2023",
      technologies: ["Mailchimp", "Zapier", "CRM Integration"],
      features: [
        "Automated email sequences",
        "Customer segmentation",
        "Performance tracking",
        "A/B testing framework"
      ]
    },
    {
      title: "Multi-Platform Social Media Analytics",
      description: "Built a comprehensive social media analytics platform that tracks performance across multiple channels, providing actionable insights for content strategy optimization.",
      category: "Social Media",
      date: "2023",
      technologies: ["Meta API", "Google Analytics", "Custom Dashboard"],
      features: [
        "Cross-platform tracking",
        "Engagement analytics",
        "Content performance metrics",
        "ROI measurement"
      ]
    },
    {
      title: "Customer Service Automation Bot",
      description: "Implemented an AI-powered customer service bot that handles 80% of common inquiries, reducing response time and improving customer satisfaction scores.",
      category: "Customer Service",
      date: "2023",
      technologies: ["Chatbot Platform", "NLP", "CRM Integration"],
      features: [
        "24/7 automated responses",
        "Natural language processing",
        "Escalation management",
        "Performance analytics"
      ]
    },
    {
      title: "Inventory Management Optimization",
      description: "Developed a smart inventory management system that reduced stock-outs by 35% and optimized warehouse operations through predictive analytics and automated reordering.",
      category: "Operations",
      date: "2022",
      technologies: ["ERP Integration", "Predictive Analytics", "Automation"],
      features: [
        "Automated reordering",
        "Demand forecasting",
        "Stock level optimization",
        "Cost reduction tracking"
      ]
    }
  ];

  const navigate = useNavigate();

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
            My Latest <span className="text-accent">Projects</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Explore my portfolio of successful ecommerce projects, analytics dashboards, and automation solutions that have driven real business results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-service group">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl text-accent/30">📊</div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Project Link */}
                  <div className="flex justify-between items-center pt-4">
                    <Button variant="outline" size="sm" className="text-accent border-accent hover:bg-accent hover:text-primary">
                      View Details
                    </Button>
                    <button className="w-10 h-10 bg-accent/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ExternalLink className="w-4 h-4 text-accent group-hover:text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve similar results for your business with tailored ecommerce solutions.
          </p>
          
            <Button className="btn-hero" onClick={() => navigate('/#contact')}>
              Get In Touch
            </Button>
          
        </div>
      </section>
    </div>
  );
};

export default AllProjects;