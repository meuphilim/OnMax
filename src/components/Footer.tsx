
import React from 'react';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  const services = [
    'Desenvolvimento Web',
    'Aplicações Mobile',
    'Backend & APIs',
    'UI/UX Design',
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-light rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold font-poppins">TechFlow</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Transformamos ideias em soluções digitais inovadoras. 
                Especialistas em desenvolvimento de software de alta qualidade.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contato@techflow.dev</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(11) 3000-0000</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-6">Links Rápidos</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-6">Serviços</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold font-poppins mb-6">Conecte-se</h3>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-400 mb-4">
                  Receba dicas e novidades sobre tecnologia
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                  />
                  <button className="px-4 py-2 bg-primary hover:bg-primary-600 rounded-r-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 mb-4">Siga-nos nas redes sociais</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TechFlow Solutions. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button className="hover:text-white transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
