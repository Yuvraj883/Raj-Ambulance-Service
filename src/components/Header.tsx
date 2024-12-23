import React from 'react';
import { Ambulance, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Ambulance className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-800">Raj Ambulance Service</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-red-600">Services</a>
            <a href="#booking" className="text-gray-600 hover:text-red-600">Book Now</a>
            <a href="#contact" className="text-gray-600 hover:text-red-600">Contact</a>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-red-600" />
            <span className="text-lg font-semibold text-red-600">+91 98114 49638</span>
          </div>
        </div>
      </div>
    </header>
  );
}