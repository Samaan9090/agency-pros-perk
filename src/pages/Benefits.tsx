import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Trophy, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Globe,
  Award,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-agencies.jpg";

const Benefits = () => {
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

  const stats = [
    {
      number: "10,000+",
      label: "Agencies Listed",
      description: "Active creative agencies"
    },
    {
      number: "500,000+",
      label: "Projects Matched",
      description: "Successfully completed"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Average rating"
    },
    {
      number: "$2.5B+",
      label: "Project Value",
      description: "Facilitated annually"
    }
  ];

  const features = [
    "Get matched with qualified clients daily",
    "Access to premium business opportunities",
    "Dedicated account management support",
    "Advanced analytics and reporting tools"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Star className="h-5 w-5 fill-current" />
                  <span>Trusted by 10,000+ agencies worldwide</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  Get More 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Clients</span>, 
                  <br />Grow Your Agency
                </h1>
                <p className="text-lg text-white/80 max-w-xl">
                  Join the premier agency directory that connects top creative agencies with high-value clients. 
                  Increase your visibility, showcase your work, and grow your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="group">
                  List Your Agency Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  View Success Stories
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white/70">500+ new clients monthly</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white/70">3x more leads on average</span>
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

      {/* Benefits Grid */}
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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-white/80">
              The numbers speak for themselves - join the most successful agency network
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/70">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden bg-gradient-hero p-8 lg:p-12">
            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Ready to Transform Your Agency?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Join over 10,000 agencies that have already discovered the power of our platform. 
                  Start getting high-quality leads today.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="group">
                  List Your Agency Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  Schedule a Demo
                </Button>
              </div>

              <p className="text-sm text-white/60">
                Questions? Email us at <span className="text-white">hello@agencydirectory.com</span>
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Benefits;