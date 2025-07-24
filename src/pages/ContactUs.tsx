import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about our platform? Want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <MessageSquare className="w-6 h-6" />
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-white/70">
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <Mail className="w-5 h-5 text-primary-glow" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">hello@agencydirectory.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <Phone className="w-5 h-5 text-primary-glow" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <MapPin className="w-5 h-5 text-primary-glow" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-white/80">
                      123 Agency Street<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-2">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM PST</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Send us a Message</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject *</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-300 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;