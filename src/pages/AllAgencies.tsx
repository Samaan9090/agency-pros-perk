import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star,
  Users,
  Globe,
  Award,
  TrendingUp,
  SlidersHorizontal
} from "lucide-react";

const AllAgencies = () => {
  const featuredAgencies = [
    {
      name: "Pixel Perfect Studio",
      location: "San Francisco, CA",
      specialties: ["Web Design", "Branding", "UX/UI"],
      rating: 4.9,
      reviews: 127,
      teamSize: "15-25",
      verified: true,
      featured: true,
      description: "Award-winning digital agency specializing in creating exceptional user experiences for SaaS companies.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      portfolio: ["Fintech App", "E-commerce Platform", "Healthcare Dashboard"],
      startingPrice: "$5,000"
    },
    {
      name: "Growth Marketing Co",
      location: "New York, NY", 
      specialties: ["Digital Marketing", "SEO", "PPC"],
      rating: 4.8,
      reviews: 89,
      teamSize: "10-15",
      verified: true,
      featured: true,
      description: "Data-driven marketing agency that has generated over $50M in revenue for our clients.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      portfolio: ["SaaS Growth Campaign", "E-commerce SEO", "Lead Generation"],
      startingPrice: "$3,000"
    },
    {
      name: "Creative Minds Agency",
      location: "London, UK",
      specialties: ["Branding", "Video Production", "Creative Strategy"],
      rating: 4.9,
      reviews: 156,
      teamSize: "25-50",
      verified: true,
      featured: false,
      description: "International creative agency with offices in London, Paris, and Berlin. Clients include Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
      portfolio: ["Global Rebrand", "Video Campaign", "Product Launch"],
      startingPrice: "$10,000"
    }
  ];

  const filters = [
    {
      category: "Location",
      options: ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France"]
    },
    {
      category: "Specialization", 
      options: ["Web Development", "Branding", "Digital Marketing", "Mobile Apps", "Video Production", "SEO"]
    },
    {
      category: "Team Size",
      options: ["1-5", "5-15", "15-25", "25-50", "50-100", "100+"]
    },
    {
      category: "Budget Range",
      options: ["Under $5K", "$5K-$15K", "$15K-$50K", "$50K-$100K", "$100K+"]
    }
  ];

  const categories = [
    { name: "All Agencies", count: "50,000+", active: true },
    { name: "Web Development", count: "18,200" },
    { name: "Digital Marketing", count: "22,100" },
    { name: "Branding", count: "12,500" },
    { name: "Mobile Apps", count: "8,900" },
    { name: "Video Production", count: "6,700" },
    { name: "UI/UX Design", count: "11,300" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Find Your Perfect Agency
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Browse 50,000+ verified agencies from around the world. Use our advanced filters 
            to find the perfect creative partner for your project.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search agencies by name, service, or keyword..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <Button variant="secondary" className="bg-white text-primary">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              50K+ Verified Agencies
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              150+ Countries
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              All Specializations
            </Badge>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className="flex-shrink-0 flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="h-5 w-5" />
                  <h3 className="font-semibold">Filters</h3>
                </div>
                
                {filters.map((filter, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-medium mb-3">{filter.category}</h4>
                    <div className="space-y-2">
                      {filter.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  Apply Filters
                </Button>
              </Card>
            </div>

            {/* Agencies Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Featured Agencies</h2>
                  <p className="text-muted-foreground">Showing 3 of 50,000+ agencies</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="border rounded px-3 py-1 text-sm">
                    <option>Relevance</option>
                    <option>Rating</option>
                    <option>Reviews</option>
                    <option>Price</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {featuredAgencies.map((agency, index) => (
                  <Card key={index} className="p-6 hover:shadow-card transition-smooth">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="md:col-span-1">
                        <img 
                          src={agency.image} 
                          alt={agency.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{agency.name}</h3>
                          {agency.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          {agency.featured && (
                            <Badge className="text-xs">Featured</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {agency.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {agency.teamSize} team
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span className="font-medium">{agency.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({agency.reviews} reviews)
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {agency.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {agency.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:col-span-1 text-right">
                        <div className="mb-4">
                          <div className="text-sm text-muted-foreground">Starting at</div>
                          <div className="text-2xl font-bold text-primary">{agency.startingPrice}</div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <Button variant="hero" className="w-full">
                            View Profile
                          </Button>
                          <Button variant="outline" className="w-full">
                            Contact Agency
                          </Button>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          <p>Recent work:</p>
                          <ul className="mt-1">
                            {agency.portfolio.slice(0, 2).map((work, workIndex) => (
                              <li key={workIndex}>• {work}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Agencies
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Showing 3 of 50,000+ agencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
            <p className="text-muted-foreground">Real numbers from our platform</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">50,000+</div>
              <p className="text-sm text-muted-foreground">Verified Agencies</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">2.3M+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">$5.2B+</div>
              <p className="text-sm text-muted-foreground">Total Project Value</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">4.8/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllAgencies;