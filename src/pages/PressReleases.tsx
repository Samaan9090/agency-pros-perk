import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Download } from "lucide-react";

const pressReleases = [
  {
    id: 1,
    title: "Agency Directory Surpasses 10,000 Listed Agencies Milestone",
    date: "2024-01-15",
    category: "Company News",
    summary: "Our platform has reached a significant milestone with over 10,000 verified agencies now listed, representing a 300% growth in the past year.",
    content: "We're excited to announce that our agency directory has surpassed 10,000 listed agencies, making it one of the largest curated databases of creative and marketing agencies worldwide...",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "New AI-Powered Agency Matching Algorithm Launched",
    date: "2024-01-08",
    category: "Product Update",
    summary: "Introducing our revolutionary AI matching system that connects businesses with the perfect agency partners based on industry, budget, and project requirements.",
    content: "Today we're launching our groundbreaking AI-powered matching algorithm that analyzes over 50 data points to connect businesses with their ideal agency partners...",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Partnership Announcement with Global Agency Networks",
    date: "2023-12-20",
    category: "Partnership",
    summary: "Strategic partnerships with leading agency networks expand our global reach and provide enhanced services to international clients.",
    content: "We're thrilled to announce strategic partnerships with several leading global agency networks, significantly expanding our international presence...",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Annual Agency Performance Report 2023 Released",
    date: "2023-12-15",
    category: "Research",
    summary: "Our comprehensive analysis reveals key trends in agency performance, client satisfaction, and industry growth patterns for 2023.",
    content: "Our annual research report provides unprecedented insights into agency performance metrics, client satisfaction scores, and emerging industry trends...",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Agency Directory Wins 'Best B2B Platform' Award",
    date: "2023-11-30",
    category: "Awards",
    summary: "Recognized for excellence in connecting businesses with agencies and driving industry innovation at the 2023 B2B Excellence Awards.",
    content: "We're honored to receive the 'Best B2B Platform' award at the prestigious 2023 B2B Excellence Awards, recognizing our commitment to innovation...",
    downloadUrl: "#"
  }
];

const PressReleases = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Company News": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Product Update": "bg-green-500/20 text-green-300 border-green-500/30",
      "Partnership": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Research": "bg-orange-500/20 text-orange-300 border-orange-500/30",
      "Awards": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Press Releases
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest news, product updates, and announcements from our team.
          </p>
        </div>

        {/* Press Releases Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {pressReleases.map((release) => (
            <Card key={release.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Badge className={getCategoryColor(release.category)}>
                      {release.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{formatDate(release.date)}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-2xl text-white mt-4">
                  {release.title}
                </CardTitle>
                <CardDescription className="text-white/70 text-base">
                  {release.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 leading-relaxed">
                  {release.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Media Inquiries
              </CardTitle>
              <CardDescription className="text-white/70">
                For press inquiries, interviews, or additional information about our company.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong>Press Contact:</strong> Sarah Johnson, PR Manager
                </p>
                <p>
                  <strong>Email:</strong> press@agencydirectory.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
              <Button className="mt-6 bg-white text-primary hover:bg-white/90">
                Contact Press Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PressReleases;