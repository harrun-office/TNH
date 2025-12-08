import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  // Sample gallery images - replace with actual images
  const galleryImages = [
    { src: '/images/building-chennai-1.jpg', alt: 'Chennai Building' },
    { src: '/images/building-mumbai-1.jpg', alt: 'Mumbai Building' },
    { src: '/images/panel-member-1.jpg', alt: 'Panel Member' },
    // Add more images as needed
  ];

  return (
    <div className="page-gallery">
      <section className="section">
        <div className="container">
          <SectionTitle 
            title="Our Facilities"
            subtitle="View our accommodations and amenities"
          />
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
