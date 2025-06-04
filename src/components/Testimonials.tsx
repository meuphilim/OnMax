
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      position: 'CEO, TechStart',
      company: 'TechStart Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'A TechFlow transformou completamente nossa presença digital. O aplicativo que desenvolveram superou todas as nossas expectativas e resultou em um aumento de 300% em nossas vendas online.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ana Costa',
      position: 'Diretora de TI',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Profissionalismo excepcional e entrega no prazo. A equipe demonstrou profundo conhecimento técnico e conseguiu implementar soluções complexas de forma elegante e eficiente.',
      rating: 5
    },
    {
      id: 3,
      name: 'Roberto Santos',
      position: 'Fundador',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Desde o primeiro contato até a entrega final, a experiência foi impecável. Eles não apenas desenvolveram nosso MVP, mas também nos ajudaram a escalar rapidamente.',
      rating: 5
    },
    {
      id: 4,
      name: 'Marina Oliveira',
      position: 'CMO',
      company: 'Digital Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'A comunicação é excepcional e eles sempre estão disponíveis para suporte. O dashboard que criaram revolucionou como analisamos nossos dados de marketing.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
            💬 Depoimentos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-950 mb-6">
            O que Nossos
            <span className="block mt-2 gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossa parceria.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-soft">
            <div className="flex items-center justify-between mb-8">
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Navigation */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentSlide].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold font-poppins text-gray-950">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentSlide].position}
                </div>
                <div className="text-primary font-medium">
                  {testimonials[currentSlide].company}
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-primary scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold font-poppins text-primary mb-2">98%</div>
            <div className="text-gray-600">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-poppins text-primary mb-2">24h</div>
            <div className="text-gray-600">Tempo de Resposta</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-poppins text-primary mb-2">100%</div>
            <div className="text-gray-600">Projetos no Prazo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
