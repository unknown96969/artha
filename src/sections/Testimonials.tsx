import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, position, company, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-custom p-8 h-full flex flex-col">
      <div className="flex mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic mb-8 flex-grow">{content}</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Artha Advisory transformed our approach to retirement planning. Their team provided clear guidance that helped us establish a solid foundation for our future. We now feel confident about our financial trajectory.",
      name: "Anil Kapoor",
      position: "Business Owner",
      company: "Kapoor Enterprises",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "I was overwhelmed by investment options until I started working with Artha Advisory. Their advisors simplified complex concepts and created a strategy aligned with my risk tolerance and goals.",
      name: "Meera Desai",
      position: "Senior Engineer",
      company: "Tech Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "The tax planning services from Artha Advisory saved our family significant money while ensuring we remained compliant. Their proactive approach and attention to detail sets them apart from other financial advisors.",
      name: "Rohit Sharma",
      position: "Doctor",
      company: "City Hospital",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      content: "Working with Artha Advisory has given me peace of mind about my financial future. Their team is responsive, knowledgeable, and genuinely cares about helping clients achieve their goals.",
      name: "Sunita Patel",
      position: "Marketing Director",
      company: "Creative Media",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "As a small business owner, I needed specialized financial guidance. Artha Advisory delivered with tailored strategies for both my business and personal finances, creating a comprehensive approach.",
      name: "Vijay Malhotra",
      position: "CEO",
      company: "Innovate Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      content: "Artha Advisory helped me navigate a complex inheritance situation with professionalism and clarity. Their expertise made a stressful financial situation manageable and optimized for long-term growth.",
      name: "Leela Krishnan",
      position: "Professor",
      company: "National University",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex * testimonialsPerPage, 
    (activeIndex * testimonialsPerPage) + testimonialsPerPage
  );

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear what our clients have to say about their experience working with 
            FinAlign and how we've helped them achieve their financial goals.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;