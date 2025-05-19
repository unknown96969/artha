import React from 'react';
import { LineChart, BarChart3, FileText, DollarSign, PiggyBank, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, isHighlighted = false }) => {
  return (
    <div 
      className={`rounded-lg p-6 h-full transition-all duration-300 group hover:translate-y-[-5px] ${
        isHighlighted 
          ? 'bg-primary text-white shadow-lg' 
          : 'bg-white text-gray-800 shadow-custom hover:shadow-lg'
      }`}
    >
      <div className={`p-3 rounded-full inline-block mb-4 ${
        isHighlighted ? 'bg-white text-primary' : 'bg-primary-light/10 text-primary'
      }`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-3 ${isHighlighted ? 'text-white' : 'text-primary'}`}>
        {title}
      </h3>
      <p className={isHighlighted ? 'text-gray-100' : 'text-gray-600'}>
        {description}
      </p>
      <a 
        href="#contact" 
        className={`mt-4 inline-block font-medium ${
          isHighlighted 
            ? 'text-accent hover:text-accent-light' 
            : 'text-primary hover:text-primary-light'
        }`}
      >
        Learn more →
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      id: 'financial-planning',
      icon: <LineChart size={24} />,
      title: 'Financial Planning',
      description: 'Comprehensive financial plans tailored to your unique situation and goals, providing a roadmap to achieve financial security.',
      highlighted: true
    },
    {
      id: 'investment-advisory',
      icon: <BarChart3 size={24} />,
      title: 'Insurance',
      description: 'Expert guidance on investment strategies to help you build and maintain a diversified portfolio aligned with your risk tolerance.',
    },
    {
      id: 'tax-consultation',
      icon: <FileText size={24} />,
      title: 'Tax Consultation',
      description: 'Strategic tax planning and optimization to minimize liabilities while ensuring compliance with all regulatory requirements.',
    },
    {
      id: 'wealth-management',
      icon: <DollarSign size={24} />,
      title: 'Wealth Management',
      description: 'Holistic approach to managing your assets, liabilities, and cash flow to protect and grow your wealth over generations.',
    },
    {
      id: 'retirement-planning',
      icon: <PiggyBank size={24} />,
      title: 'Mutual Funds',
      description: 'Securing your future with customized retirement strategies designed to provide financial independence and peace of mind.',
    },
    {
      id: 'business-consulting',
      icon: <Briefcase size={24} />,
      title: 'Stock Market',
      description: 'Professional guidance for business owners on financial strategies, succession planning, and maximizing business value.',
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive suite of financial services designed to help 
            you achieve your goals and secure your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHighlighted={service.highlighted}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;