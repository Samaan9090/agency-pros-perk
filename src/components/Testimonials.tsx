import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "PixelCraft Studios",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    content: "Since joining this platform, we've increased our client base by 300%. The quality of leads is exceptional, and the verification process ensures we're working with serious businesses.",
    rating: 5,
    revenue: "+$2.5M"
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    company: "Apex Creative Agency",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The platform's matching algorithm is incredibly accurate. We're now working with Fortune 500 companies we never could have reached before. It's been a game-changer for our growth.",
    rating: 5,
    revenue: "+$1.8M"
  },
  {
    name: "Emily Watson",
    role: "CEO",
    company: "Digital Realm Co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The verification badge and client reviews have dramatically improved our credibility. We've gone from pitching to clients choosing us. The ROI has been incredible.",
    rating: 5,
    revenue: "+$950K"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from agencies that have transformed their business with our platform. 
            These are real results from real agencies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative group hover:shadow-card transition-smooth">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-bold text-primary">
                      {testimonial.revenue}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Revenue Growth
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;