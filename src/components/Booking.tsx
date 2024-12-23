import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    pickup: '',
    destination: '',
    type: 'basic'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', formData);
    alert('Booking request received. We will contact you shortly to confirm.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book an Ambulance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For non-emergency medical transport, schedule our services in advance. For emergencies, please call 102 immediately.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="name">
                  <User className="inline-block w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="phone">
                  <Phone className="inline-block w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="date">
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="time">
                  <Clock className="inline-block w-4 h-4 mr-2" />
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="pickup">
                  <MapPin className="inline-block w-4 h-4 mr-2" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.pickup}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="destination">
                  <MapPin className="inline-block w-4 h-4 mr-2" />
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-gray-700 font-medium" htmlFor="type">
                  Ambulance Type
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="basic">Basic Life Support</option>
                  <option value="advanced">Advanced Life Support</option>
                  <option value="patient">Patient Transport</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Book Ambulance
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600 text-center">
              For emergencies, please call 102 immediately. This booking service is for non-emergency transport only.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}