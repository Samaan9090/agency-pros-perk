import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden bg-gradient-primary p-12 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <Sparkles className="absolute top-8 right-8 h-12 w-12 text-white/30" />
          <Sparkles className="absolute bottom-8 left-8 h-8 w-8 text-white/20" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Transform Your Agency?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of successful agencies already growing their business with us. 
                Start connecting with high-value clients today.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                "Free to get started",
                "No setup fees",
                "Cancel anytime",
                "Premium support included"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 group font-semibold"
              >
                List Your Agency Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Schedule a Demo
              </Button>
            </div>

            <p className="text-sm text-white/70">
              Questions? Contact our team at{" "}
              <a href="mailto:hello@agencydirectory.com" className="underline hover:text-white">
                hello@agencydirectory.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;