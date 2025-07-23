import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Calendar,
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  Target
} from "lucide-react";

const RankingMethodology = () => {
  const rankingFactors = [
    {
      icon: Award,
      factor: "Portfolio Quality",
      weight: "25%",
      description: "Quality of work samples, creativity, innovation, and visual impact of completed projects.",
      criteria: [
        "Project complexity and innovation",
        "Visual design and creativity",
        "Technical execution quality",
        "Results and business impact"
      ]
    },
    {
      icon: MessageSquare,
      factor: "Client Reviews",
      weight: "20%",
      description: "Authentic client feedback, ratings, and testimonials from verified completed projects.",
      criteria: [
        "Overall satisfaction ratings",
        "Communication quality scores",
        "Timeline adherence",
        "Post-project support"
      ]
    },
    {
      icon: BarChart3,
      factor: "Performance Metrics",
      weight: "20%",
      description: "Measurable business results, project success rates, and performance indicators.",
      criteria: [
        "Project completion rate",
        "Client retention percentage",
        "Response time to inquiries",
        "Budget adherence"
      ]
    },
    {
      icon: Users,
      factor: "Team Expertise",
      weight: "15%",
      description: "Team qualifications, certifications, industry experience, and specialized skills.",
      criteria: [
        "Years of industry experience",
        "Team certifications and awards",
        "Specialized skill sets",
        "Leadership experience"
      ]
    },
    {
      icon: TrendingUp,
      factor: "Market Presence",
      weight: "10%",
      description: "Industry recognition, thought leadership, and market reputation within their specialization.",
      criteria: [
        "Industry awards and recognition",
        "Published case studies",
        "Speaking engagements",
        "Media mentions"
      ]
    },
    {
      icon: Calendar,
      factor: "Reliability",
      weight: "10%",
      description: "Consistency in delivery, communication responsiveness, and long-term client relationships.",
      criteria: [
        "On-time project delivery",
        "Communication responsiveness",
        "Long-term client relationships",
        "Dispute resolution"
      ]
    }
  ];

  const verificationSteps = [
    {
      step: "1",
      title: "Profile Verification",
      description: "We verify business registration, team credentials, and contact information."
    },
    {
      step: "2", 
      title: "Portfolio Review",
      description: "Our experts manually review work samples and validate project claims."
    },
    {
      step: "3",
      title: "Client Validation",
      description: "We contact past clients to verify testimonials and project outcomes."
    },
    {
      step: "4",
      title: "Performance Monitoring",
      description: "Ongoing tracking of response times, completion rates, and client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Ranking Methodology
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Learn how we evaluate and rank agencies to help you find the best creative partners. 
            Our transparent, data-driven approach ensures quality and reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              6 Key Factors
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Manual Verification
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Updated Monthly
            </Badge>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Transparent Approach
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unlike other platforms that hide their ranking criteria, we believe in complete transparency. 
              Here's exactly how we evaluate agencies to ensure you're connecting with top performers.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">100% Verified</h3>
                <p className="text-sm text-muted-foreground">Every agency undergoes manual verification</p>
              </Card>
              <Card className="p-6">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data-Driven</h3>
                <p className="text-sm text-muted-foreground">Rankings based on measurable metrics</p>
              </Card>
              <Card className="p-6">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Regularly Updated</h3>
                <p className="text-sm text-muted-foreground">Monthly recalculations ensure accuracy</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ranking Factors Breakdown
            </h2>
            <p className="text-lg text-muted-foreground">
              Each agency is scored across six key areas, with weights assigned based on client priorities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {rankingFactors.map((factor, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <factor.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold">{factor.factor}</h3>
                      <Badge variant="secondary">{factor.weight}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{factor.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Evaluation Criteria:</p>
                      <ul className="space-y-1">
                        {factor.criteria.map((criterion, criterionIndex) => (
                          <li key={criterionIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Verification Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Every agency goes through our rigorous 4-step verification before being listed
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verificationSteps.map((step, index) => (
                <Card key={index} className="p-6 text-center relative">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < verificationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Scoring System
              </h2>
              <p className="text-lg text-muted-foreground">
                How we calculate final rankings and what the scores mean
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Gold (90-100)</h3>
                <p className="text-sm text-muted-foreground">
                  Elite agencies with exceptional track records and consistently outstanding results
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Silver (75-89)</h3>
                <p className="text-sm text-muted-foreground">
                  High-performing agencies with strong portfolios and excellent client satisfaction
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Bronze (60-74)</h3>
                <p className="text-sm text-muted-foreground">
                  Solid agencies with good work quality and positive client feedback
                </p>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Key Points About Our Rankings:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Rankings are updated monthly with fresh data and client feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>All client reviews are verified and checked for authenticity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Agencies can improve their ranking by consistently delivering great work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>No agency can pay to improve their ranking - it's purely merit-based</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions About Our Methodology?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're committed to transparency. If you have questions about how we rank agencies 
            or want to understand your agency's score, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:rankings@agencydirectory.com" className="inline-block">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Contact Our Rankings Team
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RankingMethodology;