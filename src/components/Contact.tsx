import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@aria-architecture.com",
    subtitle: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+45 33 12 34 56",
    subtitle: "Mon-Fri 9:00-18:00 CET"
  },
  {
    icon: MapPin,
    title: "Studio",
    details: "Nørrebrogade 45, Copenhagen",
    subtitle: "Visit by appointment"
  },
  {
    icon: Clock,
    title: "Consultation",
    details: "Free 30-min session",
    subtitle: "Discuss your project with us"
  }
]

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Let's Create Something
            <span className="text-terracotta block">Extraordinary Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch with our team and let's discuss your next architectural project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Tell Us About Your Project
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-background/50 border-border/50 focus:border-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-background/50 border-border/50 focus:border-terracotta"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background/50 border-border/50 focus:border-terracotta"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full h-10 px-3 py-2 bg-background/50 border border-border/50 rounded-lg focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                  <option>Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description
                </label>
                <Textarea 
                  placeholder="Tell us about your vision, requirements, and any specific details..."
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-terracotta resize-none"
                />
              </div>
              
              <Button variant="terracotta" size="lg" className="w-full button-hover">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/30 hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-forest font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional Info */}
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Follow Our Journey
              </h4>
              <p className="text-muted-foreground mb-4">
                Stay updated with our latest projects and architectural insights.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">Instagram</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Behance</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}