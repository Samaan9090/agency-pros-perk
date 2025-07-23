import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Globe,
  Users,
  BarChart3,
  Award,
  Megaphone,
  Eye,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Sponsorship = () => {
  const sponsorshipOptions = [
    {
      icon: Target,
      title: "Homepage Banner",
      description: "Premium placement on our homepage with 50K+ daily visitors",
      reach: "1.5M monthly impressions",
      price: "$5,000/month",
      features: [
        "Above-the-fold placement",
        "Custom banner design included",
        "Click-through tracking",
        "Performance analytics"
      ]
    },
    {
      icon: Globe,
      title: "Category Sponsorship",
      description: "Sponsor entire categories like 'Web Development' or 'Branding'",
      reach: "500K+ targeted impressions",
      price: "$3,000/month",
      features: [
        "Category page header",
        "Featured in search results",
        "Logo in category navigation",
        "Lead attribution tracking"
      ]
    },
    {
      icon: Megaphone,
      title: "Newsletter Sponsorship",
      description: "Reach 25,000+ agency professionals with our weekly newsletter",
      reach: "25K subscribers",
      price: "$2,500/edition",
      features: [
        "Dedicated section in newsletter",
        "Custom content creation",
        "High open rates (45%+)",
        "Direct audience engagement"
      ]
    },
    {
      icon: Award,
      title: "Event Partnerships",
      description: "Co-sponsor our industry events and webinar series",
      reach: "Variable by event",
      price: "From $10,000",
      features: [
        "Logo placement in all materials",
        "Speaking opportunities",
        "Lead generation support",
        "Post-event follow-up"
      ]
    }
  ];

  const audienceData = [
    {
      metric: "50,000+",
      label: "Daily Active Users",
      description: "Agency owners and decision makers"
    },
    {
      metric: "1.8M",
      label: "Monthly Page Views",
      description: "High-intent traffic seeking services"
    },
    {
      metric: "25K+",
      label: "Newsletter Subscribers",
      description: "Engaged professionals and buyers"
    },
    {
      metric: "150+",
      label: "Countries Represented",
      description: "Global reach and influence"
    }
  ];

  const demographics = [
    { category: "Agency Owners", percentage: "45%" },
    { category: "Marketing Directors", percentage: "25%" },
    { category: "Freelancers", percentage: "15%" },
    { category: "In-house Teams", percentage: "15%" }
  ];

  const caseStudies = [
    {
      company: "SaaS Tools Inc.",
      challenge: "Increase brand awareness among agencies",
      solution: "3-month homepage banner + newsletter sponsorship",
      results: [
        "250% increase in website traffic",
        "500+ qualified leads generated",
        "35% boost in trial sign-ups"
      ]
    },
    {
      company: "Design Software Co.",
      challenge: "Target creative agencies specifically",
      solution: "Category sponsorship for Design agencies",
      results: [
        "180% increase in design agency customers",
        "300+ demo requests",
        "25% improvement in conversion rate"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Sponsorship Opportunities
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Reach 50,000+ agency professionals daily. Partner with the world's leading 
            agency directory to grow your business and build brand awareness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              50K+ Daily Visitors
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              High-Intent Audience
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Global Reach
            </Badge>
          </div>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 group">
            View Partnership Options
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Audience Stats */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Reach Decision Makers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our audience consists of agency owners, marketing directors, and decision-makers 
              actively seeking tools and services to grow their business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {audienceData.map((data, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{data.metric}</div>
                <div className="text-lg font-semibold mb-2">{data.label}</div>
                <p className="text-sm text-muted-foreground">{data.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Audience Demographics</h3>
              <div className="space-y-4">
                {demographics.map((demo, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{demo.category}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: demo.percentage }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{demo.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Why Agencies Trust Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Verified agency listings only</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Quality-focused community</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Industry-leading content</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Trusted by top agencies worldwide</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Sponsorship Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from flexible options designed to meet your marketing objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sponsorshipOptions.map((option, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <option.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {option.reach}
                    </Badge>
                    <div className="text-2xl font-bold text-primary">{option.price}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our partners have achieved their marketing goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-xl font-semibold mb-4">{study.company}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Custom Partnership Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Have specific goals or requirements? We create custom partnership packages 
              tailored to your unique marketing objectives and budget.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Performance-Based</h3>
                <p className="text-sm text-muted-foreground">
                  Pay based on conversions, leads, or other success metrics
                </p>
              </Card>
              
              <Card className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Long-term Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-year agreements with preferred rates and benefits
                </p>
              </Card>
              
              <Card className="p-6">
                <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Regional Targeting</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on specific geographic markets or countries
                </p>
              </Card>
            </div>

            <Button variant="hero" size="lg" className="group">
              Discuss Custom Solutions
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch to discuss how we can help you reach your target audience 
              and achieve your marketing goals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Sales Team</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discuss packages and pricing
                </p>
                <a href="mailto:partnerships@agencydirectory.com">
                  <Button variant="outline" className="w-full">
                    partnerships@agencydirectory.com
                  </Button>
                </a>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Media Kit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download detailed audience data
                </p>
                <Button variant="outline" className="w-full">
                  Download Media Kit
                </Button>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground">
              Questions? Call us at <strong>+1 (555) 123-4567</strong> or schedule a call to discuss your needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;