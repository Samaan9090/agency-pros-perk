import { Card } from "@/components/ui/card";
import { 
  Target, 
  Trophy, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Globe,
  Award
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Qualified Lead Generation",
    description: "Connect with pre-screened clients actively looking for your specific services and expertise.",
    highlight: "85% conversion rate"
  },
  {
    icon: Trophy,
    title: "Premium Positioning",
    description: "Stand out from competitors with verified badges, client reviews, and portfolio showcases.",
    highlight: "Top 1% visibility"
  },
  {
    icon: Shield,
    title: "Verified Client Network",
    description: "Access to a curated network of legitimate businesses with real budgets and project needs.",
    highlight: "100% verified clients"
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get real-time alerts for matching projects and respond faster than your competition.",
    highlight: "2x faster response"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite team members to manage your profile, respond to leads, and track performance together.",
    highlight: "Unlimited team access"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your profile views, lead quality, conversion rates, and ROI with detailed insights.",
    highlight: "Advanced reporting"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access clients from 150+ countries and expand your business internationally with ease.",
    highlight: "150+ countries"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Build credibility with official certifications, awards, and recognition from industry leaders.",
    highlight: "Official certifications"
  }
];

const BenefitsGrid = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Top Agencies Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful agencies that have transformed their business with our platform. 
            Here's what makes us the #1 choice for creative professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-smooth group cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {benefit.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;