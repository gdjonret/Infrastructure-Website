import React from 'react';
import { colors } from '../../styles/utils/colors';
import { typography } from '../../styles/utils/typography';
import { layout } from '../../styles/utils/layoutUtils';

export default function WaterDrilling() {
  return (
    <div className={`min-h-screen ${colors.background.light}`}>
      
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colors.primary.blue.navy} text-white ${layout.section.default}`}>
        <div className={`${layout.container.default} text-center`}>
          <h1 className={`${typography.heading.h1} mb-4`}>Water Drilling</h1>
          <p className={typography.heading.subtitle}>Providing Access to Clean Water</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className={`${layout.container.default} ${layout.section.default}`}>
        <div className={`${layout.flex.rowResponsive} items-center gap-12`}>
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/water-drilling.jpg" 
                alt="Professional water drilling operation by Guépard Construction" 
                className="w-full h-96 object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${colors.primary.gold.default} h-2`}></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2">
            <h2 className={`${typography.heading.h2} mb-6 text-slate-800`}>Essential Water Solutions</h2>
            
            <p className={`${typography.body.large} mb-6`}>
              Water is life, and at Guépard Construction, we're committed to providing reliable access to clean, fresh water for communities, businesses, and residential properties. Our professional water drilling services ensure sustainable water solutions that meet your specific needs and local regulations.
            </p>
            
            <p className={`${typography.body.large} mb-6`}>
              With advanced drilling equipment and extensive experience in hydrogeology, we locate and access underground water sources efficiently and safely. Our team handles everything from initial site assessment to well completion, ensuring you have a dependable water supply for years to come.
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className={`${typography.heading.h3} mb-4 text-slate-800`}>Our Water Drilling Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Residential water well drilling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Commercial and industrial water systems</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Community water supply projects</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Water quality testing and treatment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Well maintenance and repair services</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <div className={`h-12 w-1 bg-gradient-to-b ${colors.primary.gold.default} mr-4`}></div>
              <blockquote className={`${typography.special.quote} text-slate-800 text-xl italic`}>
                "Clean water is a fundamental right. We're proud to help communities access this vital resource."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`${colors.background.dark} ${layout.section.default}`}>
        <div className={layout.container.default}>
          <h2 className={`${typography.heading.h2} mb-12 text-center`}>Why Choose Our Water Drilling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Advanced Equipment</h3>
              <p className={typography.text.secondary}>We use state-of-the-art drilling equipment and technology to efficiently locate and access water sources at various depths and geological conditions.</p>
            </div>
            
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Licensed & Certified</h3>
              <p className={typography.text.secondary}>Our team is fully licensed and certified in water well drilling, ensuring all work meets local regulations and environmental standards.</p>
            </div>
            
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Sustainable Solutions</h3>
              <p className={typography.text.secondary}>We focus on environmentally responsible drilling practices that protect groundwater resources while providing reliable water access for future generations.</p>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
}
