import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  CheckCircle,
  DollarSign,
  Clock,
  Eye,
  MessageSquare,
  Lightbulb,
  Heart,
  Building2,
  Phone
} from "lucide-react";

const Benefits = () => {
  const mainBenefits = [
    {
      icon: Target,
      title: "Qualified Lead Generation",
      description: "Connect with pre-screened clients actively looking for your specific services and expertise. Our advanced matching algorithm ensures you only receive leads that match your capabilities and budget requirements.",
      highlight: "85% conversion rate",
      features: [
        "Pre-qualified clients with verified budgets",
        "Industry-specific matching based on your expertise",
        "Real-time lead scoring and quality assessment",
        "Detailed client requirements and project briefs"
      ]
    },
    {
      icon: Trophy,
      title: "Premium Positioning",
      description: "Stand out from competitors with verified badges, client reviews, and portfolio showcases. Our premium positioning features help you build credibility and attract high-value clients.",
      highlight: "Top 1% visibility",
      features: [
        "Verified agency badges and certifications",
        "Featured placement in search results",
        "Portfolio showcase with case studies",
        "Client testimonials and ratings display"
      ]
    },
    {
      icon: Shield,
      title: "Verified Client Network",
      description: "Access to a curated network of legitimate businesses with real budgets and project needs. Every client undergoes our rigorous verification process to ensure quality.",
      highlight: "100% verified clients",
      features: [
        "Comprehensive client background checks",
        "Financial verification and budget confirmation",
        "Company legitimacy and track record validation",
        "Industry reputation and reference checks"
      ]
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time alerts for matching projects and respond faster than your competition. Our notification system ensures you never miss an opportunity.",
      highlight: "2x faster response",
      features: [
        "Real-time project matching alerts",
        "Mobile app notifications",
        "Email and SMS alert options",
        "Priority notification for premium members"
      ]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite team members to manage your profile, respond to leads, and track performance together. Built-in collaboration tools streamline your workflow.",
      highlight: "Unlimited team access",
      features: [
        "Multi-user account management",
        "Role-based permissions and access",
        "Team activity tracking and logging",
        "Collaborative proposal creation tools"
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your profile views, lead quality, conversion rates, and ROI with detailed insights. Make data-driven decisions to optimize your success.",
      highlight: "Advanced reporting",
      features: [
        "Comprehensive performance dashboards",
        "Lead conversion tracking and analysis",
        "ROI calculation and reporting",
        "Competitive analysis and benchmarking"
      ]
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access clients from 150+ countries and expand your business internationally with ease. Our platform breaks down geographical barriers.",
      highlight: "150+ countries",
      features: [
        "International client network access",
        "Multi-currency payment support",
        "Local market insights and trends",
        "Cross-border project facilitation"
      ]
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Build credibility with official certifications, awards, and recognition from industry leaders. Showcase your expertise and achievements.",
      highlight: "Official certifications",
      features: [
        "Industry certification programs",
        "Awards and recognition opportunities",
        "Expert status and thought leadership",
        "Professional development resources"
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: "Higher Project Values",
      description: "Access to premium projects with budgets ranging from $50K to $1M+. Our platform attracts serious clients with substantial budgets."
    },
    {
      icon: Clock,
      title: "Time-Saving Tools",
      description: "Streamlined proposal creation, automated follow-ups, and project management tools that save you hours every week."
    },
    {
      icon: Eye,
      title: "Brand Visibility",
      description: "Increase your agency's visibility with SEO-optimized profiles, featured listings, and social media integration."
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Built-in messaging system for secure communication with clients, file sharing, and project collaboration."
    },
    {
      icon: Lightbulb,
      title: "Industry Insights",
      description: "Access to market trends, pricing insights, and industry reports to stay ahead of the competition."
    },
    {
      icon: Building2,
      title: "Enterprise Clients",
      description: "Connect with Fortune 500 companies and enterprise clients looking for trusted agency partners."
    }
  ];

  const successStories = [
    {
      company: "Creative Studio X",
      growth: "300% revenue increase",
      description: "Went from 5 to 25 employees in 18 months after joining our platform",
      testimonial: "The quality of leads is incredible. We're now working with clients we could only dream of before."
    },
    {
      company: "Digital Marketing Pro",
      growth: "150+ new clients",
      description: "Built a sustainable pipeline of high-value clients across multiple industries",
      testimonial: "This platform transformed our business. We no longer worry about finding clients."
    },
    {
      company: "Brand Agency Co",
      growth: "$2M+ project value",
      description: "Secured several enterprise clients with projects exceeding $500K each",
      testimonial: "The enterprise clients we've connected with have been game-changing for our agency."
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Benefits of Listing With Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how our platform helps agencies like yours grow faster, win better clients, 
            and build sustainable businesses. Join thousands of successful agencies worldwide.
          </p>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Top Agencies Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform offers everything you need to grow your agency business. 
              Here are the key benefits that set us apart from other directories.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainBenefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-card transition-smooth">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <benefit.icon className="h-10 w-10 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {benefit.highlight}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  </div>
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Even More Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Our platform goes beyond basic directory features to provide comprehensive business growth tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-smooth">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how agencies have transformed their businesses with our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{story.company}</h3>
                    <div className="text-2xl font-bold text-primary my-2">{story.growth}</div>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </div>
                  <blockquote className="text-sm italic border-l-4 border-primary pl-4">
                    "{story.testimonial}"
                  </blockquote>
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

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get started in minutes and start receiving qualified leads today
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Profile", desc: "Set up your agency profile with portfolio and expertise" },
              { step: "2", title: "Get Verified", desc: "Complete our verification process to build trust" },
              { step: "3", title: "Receive Leads", desc: "Start getting matched with qualified client projects" },
              { step: "4", title: "Grow Business", desc: "Convert leads into clients and scale your agency" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Agency?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join over 10,000 agencies that have already discovered the power of our platform. 
            Start getting high-quality leads today - it's completely free to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="hero" size="lg" className="group">
              List Your Agency Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>Questions? Call us at (555) 123-4567 or email hello@agencydirectory.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;