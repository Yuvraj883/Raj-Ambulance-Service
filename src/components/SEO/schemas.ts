export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Raj Ambulance Service",
  "url": "https://rajambulanceservice.com",
  "telephone": "+919811449638",
  "email": "rajambulanceservice9811@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Healthcare Complex",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  }
};

export const emergencyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "name": "Raj Ambulance Service",
  "description": "24/7 emergency medical services across major Indian cities",
  "telephone": "+919811449638",
  "email": "rajambulanceservice9811@gmail.com",
  "areaServed": "India",
  "availabilityStarts": "00:00",
  "availabilityEnds": "23:59",
  "serviceType": ["Emergency Medical Transport", "Critical Care", "Advanced Life Support"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Healthcare Complex",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  }
};