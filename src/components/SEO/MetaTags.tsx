import React from 'react';
import amb1 from '../../Images/Amb1.jpeg'

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function MetaTags({
  title = "Raj Ambulance Service - 24/7 Emergency Ambulance Services",
  description = "Professional 24/7 emergency medical services across major Indian cities. Advanced life support, critical care, and rapid response ambulance services.",
  image = amb1
}: MetaTagsProps) {
  return (
    <>
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
    </>
  );
}
