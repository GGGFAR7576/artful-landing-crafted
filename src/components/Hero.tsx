import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, Play, Award, Star } from "lucide-react"
import heroImage from "@/assets/hero-architecture.jpg"

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern architecture" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-stone/70 to-terracotta/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-sand/20 rotate-45 float hidden xl:block"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-terracotta/15 rounded-full float hidden xl:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-accent/30 transform rotate-12 float hidden xl:block" style={{ animationDelay: '4s' }}></div>
      
      {/* Awards Badge */}
      <div className="absolute top-32 left-8 glass-card p-4 hidden lg:block animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-sand font-semibold">25+ наград</div>
            <div className="text-sand/70 text-sm">за дизайн</div>
          </div>
        </div>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-32 right-8 glass-card p-4 hidden lg:block animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-sand font-semibold">5.0</div>
        </div>
        <div className="text-sand/70 text-sm mt-1">200+ отзывов</div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="inline-block bg-terracotta/20 backdrop-blur-sm border border-terracotta/30 rounded-full px-6 py-2 mb-8 text-sand font-medium">
            ✨ Премиальная архитектурная студия в Европе
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8">
            <span className="text-sand">Создаем</span>
            <br />
            <span className="hero-title">Пространства</span>
            <br />
            <span className="text-sand/90">Мечты</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sand/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            ARIA Architecture Studio — ведущая архитектурная студия Европы, создающая 
            исключительные пространства, где инновации встречаются с устойчивостью
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="xl" 
              className="group animate-slide-up min-w-[200px]"
              style={{ animationDelay: '500ms' }}
            >
              Наши проекты
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm animate-slide-up min-w-[200px]"
              style={{ animationDelay: '700ms' }}
            >
              <Play className="mr-2 h-5 w-5" />
              Видео-презентация
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sand mb-2">150+</div>
              <div className="text-sand/70 text-sm">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sand mb-2">12</div>
              <div className="text-sand/70 text-sm">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sand mb-2">3</div>
              <div className="text-sand/70 text-sm">Страны</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sand/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sand/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <div className="text-sand/70 text-xs mt-2 text-center">Скролл</div>
      </div>
    </section>
  )
}