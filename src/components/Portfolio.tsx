import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "PowerBI Sales Analytics Dashboard",
      description: "I manage and construct efficient Sales Dashboard in PowerBI, delivering insights and visual reports to analyze ecommerce performance."
    },
    {
      title: "PowerBI Sales Analytics Dashboard", 
      description: "I manage and construct efficient Sales Dashboard in PowerBI, delivering insights and visual reports to analyze ecommerce performance."
    },
    {
      title: "PowerBI Sales Analytics Dashboard",
      description: "I manage and construct efficient Sales Dashboard in PowerBI, delivering insights and visual reports to analyze ecommerce performance."
    },
    {
      title: "PowerBI Sales Analytics Dashboard",
      description: "I manage and construct efficient Sales Dashboard in PowerBI, delivering insights and visual reports to analyze ecommerce performance."
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium mb-2">My Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            My Latest <span className="text-accent">Projects</span>
          </h2>
          <Link to="/projects">
            <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-primary">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-service group">
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl text-accent/30">📊</div>
              </div>
              
              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Link */}
                <div className="flex justify-end">
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
  );
};

export default Portfolio;