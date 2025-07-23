import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp, Eye } from "lucide-react";

const TrendsArticles = () => {
  const featuredArticle = {
    title: "The Rise of AI in Creative Agencies: Opportunities and Challenges in 2024",
    excerpt: "How leading agencies are integrating artificial intelligence into their workflows, the tools they're using, and what this means for the future of creative work.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    views: "12.5K"
  };

  const articles = [
    {
      title: "Remote-First Agency Models: Lessons from Top Performers",
      excerpt: "Analysis of agencies that have successfully transitioned to remote-first operations and the strategies that made them successful.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      views: "8.2K"
    },
    {
      title: "Client Retention Strategies That Actually Work in 2024",
      excerpt: "Data-driven insights into what keeps clients coming back, based on analysis of 10,000+ agency-client relationships.",
      author: "Emma Thompson",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Client Relations",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop",
      views: "9.8K"
    },
    {
      title: "The New Rules of Agency Pricing in a Post-Pandemic World",
      excerpt: "How successful agencies are restructuring their pricing models to reflect new market realities and client expectations.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Pricing",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      views: "7.1K"
    },
    {
      title: "Sustainability in Creative Work: More Than Just a Trend",
      excerpt: "Why sustainable practices are becoming a competitive advantage for agencies and how to implement them effectively.",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
      views: "6.4K"
    },
    {
      title: "The Data-Driven Agency: Analytics Tools That Matter",
      excerpt: "Essential analytics tools and metrics that top-performing agencies use to drive decision-making and client results.",
      author: "Alex Chen",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      views: "11.2K"
    },
    {
      title: "Specialization vs. Full-Service: What the Data Says",
      excerpt: "Comprehensive analysis of agency performance data reveals which model is winning in today's competitive landscape.",
      author: "Rachel Green",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Business Strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      views: "5.7K"
    }
  ];

  const categories = [
    { name: "All Articles", count: 127 },
    { name: "Business Strategy", count: 34 },
    { name: "Technology", count: 28 },
    { name: "Client Relations", count: 22 },
    { name: "Pricing", count: 18 },
    { name: "Analytics", count: 15 },
    { name: "Sustainability", count: 10 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Industry Trends & Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with data-driven insights, industry analysis, and trends 
            shaping the future of creative agencies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Weekly Updates
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Industry Experts
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Data-Driven Analysis
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Featured Article
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    {featuredArticle.views} views
                  </div>
                </div>
                <Button variant="hero" size="lg" className="group">
                  Read Full Article
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div>
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="rounded-2xl shadow-card w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find articles that match your interests and business needs
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="flex items-center gap-2"
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

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Fresh insights and analysis from industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-smooth group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {article.views}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Informed
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get weekly insights delivered to your inbox. No spam, just valuable content 
              to help your agency stay competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 15,000+ agency professionals already subscribed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendsArticles;