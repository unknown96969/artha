import React from 'react';
import { Users, Award, TrendingUp, Landmark } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center p-8 rounded-lg bg-white shadow-custom hover:shadow-lg transition-shadow">
    <div className="p-3 bg-primary/10 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">{value}</h3>
    <p className="text-gray-600 text-center">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "5,000+",
      label: "Clients Served"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "15+",
      label: "Years of Excellence"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      value: "₹500Cr+",
      label: "Assets Under Management"
    },
    {
      icon: <Landmark className="h-8 w-8 text-primary" />,
      value: "25+",
      label: "Financial Experts"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Over the years, we've helped thousands of clients achieve their financial goals.
            Here's a glimpse of our journey and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;