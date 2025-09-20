import { Building2, Lightbulb, TreePine, Users, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"

const services = [
  {
    icon: Building2,
    title: "Архитектурное проектирование",
    description: "Создаем уникальные архитектурные решения от концепции до реализации",
    features: ["3D визуализация", "Технические чертежи", "Авторский надзор", "Согласование документов"],
    color: "terracotta"
  },
  {
    icon: Lightbulb,
    title: "Дизайн интерьеров",
    description: "Проектируем функциональные и стильные пространства для жизни и работы",
    features: ["Планировочные решения", "Подбор материалов", "Мебельное наполнение", "Освещение"],
    color: "forest"
  },
  {
    icon: TreePine,
    title: "Экологичное строительство",
    description: "Внедряем принципы устойчивого развития в каждый проект",
    features: ["Энергоэффективность", "Эко-материалы", "Умные технологии", "LEED сертификация"],
    color: "stone"
  },
  {
    icon: Users,
    title: "Консалтинг и планирование",
    description: "Комплексное сопровождение проектов на всех этапах",
    features: ["Анализ участка", "Бюджетирование", "Управление проектом", "Техническая экспертиза"],
    color: "sand"
  }
]

const processSteps = [
  {
    number: "01",
    title: "Консультация",
    description: "Изучаем ваши потребности, бюджет и пожелания"
  },
  {
    number: "02", 
    title: "Концепция",
    description: "Разрабатываем архитектурную концепцию и 3D модели"
  },
  {
    number: "03",
    title: "Проектирование",
    description: "Создаем рабочую документацию и чертежи"
  },
  {
    number: "04",
    title: "Реализация",
    description: "Сопровождаем строительство и внедрение проекта"
  }
]

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-5 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-hero opacity-5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Наши
            <span className="text-terracotta"> Услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Полный спектр архитектурных и дизайнерских услуг для создания пространств, 
            которые вдохновляют и служат долгие годы
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-card p-8 hover:shadow-elegant transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  service.color === 'terracotta' ? 'bg-gradient-accent' :
                  service.color === 'forest' ? 'bg-gradient-hero' :
                  service.color === 'stone' ? 'bg-stone' :
                  'bg-sand'
                }`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3 group-hover:text-terracotta transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-terracotta flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="group-hover:bg-terracotta group-hover:text-white transition-all duration-300 p-0">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass-card p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Как мы работаем
            </h3>
            <p className="text-muted-foreground text-lg">
              Наш проверенный процесс гарантирует успешную реализацию вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-terracotta to-transparent"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-terracotta transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}