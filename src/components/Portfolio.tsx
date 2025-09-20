import { Button } from "@/components/ui/enhanced-button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"

const projects = [
  {
    id: 1,
    title: "Harmony Residence",
    category: "Residential",
    location: "Copenhagen, Denmark",
    year: "2023",
    image: project1,
    description: "A sustainable family home that seamlessly blends modern design with natural materials.",
  },
  {
    id: 2,
    title: "Verde Office Complex",
    category: "Commercial",
    location: "Amsterdam, Netherlands", 
    year: "2023",
    image: project2,
    description: "An innovative workspace featuring green terraces and energy-efficient systems.",
  },
  {
    id: 3,
    title: "Serenity Villa",
    category: "Residential",
    location: "Mallorca, Spain",
    year: "2022",
    image: project3,
    description: "A luxury retreat that maximizes natural light and ocean views through thoughtful design.",
  },
]

export const Portfolio = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured
            <span className="text-terracotta"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest architectural achievements that showcase our commitment to innovative design and sustainable living.
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
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
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
                  className="w-full group-hover:bg-terracotta group-hover:text-white transition-all duration-300"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="forest" size="lg" className="button-hover">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}