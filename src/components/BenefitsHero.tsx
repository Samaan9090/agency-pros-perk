import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agencies.jpg";

const BenefitsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Star className="h-5 w-5 fill-current" />
                <span>Trusted by 10,000+ agencies worldwide</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Get More 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Clients</span>, 
                <br />Grow Your Agency
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Join the premier agency directory that connects top creative agencies with high-value clients. 
                Increase your visibility, showcase your work, and grow your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                List Your Agency Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">500+ new clients monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">3x more leads on average</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
            <img 
              src={heroImage} 
              alt="Creative agencies collaboration" 
              className="relative rounded-2xl shadow-card w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsHero;