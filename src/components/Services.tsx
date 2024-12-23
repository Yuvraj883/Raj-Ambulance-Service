import React from 'react';
import { Truck, Stethoscope, Users, HeartPulse } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-red-600" />,
      title: "Emergency Transport",
      description: "Swift ambulance service across major Indian cities"
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-red-600" />,
      title: "Critical Care",
      description: "Advanced life support with modern medical equipment"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-red-600" />,
      title: "Medical Assessment",
      description: "Expert medical evaluation by certified professionals"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Event Coverage",
      description: "Medical standby for events and religious gatherings"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive emergency medical services across India with state-of-the-art equipment and highly trained professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}