export const Footer = () => {
  return (
    <footer className="bg-forest text-forest-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">ARIA Architecture</h3>
            <p className="text-forest-foreground/80 leading-relaxed mb-6 max-w-md">
              Creating exceptional spaces that harmonize innovation, sustainability, and human experience. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors duration-300 cursor-pointer">
                <span className="text-sm">I</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors duration-300 cursor-pointer">
                <span className="text-sm">L</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-terracotta transition-colors duration-300 cursor-pointer">
                <span className="text-sm">B</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-forest-foreground/80">
              <li><a href="#" className="hover:text-terracotta transition-colors duration-300">Architectural Design</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors duration-300">Interior Design</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors duration-300">Urban Planning</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors duration-300">Sustainability Consulting</a></li>
              <li><a href="#" className="hover:text-terracotta transition-colors duration-300">Project Management</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-forest-foreground/80">
              <li>Nørrebrogade 45</li>
              <li>2200 Copenhagen, Denmark</li>
              <li><a href="tel:+4533123456" className="hover:text-terracotta transition-colors duration-300">+45 33 12 34 56</a></li>
              <li><a href="mailto:hello@aria-architecture.com" className="hover:text-terracotta transition-colors duration-300">hello@aria-architecture.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-foreground/60 text-sm">
            © 2024 ARIA Architecture Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-forest-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-terracotta transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-terracotta transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-terracotta transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}