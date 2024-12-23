import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { localBusinessSchema, emergencyServiceSchema } from './components/SEO/schemas';

function App() {
  const phoneNumber = "+919811449638";
  const title = "Raj Ambulance Service - 24/7 Emergency Ambulance Services";
  const description = "Professional 24/7 emergency medical services across major Indian cities. Advanced life support, critical care, and rapid response ambulance services.";
  const image = "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="ambulance service, emergency medical services, medical transport, India ambulance, critical care, advanced life support" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(emergencyServiceSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Booking />
          <Contact />
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Raj Ambulance Service. All rights reserved.</p>
          </div>
        </footer>
        <WhatsAppButton phoneNumber={phoneNumber} />
      </div>
    </>
  );
}
export default App;