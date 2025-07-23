import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I list my agency on the platform?",
          answer: "Getting started is simple. Click 'List Your Agency' and complete our verification process. You'll need to provide business information, portfolio samples, and client references. Our team reviews all applications within 48 hours."
        },
        {
          question: "Is it free to list my agency?",
          answer: "Yes, basic listings are completely free. You can upgrade to premium features like priority placement, advanced analytics, and lead management tools with our paid plans starting at $99/month."
        },
        {
          question: "How long does the verification process take?",
          answer: "Most agencies are verified within 24-48 hours. The process includes business verification, portfolio review, and reference checks. We'll email you once your profile is approved and live."
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need business registration details, team information, 3-5 portfolio samples, client references, and any relevant certifications or awards. The more complete your profile, the better your visibility."
        }
      ]
    },
    {
      title: "Leads & Projects",
      faqs: [
        {
          question: "How do I receive project leads?",
          answer: "Qualified leads are sent directly to your inbox based on your specialization and location preferences. Premium members get first access and detailed client briefs with budget information."
        },
        {
          question: "What types of projects are available?",
          answer: "We feature projects across all creative disciplines: branding, web development, mobile apps, digital marketing, video production, and more. Project values range from $5K to $500K+."
        },
        {
          question: "How are leads qualified?",
          answer: "All clients go through our verification process. We check business legitimacy, project budgets, and timeline feasibility before leads are distributed to ensure you're only getting serious inquiries."
        },
        {
          question: "Can I filter the types of leads I receive?",
          answer: "Absolutely. You can set preferences for project size, industry, location, and service type. This ensures you only receive leads that match your agency's capabilities and interests."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "What's included in the free plan?",
          answer: "Free accounts include a basic listing, portfolio showcase, client reviews, and access to some project leads. You can receive up to 3 qualified leads per month on the free plan."
        },
        {
          question: "What are the benefits of premium plans?",
          answer: "Premium plans include unlimited leads, priority placement in search results, detailed client briefs with budgets, advanced analytics, team collaboration tools, and dedicated account support."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period, and you can reactivate whenever you're ready."
        },
        {
          question: "Do you offer discounts for annual plans?",
          answer: "Yes! Annual plans include a 20% discount. We also offer special rates for agencies under 5 employees and educational institutions."
        }
      ]
    },
    {
      title: "Profile & Rankings",
      faqs: [
        {
          question: "How are agency rankings determined?",
          answer: "Rankings are based on portfolio quality (25%), client reviews (20%), performance metrics (20%), team expertise (15%), market presence (10%), and reliability (10%). Full methodology is available on our Ranking Methodology page."
        },
        {
          question: "How can I improve my agency's ranking?",
          answer: "Focus on delivering excellent work, gathering client testimonials, maintaining quick response times, and keeping your portfolio updated. Rankings are recalculated monthly based on fresh data."
        },
        {
          question: "Can I edit my profile after it's published?",
          answer: "Yes, you can update your profile anytime. Changes to basic information are instant, while portfolio updates may require review. We recommend keeping your profile fresh with recent work."
        },
        {
          question: "Why isn't my agency showing up in search results?",
          answer: "This could be due to an incomplete profile, pending verification, or search filters. Ensure your profile is 100% complete and verified. Contact support if you're still not appearing in relevant searches."
        }
      ]
    },
    {
      title: "Client Relations",
      faqs: [
        {
          question: "How do client reviews work?",
          answer: "After project completion, clients are invited to leave reviews rating communication, quality, timeline adherence, and overall satisfaction. All reviews are verified to ensure authenticity."
        },
        {
          question: "What if I receive a negative review?",
          answer: "You can respond to any review to provide your perspective. If a review violates our guidelines or contains false information, you can dispute it through our support team."
        },
        {
          question: "Can I contact clients directly?",
          answer: "Once a client expresses interest in your agency, you'll receive their contact information to begin direct communication. We encourage professional, prompt responses to all inquiries."
        },
        {
          question: "What happens if a project doesn't work out?",
          answer: "While we carefully vet all parties, project issues can arise. Our support team can help mediate disputes and provide guidance on best practices for client relationships."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Find answers to common questions about listing your agency, receiving leads, 
            and growing your business on our platform.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Search for answers..."
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button variant="secondary" className="bg-white text-primary">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <Button key={index} variant="outline" className="h-auto py-4 px-6">
                <div className="text-center">
                  <div className="font-medium text-sm">{category.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {category.faqs.length} questions
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-8 p-6">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our support team is here to help. Choose the option that works best for you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Live Chat Support</h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers from our support team. Available Monday-Friday, 9 AM - 6 PM PST.
                </p>
                <Button variant="hero" className="w-full">
                  Start Live Chat
                </Button>
              </Card>
              
              <Card className="p-8 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Email Support</h3>
                <p className="text-muted-foreground mb-6">
                  Send us a detailed message and we'll get back to you within 24 hours.
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </Card>
            </div>
            
            <div className="mt-12 p-6 bg-primary/10 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Need help getting started?</h3>
              <p className="text-muted-foreground mb-4">
                Book a free 15-minute call with our onboarding team to get your agency profile optimized for success.
              </p>
              <Button variant="hero">
                Schedule Onboarding Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;