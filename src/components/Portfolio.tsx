import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"

const projects = [
  {
    id: 1,
    title: "Harmony Residence",
    category: "Жилая архитектура",
    location: "Копенгаген, Дания",
    year: "2023",
    image: project1,
    description: "Устойчивый семейный дом, который гармонично сочетает современный дизайн с натуральными материалами.",
    area: "280 м²",
    price: "€750K"
  },
  {
    id: 2,
    title: "Verde Office Complex",
    category: "Коммерческая архитектура",
    location: "Амстердам, Нидерланды", 
    year: "2023",
    image: project2,
    description: "Инновационное рабочее пространство с зелеными террасами и энергоэффективными системами.",
    area: "1,200 м²",
    price: "€2.1M"
  },
  {
    id: 3,
    title: "Serenity Villa",
    category: "Жилая архитектура",
    location: "Майорка, Испания",
    year: "2022",
    image: project3,
    description: "Роскошное убежище, максимизирующее естественное освещение и виды на океан.",
    area: "350 м²",
    price: "€1.2M"
  },
]

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-hero opacity-5 rounded-full translate-y-48 translate-x-48 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-forest/10 border border-forest/20 rounded-full px-6 py-2 mb-6 text-forest font-medium">
            Наши работы
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Избранные
            <span className="text-terracotta"> проекты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Исследуйте наши последние архитектурные достижения, демонстрирующие наш подход к инновационному дизайну и устойчивому образу жизни.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group glass-card overflow-hidden hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.area}
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white font-bold text-lg">{project.price}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3 group-hover:text-terracotta transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-terracotta group-hover:text-white transition-all duration-300 font-medium"
                >
                  Смотреть проект
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="forest" size="lg" className="button-hover">
            Все проекты
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}