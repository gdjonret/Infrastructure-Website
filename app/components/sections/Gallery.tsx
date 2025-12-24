'use client';

import { useState } from 'react';
import Image from 'next/image';
import { colors } from '../../styles/utils/colors';
import { typography } from '../../styles/utils/typography';
import { layout } from '../../styles/utils/layoutUtils';

// Make sure these files exist under /public/images/
const galleryImages = [
  { id: 1, src: '/images/Project1.jpg', alt: 'School Construction Project', title: 'Modern School Building', category: 'Schools & Universities' },
  { id: 2, src: '/images/Project2.png', alt: 'Luxury Home Construction', title: 'Contemporary Family Home', category: 'Houses' },
  { id: 3, src: '/images/Project3.png', alt: 'Water Drilling Project', title: 'Deep Water Well Installation', category: 'Water Drilling' },
  { id: 4, src: '/images/Project4.png', alt: 'Gold Mining Project', title: 'Gold Mining Operation', category: 'Mining' },
  { id: 5, src: '/images/Project5.png', alt: 'Health Clinic', title: 'Health Clinic Construction', category: 'Healthcare' },
  { id: 6, src: '/images/Project6.png', alt: 'Water Infrastructure', title: 'Community Water System', category: 'Water Drilling' }
];

const categories = ['All', 'Schools & Universities', 'Houses', 'Water Drilling', 'Mining', 'Healthcare'] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const active = selectedImage != null ? galleryImages.find((g) => g.id === selectedImage) : null;

  return (
    <div className={layout.section.default}>
      <h2 className={`${typography.heading.h2} text-center mb-8`}>Our Projects Gallery</h2>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md transition-all ${
              activeCategory === category
                ? `bg-gradient-to-r ${colors.primary.blue.navy} text-white`
                : `bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:${colors.primary.gold.light} hover:text-slate-800`
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => openModal(image.id)}
          >
            <div className="relative h-64 w-full">
              {/* Real image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority={image.id <= 3}
              />

              {/* Hover overlay — fixed (transparent by default) */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">{image.title}</h3>
              <p className="text-sm text-gray-600">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white bg-slate-700 rounded-full p-2 hover:bg-slate-600 transition-colors z-10"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <div className="relative h-96 w-full mb-4">
                <Image src={active.src} alt={active.alt} fill className="object-cover" sizes="80vw" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{active.title}</h3>
              <p className="text-gray-600 mb-4">{active.category}</p>
              <p className="text-gray-700">
                This is a detailed description of the project. You can add specific information about this construction project here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
