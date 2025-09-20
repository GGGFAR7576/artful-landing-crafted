import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, Play } from "lucide-react"
import heroImage from "@/assets/hero-architecture.jpg"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/80 via-stone/60 to-transparent"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-sand/30 rotate-45 float hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-terracotta/20 rounded-full float animation-delay-2000 hidden lg:block"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-accent/40 transform rotate-12 float animation-delay-4000 hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="hero-title mb-6">
            Creating Spaces That 
            <span className="block text-sand">Inspire Living</span>
          </h1>
          
          <p className="hero-subtitle mb-12 max-w-2xl mx-auto text-sand/90">
            ARIA Architecture Studio combines innovative design with sustainable practices 
            to create extraordinary spaces that harmonize with their environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group animate-slide-up animation-delay-500"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm animate-slide-up animation-delay-700"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Showcase
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sand/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sand/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}