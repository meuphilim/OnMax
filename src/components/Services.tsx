
import React from 'react';
import { Globe, Smartphone, Server, Palette } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando as mais recentes tecnologias como React, Next.js e TypeScript.',
      icon: Globe,
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'E-commerce e portais',
        'Sistemas de gestão'
      ]
    },
    {
      title: 'Desenvolvimento Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com performance excepcional e experiência de usuário superior.',
      icon: Smartphone,
      features: [
        'Apps nativos iOS/Android',
        'React Native',
        'Flutter',
        'Publicação nas stores'
      ]
    },
    {
      title: 'Backend & DevOps',
      description: 'Infraestrutura robusta e escalável com APIs RESTful, bancos de dados otimizados e deployment automatizado.',
      icon: Server,
      features: [
        'APIs RESTful e GraphQL',
        'Microserviços',
        'Cloud Computing (AWS, Azure)',
        'CI/CD e Docker'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'Design centrado no usuário com interfaces intuitivas que proporcionam experiências digitais memoráveis.',
      icon: Palette,
      features: [
        'Design System',
        'Prototipagem',
        'Testes de usabilidade',
        'Design responsivo'
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            🎯 Nossos Serviços
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-950 mb-6">
            Soluções Completas em
            <span className="block mt-2 gradient-text">Desenvolvimento de Software</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para transformar suas ideias 
            em soluções digitais de alto impacto e performance excepcional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-950 mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Uma metodologia comprovada que garante a entrega de projetos no prazo e com qualidade excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Descoberta', desc: 'Entendemos suas necessidades e objetivos' },
              { step: '02', title: 'Planejamento', desc: 'Criamos a estratégia e arquitetura ideal' },
              { step: '03', title: 'Desenvolvimento', desc: 'Codificamos com as melhores práticas' },
              { step: '04', title: 'Entrega', desc: 'Deploy e suporte contínuo' }
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold font-poppins mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold font-poppins text-gray-950 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
