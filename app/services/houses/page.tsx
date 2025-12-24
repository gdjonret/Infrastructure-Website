import React from 'react';
import { colors } from '../../styles/utils/colors';
import { typography } from '../../styles/utils/typography';
import { layout } from '../../styles/utils/layoutUtils';

export default function Houses() {
  return (
    <div className={`min-h-screen ${colors.background.light}`}>
      
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colors.primary.blue.navy} text-white ${layout.section.default}`}>
        <div className={`${layout.container.default} text-center`}>
          <h1 className={`${typography.heading.h1} mb-4`}>Houses</h1>
          <p className={typography.heading.subtitle}>Building Dream Homes</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className={`${layout.container.default} ${layout.section.default}`}>
        <div className={`${layout.flex.rowResponsive} items-center gap-12`}>
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/house-construction.jpg" 
                alt="Beautiful residential home construction project by Guépard Construction" 
                className="w-full h-96 object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${colors.primary.gold.default} h-2`}></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2">
            <h2 className={`${typography.heading.h2} mb-6 text-slate-800`}>Crafting Your Perfect Home</h2>
            
            <p className={`${typography.body.large} mb-6`}>
              At Guépard Construction, we believe that your home is more than just a building—it's where life happens, memories are made, and dreams come true. From luxury estates to cozy family homes, we bring your vision to life with exceptional craftsmanship and attention to detail.
            </p>
            
            <p className={`${typography.body.large} mb-6`}>
              Our residential construction expertise spans custom homes, renovations, and additions. We work closely with homeowners, architects, and designers to create living spaces that perfectly match your lifestyle, preferences, and budget while maintaining the highest standards of quality and safety.
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className={`${typography.heading.h3} mb-4 text-slate-800`}>Our Residential Construction Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Custom home design and construction</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Home renovations and remodeling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Home additions and extensions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Kitchen and bathroom remodeling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Energy-efficient and sustainable building</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <div className={`h-12 w-1 bg-gradient-to-b ${colors.primary.gold.default} mr-4`}></div>
              <blockquote className={`${typography.special.quote} text-slate-800 text-xl italic`}>
                "We don't just build houses; we create homes where families thrive and memories are made."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`${colors.background.dark} ${layout.section.default}`}>
        <div className={layout.container.default}>
          <h2 className={`${typography.heading.h2} mb-12 text-center`}>Why Choose Us for Your Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Personalized Design</h3>
              <p className={typography.text.secondary}>Every home is unique. We work with you to create a design that reflects your personal style, needs, and vision for your dream home.</p>
            </div>
            
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Quality Materials</h3>
              <p className={typography.text.secondary}>We use only the finest materials and work with trusted suppliers to ensure your home is built to last for generations.</p>
            </div>
            
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Transparent Pricing</h3>
              <p className={typography.text.secondary}>No hidden costs or surprises. We provide detailed estimates and keep you informed throughout the entire construction process.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
    </div>
  );
}
