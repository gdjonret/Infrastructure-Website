'use client';

import { useState } from 'react';
import Gallery from './components/sections/Gallery';
import ContactForm from './components/sections/ContactForm';
import { colors } from './styles/utils/colors';
import { typography } from './styles/utils/typography';
import { layout } from './styles/utils/layoutUtils';

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <div className={`min-h-screen ${colors.background.light}`}>
      
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colors.primary.blue.navy} text-white py-20`}>
        <div className={layout.container.default}>
          <h1 className={`${typography.heading.h1} mb-4`}>Guépard Construction</h1>
          <p className={`${typography.heading.subtitle} mb-8`}>Building Excellence Since 2011</p>
          <p className={`${typography.body.large} mb-8 max-w-2xl`}>We specialize in constructing schools, universities, houses, and water drilling projects with unmatched quality and precision.</p>
          <button 
            onClick={() => setIsContactFormOpen(true)}
            className={`bg-gradient-to-r ${colors.primary.gold.default} text-blue-900 hover:${colors.primary.gold.light} font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-md`}
          >
            Get a Free Quote
          </button>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className={layout.container.default + ' ' + layout.section.default}>
        <h2 className={`${typography.heading.h2} mb-12 text-center`}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`${colors.background.default} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
            <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className={`${typography.heading.h3} mb-2`}>Schools & Universities</h3>
            <p className={typography.text.secondary}>We build educational facilities that foster learning and innovation, from primary schools to university campuses.</p>
          </div>
          
          <div className={`${colors.background.default} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
            <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className={`${typography.heading.h3} mb-2`}>Houses</h3>
            <p className={typography.text.secondary}>From luxury homes to affordable housing, we create living spaces that combine comfort, style, and functionality.</p>
          </div>
          
          <div className={`${colors.background.default} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
            <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className={`${typography.heading.h3} mb-2`}>Water Drilling</h3>
            <p className={typography.text.secondary}>We provide comprehensive water drilling services, ensuring access to clean water for communities and businesses.</p>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className={`${colors.background.light} ${layout.section.compact}`}>
        <div className={layout.container.default}>
          <Gallery />
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
}
