import { Award, Users, Building, Leaf } from "lucide-react"

const stats = [
  { icon: Building, label: "Projects Completed", value: "150+" },
  { icon: Award, label: "Design Awards", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Leaf, label: "Sustainable Projects", value: "85%" },
]

const values = [
  {
    title: "Innovation",
    description: "We push the boundaries of architectural design, embracing new technologies and sustainable materials."
  },
  {
    title: "Sustainability", 
    description: "Every project integrates eco-friendly solutions, reducing environmental impact while enhancing living quality."
  },
  {
    title: "Collaboration",
    description: "We work closely with clients, engineers, and communities to create spaces that truly serve their users."
  }
]

export const About = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Designing Tomorrow's 
            <span className="text-terracotta block">Architecture Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over a decade, ARIA Architecture Studio has been at the forefront of innovative design, 
            creating spaces that balance functionality, beauty, and environmental responsibility.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-forest mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-8 text-center hover:shadow-elegant transition-all duration-300 group">
              <h3 className="text-2xl font-serif font-semibold text-forest mb-4 group-hover:text-terracotta transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}