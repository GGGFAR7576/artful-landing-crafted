import { Button } from "@/components/ui/enhanced-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Электронная почта",
    details: "hello@aria-architecture.com",
    subtitle: "Ответим в течение 24 часов"
  },
  {
    icon: Phone,
    title: "Телефон",
    details: "+45 33 12 34 56",
    subtitle: "Пн-Пт 9:00-18:00 CET"
  },
  {
    icon: MapPin,
    title: "Студия",
    details: "Nørrebrogade 45, Копенгаген",
    subtitle: "Посещение по записи"
  },
  {
    icon: Clock,
    title: "Консультация",
    details: "Бесплатная 30-мин сессия",
    subtitle: "Обсудите проект с нами"
  }
]

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-accent opacity-5 rounded-full -translate-y-40 -translate-x-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-hero opacity-5 rounded-full translate-y-48 translate-x-48 blur-3xl"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-terracotta/10 border border-terracotta/20 rounded-full px-6 py-2 mb-6 text-terracotta font-medium">
            Связаться с нами
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Создадим что-то
            <span className="text-terracotta block">невероятное вместе</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы воплотить ваше видение в реальность? Свяжитесь с нашей командой и давайте обсудим ваш следующий архитектурный проект.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
              Расскажите о вашем проекте
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Имя
                  </label>
                  <Input 
                    placeholder="Иван" 
                    className="bg-background/50 border-border/50 focus:border-terracotta h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Фамилия
                  </label>
                  <Input 
                    placeholder="Петров" 
                    className="bg-background/50 border-border/50 focus:border-terracotta h-12"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Электронная почта
                </label>
                <Input 
                  type="email" 
                  placeholder="ivan@example.com" 
                  className="bg-background/50 border-border/50 focus:border-terracotta h-12"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Тип проекта
                </label>
                <select className="w-full h-12 px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20 text-foreground">
                  <option>Жилая архитектура</option>
                  <option>Коммерческая архитектура</option>
                  <option>Реновация</option>
                  <option>Консультация</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Описание проекта
                </label>
                <Textarea 
                  placeholder="Расскажите о вашем видении, требованиях и любых конкретных деталях..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-terracotta resize-none"
                />
              </div>
              
              <Button variant="terracotta" size="lg" className="w-full button-hover h-12 text-lg">
                Отправить сообщение
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
            <div className="glass-card p-8 text-center rounded-2xl">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Следите за нашими работами
              </h4>
              <p className="text-muted-foreground mb-6">
                Будьте в курсе наших последних проектов и архитектурных инсайтов.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="sm" className="hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-300">Instagram</Button>
                <Button variant="outline" size="sm" className="hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-300">LinkedIn</Button>
                <Button variant="outline" size="sm" className="hover:bg-terracotta hover:text-white hover:border-terracotta transition-all duration-300">Behance</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}