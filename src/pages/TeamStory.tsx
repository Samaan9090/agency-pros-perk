import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Heart } from "lucide-react";

const TeamStory = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former agency owner with 15+ years in digital marketing. Built her first agency from 2 to 200 employees.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO",
      bio: "Ex-Google engineer passionate about connecting creative talent with businesses that need them.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      role: "Head of Partnerships",
      bio: "15 years building relationships between agencies and Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded with a mission to democratize agency discovery" },
    { year: "2020", event: "Reached 1,000 verified agencies" },
    { year: "2021", event: "Launched in 50+ countries" },
    { year: "2022", event: "10,000+ successful project matches" },
    { year: "2023", event: "Expanded to 150+ countries with AI-powered matching" },
    { year: "2024", event: "50,000+ agencies and $2B+ in projects facilitated" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Our Story & Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're on a mission to connect the world's best creative agencies with businesses 
            that need their expertise. Here's how we got started and who's making it happen.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why We Started This
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2019, our founder Sarah was running a successful digital agency but noticed a huge problem: 
                  talented agencies were struggling to find quality clients, while businesses couldn't find the right creative partners.
                </p>
                <p>
                  The existing platforms were either too expensive, filled with low-quality leads, or simply didn't understand 
                  the creative industry. We knew there had to be a better way.
                </p>
                <p>
                  So we built the platform we wished existed - one that truly understands agencies, vets clients properly, 
                  and creates meaningful connections that drive real business growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Agencies</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-2 mx-auto">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of industry veterans, engineers, and creative professionals 
              working together to transform how agencies and clients connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our mission to transform the agency industry
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We believe in connecting only the best agencies with serious clients, maintaining high standards for everyone.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Our success comes from the success of our agency community. We're here to help you grow.
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-muted-foreground">
                Breaking down barriers between talented agencies and clients worldwide, regardless of location.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want to Join Our Story?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're an agency looking to grow or a business seeking creative partners, 
            we'd love to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              List Your Agency
            </Button>
            <Button variant="outline" size="lg">
              Find An Agency
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamStory;