import React, { useState, useEffect } from 'react';
import { Clock, Shield, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import SEOImage from './SEOImage';
import Amb1 from '../Images/Amb1.jpeg';
// import Amb2 from '../Images/Amb2.jpeg';
import Amb3 from '../Images/Amb3.jpeg';
import Amb4 from '../Images/Amb4.jpeg';


const images = [
  {
    url: Amb1,
    title: "Emergency Response",
    subtitle: "24/7 Emergency Medical Services",
    alt: "Emergency ambulance service in India providing rapid medical response"
  },
  {
    url: Amb4,
    title: "Advanced Life Support",
    subtitle: "State-of-the-art Medical Equipment",
    alt: "Advanced life support ambulance equipped with modern medical equipment"
  },
  {
    url: Amb3,
    title: "Professional Care",
    subtitle: "Certified Medical Professionals",
    alt: "Professional medical team providing emergency healthcare services"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section aria-label="Hero Section" className="relative bg-red-600 text-white">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-50' : 'opacity-0'
            }`}
          >
            <SEOImage
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition z-10"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition z-10"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            {images[currentSlide].title}
          </h1>
          <p className="text-xl mb-8">
            Professional emergency medical care across major Indian cities. Our team of certified paramedics ensures rapid response times and quality healthcare.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="tel:102"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Emergency: 102
            </a>
            <a
              href="#booking"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-white/10 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8" />
              <div>
                <h3 className="font-semibold">24/7 Service</h3>
                <p>Available across major cities</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8" />
              <div>
                <h3 className="font-semibold">Government Certified</h3>
                <p>Licensed medical professionals</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8" />
              <div>
                <h3 className="font-semibold">Advanced Care</h3>
                <p>Modern medical equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
