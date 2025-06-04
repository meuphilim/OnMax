
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo e integração de pagamentos.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Aplicativo bancário com biometria e transações em tempo real.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase'],
      category: 'mobile',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Vue.js', 'D3.js', 'Express'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'App de fitness com tracking de exercícios e planos personalizados.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      tags: ['Flutter', 'Firebase'],
      category: 'mobile',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'SaaS Management',
      description: 'Sistema de gestão empresarial com módulos de CRM, vendas e relatórios.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['Next.js', 'PostgreSQL'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'IoT Dashboard',
      description: 'Interface para monitoramento de dispositivos IoT com alertas em tempo real.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tags: ['React', 'Socket.io', 'Arduino'],
      category: 'iot',
      link: '#',
      github: '#'
    },
  ];

  const filters = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'iot', name: 'IoT' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            💼 Nosso Portfólio
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-950 mb-6">
            Projetos que
            <span className="block mt-2 gradient-text">Transformaram Negócios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos 
            clientes a alcançar seus objetivos através da tecnologia.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-white rounded-lg shadow-soft">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.link}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Ver projeto"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href={project.github}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Ver código"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold font-poppins text-gray-950 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interessado em ver mais projetos ou discutir o seu?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="btn-primary"
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
