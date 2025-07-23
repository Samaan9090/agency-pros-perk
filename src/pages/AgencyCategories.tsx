import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Smartphone, 
  Globe, 
  Video, 
  Search, 
  TrendingUp,
  Megaphone,
  Camera,
  Code,
  Layers,
  Target,
  BarChart3
} from "lucide-react";

const AgencyCategories = () => {
  const categories = [
    {
      icon: Palette,
      name: "Branding & Design",
      description: "Logo design, brand identity, visual guidelines, and brand strategy",
      agencyCount: "12,500+",
      avgProjectSize: "$25K",
      topSkills: ["Logo Design", "Brand Strategy", "Visual Identity", "Guidelines"]
    },
    {
      icon: Globe,
      name: "Web Development",
      description: "Custom websites, e-commerce, web applications, and CMS development",
      agencyCount: "18,200+",
      avgProjectSize: "$45K",
      topSkills: ["React", "WordPress", "E-commerce", "Custom Development"]
    },
    {
      icon: Smartphone,
      name: "Mobile App Development",
      description: "iOS and Android apps, cross-platform development, and app strategy",
      agencyCount: "8,900+",
      avgProjectSize: "$85K",
      topSkills: ["iOS Development", "Android", "React Native", "Flutter"]
    },
    {
      icon: Search,
      name: "Digital Marketing",
      description: "SEO, PPC, social media marketing, and digital strategy",
      agencyCount: "22,100+",
      avgProjectSize: "$15K",
      topSkills: ["Google Ads", "Facebook Ads", "SEO", "Content Marketing"]
    },
    {
      icon: Video,
      name: "Video Production",
      description: "Corporate videos, commercials, animation, and post-production",
      agencyCount: "6,700+",
      avgProjectSize: "$35K",
      topSkills: ["Video Production", "Animation", "Motion Graphics", "Editing"]
    },
    {
      icon: TrendingUp,
      name: "Growth Marketing",
      description: "Performance marketing, conversion optimization, and analytics",
      agencyCount: "5,400+",
      avgProjectSize: "$28K",
      topSkills: ["CRO", "Analytics", "A/B Testing", "Performance Marketing"]
    },
    {
      icon: Megaphone,
      name: "PR & Communications",
      description: "Public relations, crisis management, and communications strategy",
      agencyCount: "4,200+",
      avgProjectSize: "$20K",
      topSkills: ["Media Relations", "Crisis Management", "Content Strategy", "Influencer Relations"]
    },
    {
      icon: Camera,
      name: "Photography",
      description: "Product photography, corporate headshots, and brand photography",
      agencyCount: "3,800+",
      avgProjectSize: "$8K",
      topSkills: ["Product Photography", "Portrait", "Commercial", "Event Photography"]
    },
    {
      icon: Code,
      name: "Software Development",
      description: "Custom software, SaaS platforms, and enterprise solutions",
      agencyCount: "9,600+",
      avgProjectSize: "$120K",
      topSkills: ["Custom Software", "SaaS", "API Development", "Cloud Solutions"]
    },
    {
      icon: Layers,
      name: "UI/UX Design",
      description: "User experience design, interface design, and usability testing",
      agencyCount: "11,300+",
      avgProjectSize: "$32K",
      topSkills: ["UI Design", "UX Research", "Prototyping", "User Testing"]
    },
    {
      icon: Target,
      name: "Strategy & Consulting",
      description: "Business strategy, digital transformation, and marketing consulting",
      agencyCount: "2,900+",
      avgProjectSize: "$75K",
      topSkills: ["Business Strategy", "Digital Transformation", "Market Research", "Consulting"]
    },
    {
      icon: BarChart3,
      name: "Data & Analytics",
      description: "Data analysis, business intelligence, and performance tracking",
      agencyCount: "1,800+",
      avgProjectSize: "$55K",
      topSkills: ["Data Analysis", "BI Tools", "Reporting", "Performance Tracking"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Agency Categories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover specialized agencies across all creative and digital disciplines. 
            Find the perfect match for your project needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              105,000+ Verified Agencies
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              12 Specialized Categories
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              150+ Countries
            </Badge>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Find Agencies by Specialization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each category features thoroughly vetted agencies with proven track records 
              and specialized expertise in their field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-smooth group cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <category.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    <Badge variant="secondary" className="text-xs">
                      {category.agencyCount}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Project:</span>
                      <span className="font-medium">{category.avgProjectSize}</span>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Top Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.topSkills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {category.topSkills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.topSkills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Browse {category.name} Agencies
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Category Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Real data from our platform to help you understand market trends
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.3B+</div>
              <p className="text-sm text-muted-foreground">Total project value</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">94%</div>
              <p className="text-sm text-muted-foreground">Client satisfaction rate</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">45K+</div>
              <p className="text-sm text-muted-foreground">Projects completed</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">72hrs</div>
              <p className="text-sm text-muted-foreground">Avg. response time</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Agency?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse agencies by category or tell us about your project and we'll match you 
            with the best specialists for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your Search
            </Button>
            <Button variant="outline" size="lg">
              Post Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgencyCategories;