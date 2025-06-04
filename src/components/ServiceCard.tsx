
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  return (
    <div className="group bg-white rounded-xl p-6 lg:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-gray-950 mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="text-primary font-medium hover:text-primary-600 transition-colors duration-200 group-hover:translate-x-1 transform inline-flex items-center">
          Saiba mais
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
