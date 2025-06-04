
import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Docker', logo: '🐳' },
    { name: 'MongoDB', logo: '🍃' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-950 mb-4">
            Tecnologias que Dominamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilizamos as mais modernas tecnologias do mercado para garantir 
            soluções robustas, escaláveis e de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {tech.logo}
              </div>
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
