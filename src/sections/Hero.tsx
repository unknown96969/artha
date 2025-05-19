import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-primary to-secondary-dark min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-overlay"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Align Your Finances <br />
            <span className="text-accent">Secure Your Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 md:pr-12">
            We provide expert financial guidance to help you achieve your goals. 
            Our personalized approach ensures that your financial strategy aligns 
            with your unique vision for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary flex items-center justify-center gap-2">
              Explore Our Services <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center justify-center">
              Book a Consultation
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</p>
              <p className="text-white">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</p>
              <p className="text-white">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</p>
              <p className="text-white">Client Retention</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">₹100Cr+</p>
              <p className="text-white">Assets Managed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="rounded-full bg-white p-2 inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;