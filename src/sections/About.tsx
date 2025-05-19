import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'Personalized financial strategies tailored to your unique goals',
    'Expert advisors with decades of combined experience',
    'Transparent fee structure with no hidden costs',
    'Regular reviews and adjustments to stay on track',
    'Holistic approach addressing all aspects of your financial life',
    'Ongoing education and resources to empower your financial decisions'
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="section-title text-left">About Artha Advisory</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2023, Artha Advisory has been providing expert financial guidance to individuals and businesses across India. Our mission is to help our clients achieve financial freedom through personalized strategies and dedicated support.
            </p>
            <p className="text-gray-600 mb-8">
              What sets us apart is our commitment to understanding your unique financial situation and goals. We don't believe in one-size-fits-all solutions – instead, we create customized plans that align with your values and vision for the future.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary">
              Schedule a Consultation
            </a>
          </div>
          
          <div className="order-1 md:order-2 relative animate-fade-in">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Financial advisors in meeting" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;