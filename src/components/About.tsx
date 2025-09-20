import { Award, Users, Building, Leaf, Target, Heart, Lightbulb } from "lucide-react"

const stats = [
  { icon: Building, label: "Проектов завершено", value: "150+" },
  { icon: Award, label: "Наград за дизайн", value: "25+" },
  { icon: Users, label: "Довольных клиентов", value: "200+" },
  { icon: Leaf, label: "Эко-проектов", value: "85%" },
]

const values = [
  {
    icon: Lightbulb,
    title: "Инновации",
    description: "Мы расширяем границы архитектурного дизайна, внедряя новые технологии и экологичные материалы для создания пространств будущего."
  },
  {
    icon: Leaf,
    title: "Устойчивость", 
    description: "Каждый проект интегрирует экологические решения, снижая воздействие на окружающую среду и повышая качество жизни."
  },
  {
    icon: Heart,
    title: "Сотрудничество",
    description: "Мы тесно работаем с клиентами, инженерами и сообществами, создавая пространства, которые действительно служат своим пользователям."
  },
  {
    icon: Target,
    title: "Точность",
    description: "Внимание к деталям и безупречное исполнение — основа нашего подхода к каждому архитектурному решению."
  }
]

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-accent opacity-5 rounded-full -translate-y-40 -translate-x-40 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-terracotta/10 border border-terracotta/20 rounded-full px-6 py-2 mb-6 text-terracotta font-medium">
            О нашей студии
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Проектируем архитектуру 
            <span className="text-terracotta block">завтрашнего дня</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Более десяти лет ARIA Architecture Studio находится в авангарде инновационного дизайна, 
            создавая пространства, которые гармонично сочетают функциональность, красоту и экологическую ответственность.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-card">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-forest mb-3 font-serif">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="glass-card p-12 rounded-3xl mb-20 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Наша миссия
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Мы создаем архитектурные шедевры, которые не только впечатляют своей красотой, 
            но и служат людям, улучшая качество их жизни и бережно относясь к планете. 
            Каждый наш проект — это симфония формы, функции и устойчивости.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-8 text-center hover:shadow-elegant transition-all duration-500 group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest mb-4 group-hover:text-terracotta transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}