import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const phoneNumber = "+919811449638";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For emergencies, please call us immediately. We're available 24/7 to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-8">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600">Near Dabri Metro Station, Gate Number 3,<br />West Delhi, Delhi 110045</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                <p className="text-gray-600"><a href="tel:+919811449638" className="text-lg font-semibold text-red-600">
  +91 98114 49638
</a>
</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">rajambulanceservice9811@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MessageCircle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
