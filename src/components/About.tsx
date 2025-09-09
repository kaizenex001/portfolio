import { Button } from "@/components/ui/button";
import edselProfile from "@/assets/edsel-profile-small-dev.2.png";
import vistriumLogo from "@/assets/logo-transparent.png";

const About = () => {
  return (
    <section id="about" className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        {/* For small screens, we'll use a 3-column layout where the image takes the middle 60% */}
        {/* For large screens, it's a 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          {/* On small screens, this div will span from the 2nd column to the 3rd (effectively 60%) */}
          {/* On large screens, it takes 1 column */}
          <div className="flex justify-center lg:justify-start col-span-full sm:col-span-3 lg:col-span-1">
            <div className="relative w-full sm:w-[60%] lg:w-auto"> {/* Adjust width for small screens here */}
                <img
                  src={edselProfile}
                  alt="Edsel Vaflor Profile"
                  className="w-full h-auto max-w-full rounded-lg shadow-lg" // Added rounded-lg and shadow-lg for better presentation
                />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 lg:col-span-1">
            <div>
              <p className="text-accent text-sm font-medium mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who is <span className="text-accent">Edsel Vaflor?</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Edsel Vaflor is an Ecommerce Specialist, working across different brands 
              and industries. Specializing in operations, automation, and analytics to 
              deliver data-driven solutions & measurable results.
            </p>

            <div className="flex items-center space-x-6">
              <Button className="btn-hero">
                Download CV
              </Button>
              
              <div className="flex items-center space-x-3">
                <img 
                  src={vistriumLogo} 
                  alt="ViSTRIUM Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;