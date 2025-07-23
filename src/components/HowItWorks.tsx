import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Settings, 
  Search, 
  Handshake,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up in minutes and build a compelling agency profile with your portfolio, team, and expertise.",
    features: ["Portfolio showcase", "Team profiles", "Service offerings", "Client testimonials"]
  },
  {
    icon: Settings,
    title: "Get Verified",
    description: "Complete our verification process to build trust and unlock premium features for your agency.",
    features: ["Business verification", "Portfolio review", "Reference checks", "Quality certification"]
  },
  {
    icon: Search,
    title: "Match with Clients",
    description: "Our algorithm connects you with relevant projects based on your expertise, location, and availability.",
    features: ["Smart matching", "Real-time notifications", "Project details", "Client insights"]
  },
  {
    icon: Handshake,
    title: "Win More Business",
    description: "Submit proposals, communicate with clients, and close deals directly through our secure platform.",
    features: ["Proposal tools", "Secure messaging", "Contract templates", "Payment protection"]
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four steps to transform your agency's growth and 
            start connecting with high-value clients today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 relative group hover:shadow-card transition-smooth">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-4 mx-auto">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="premium" size="lg" className="group">
            Start Your Journey Today
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free to start • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;