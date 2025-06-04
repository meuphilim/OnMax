
import React from 'react';
import { ArrowRight, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient text-white relative overflow-hidden">
      {/* Background decoration - Enhanced tech elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-light rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-light rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-1/3 w-20 h-20 bg-white/20 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Innovation Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-blue-light mr-2" />
            <span className="text-sm font-medium">Inovação Digital • Bonito - MS</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-8 animate-slide-up text-balance">
            <span className="block mb-2">Transformamos</span>
            <span className="block bg-gradient-to-r from-blue-light via-white to-blue-light bg-clip-text text-transparent animate-pulse">
              Ideias em Código
            </span>
            <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl text-gray-200">
              que Revoluciona
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Na <span className="text-blue-light font-semibold">OnMax</span>, criamos soluções tecnológicas 
            que impulsionam o futuro dos negócios. Do conceito à implementação, 
            entregamos inovação em cada pixel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-5 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-2xl hover:shadow-blue-500/25"
            >
              <Rocket className="w-5 h-5" />
              <span>Iniciar Projeto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={scrollToServices}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-5 px-10 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Explorar Soluções</span>
              <div className="w-2 h-2 bg-blue-light rounded-full group-hover:scale-125 transition-transform"></div>
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-blue-light to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                150+
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Projetos Entregues</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-blue-light to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                7+
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Anos Inovando</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-blue-light to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                99%
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Satisfação</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold font-poppins mb-3 bg-gradient-to-r from-blue-light to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-light to-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
