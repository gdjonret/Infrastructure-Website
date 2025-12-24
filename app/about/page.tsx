import React from 'react';
import { colors } from '../styles/utils/colors';
import { typography } from '../styles/utils/typography';
import { layout } from '../styles/utils/layoutUtils';

export default function About() {
  return (
    <div className={`min-h-screen ${colors.background.light}`}>
      
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colors.primary.blue.navy} text-white ${layout.section.default}`}>
        <div className={`${layout.container.default} text-center`}>
          <h1 className={`${typography.heading.h1} mb-4`}>About Us</h1>
          <p className={typography.heading.subtitle}>Our Story and Mission</p>
        </div>
      </div>
      
      {/* Founder Section */}
      <div className={`${layout.container.default} ${layout.section.default}`}>
        <div className={`${layout.flex.rowResponsive} items-center gap-12`}>
          {/* Founder Image */}
          <div className="md:w-1/3 mt-18">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src="/images/Owner.jpg" 
                  alt="Jean-Pierre Guépard, Founder & CEO" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${colors.primary.gold.default} h-1`}></div>
            </div>
            <h3 className={`${typography.heading.h3} mt-4 text-center`}>Jean-Pierre Guépard</h3>
            <p className={`${typography.text.secondary} text-center`}>Founder & CEO</p>
          </div>
          
          {/* Founder Story */}
          <div className="md:w-2/3">
            <h2 className={`${typography.heading.h2} mb-6 text-blue-900`}>Our Foundation</h2>
            <p className={`${typography.body.large} mb-4`}>
              Founded in 2011 by Jean-Pierre Guépard, Guépard Construction began with a simple vision: to build structures that stand the test of time while prioritizing quality, innovation, and client satisfaction.
            </p>
            <p className={`${typography.body.large} mb-4`}>
              With over 25 years of experience in the construction industry, Jean-Pierre recognized the need for a construction company that could deliver exceptional results while maintaining the highest standards of integrity and craftsmanship.
            </p>
            <p className={`${typography.body.large} mb-4`}>
              "I believe that every project, regardless of size, deserves the same level of dedication and excellence," says Jean-Pierre. "Our team approaches each construction challenge with creativity, precision, and a commitment to exceeding expectations."
            </p>
            <p className={`${typography.body.large} mb-8`}>
              Today, Guépard Construction has grown into a respected leader in educational, residential, and infrastructure projects across the region, with a portfolio that showcases our versatility and expertise.
            </p>
            <div className="flex items-center">
              <div className={`h-12 w-1 bg-gradient-to-b ${colors.primary.gold.default} mr-4`}></div>
              <blockquote className={`${typography.special.quote} text-blue-900 text-xl`}>
                "We don't just build structures; we build futures, communities, and lasting relationships with our clients."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
