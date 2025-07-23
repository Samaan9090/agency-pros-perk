import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Upload, 
  Globe, 
  Award,
  Users,
  Clock,
  Shield,
  ArrowRight
} from "lucide-react";

const SubmitAgency = () => {
  const steps = [
    {
      step: "1",
      title: "Basic Information",
      description: "Company details, contact info, and business registration",
      time: "5 min"
    },
    {
      step: "2",
      title: "Services & Expertise", 
      description: "Your specializations, skills, and service offerings",
      time: "10 min"
    },
    {
      step: "3",
      title: "Portfolio & Case Studies",
      description: "Upload your best work and detailed case studies",
      time: "15 min"
    },
    {
      step: "4",
      title: "Team & Credentials",
      description: "Team member profiles, certifications, and awards",
      time: "10 min"
    },
    {
      step: "5",
      title: "Verification",
      description: "Our team reviews and verifies your submission",
      time: "24-48 hrs"
    }
  ];

  const requirements = [
    "Business must be legally registered",
    "Minimum 2 years of operation",
    "At least 3 portfolio samples required",
    "Valid business email and website",
    "Client references (minimum 2)",
    "Team information and credentials"
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Reach clients from 150+ countries actively seeking your services"
    },
    {
      icon: Users,
      title: "Qualified Leads",
      description: "Connect with pre-screened clients with verified budgets and timelines"
    },
    {
      icon: Award,
      title: "Premium Placement",
      description: "Featured placement in search results and category listings"
    },
    {
      icon: Shield,
      title: "Trust & Credibility",
      description: "Verified badge increases client confidence and trust in your agency"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Submit Your Agency
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of successful agencies connecting with high-value clients. 
            Get verified, get noticed, and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Free to Submit
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              24-48hr Review
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Instant Visibility
            </Badge>
          </div>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 group">
            Start Your Application
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why List Your Agency With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the world's most trusted agency directory and unlock new growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-smooth">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Simple 5-Step Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your agency listed and verified in under an hour
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.time}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Listing Requirements
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  To maintain quality standards, we have specific requirements for agency listings. 
                  Don't worry - most established agencies easily meet these criteria.
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="p-8">
                <Upload className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">What You'll Need Ready</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Company logo (PNG/SVG format)</li>
                  <li>• 3-5 portfolio samples with case studies</li>
                  <li>• Team member photos and bios</li>
                  <li>• Client testimonials and references</li>
                  <li>• Business registration documents</li>
                  <li>• List of services and pricing information</li>
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Download Preparation Checklist
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free and upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold">Free</div>
                <p className="text-muted-foreground">Forever</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Basic agency listing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Portfolio showcase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Up to 3 leads per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Client reviews</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started Free
              </Button>
            </Card>

            <Card className="p-8 relative border-primary">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold">$99</div>
                <p className="text-muted-foreground">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Everything in Starter</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Unlimited leads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Priority placement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Lead management tools</span>
                </li>
              </ul>
              <Button variant="hero" className="w-full">
                Start 14-Day Free Trial
              </Button>
            </Card>

            <Card className="p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold">$299</div>
                <p className="text-muted-foreground">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Everything in Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Custom branding options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">White-label reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">API access</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of agencies already growing their business with us. 
            The application process takes less than 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Submit Your Agency Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Questions? Contact our team at{" "}
            <a href="mailto:submissions@agencydirectory.com" className="text-primary underline">
              submissions@agencydirectory.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SubmitAgency;