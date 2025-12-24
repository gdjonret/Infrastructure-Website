import React from 'react';
import { colors } from '../../styles/utils/colors';
import { typography } from '../../styles/utils/typography';
import { layout } from '../../styles/utils/layoutUtils';

export default function SchoolsUniversities() {
  return (
    <div className={`min-h-screen ${colors.background.light}`}>
      
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colors.primary.blue.navy} text-white ${layout.section.default}`}>
        <div className={`${layout.container.default} text-center`}>
          <h1 className={`${typography.heading.h1} mb-4`}>Schools & Universities</h1>
          <p className={typography.heading.subtitle}>Building Educational Excellence</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className={`${layout.container.default} ${layout.section.default}`}>
        <div className={`${layout.flex.rowResponsive} items-center gap-12`}>
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/school-construction.jpg" 
                alt="Modern school building construction project by Guépard Construction" 
                className="w-full h-96 object-cover"
              />
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-r ${colors.primary.gold.default} h-2`}></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2">
            <h2 className={`${typography.heading.h2} mb-6 text-slate-800`}>Creating Inspiring Learning Environments</h2>
            
            <p className={`${typography.body.large} mb-6`}>
              At Guépard Construction, we specialize in building state-of-the-art educational facilities that foster learning, innovation, and growth. From elementary schools to university campuses, we understand that educational buildings are more than just structures—they're the foundation for future generations.
            </p>
            
            <p className={`${typography.body.large} mb-6`}>
              Our expertise in educational construction spans over a decade, during which we've completed numerous projects that combine functionality, safety, and inspiring design. We work closely with educators, administrators, and communities to create spaces that enhance the learning experience.
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className={`${typography.heading.h3} mb-4 text-slate-800`}>Our Educational Construction Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Elementary and middle school construction</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>High school and preparatory facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>University buildings and campus expansion</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Specialized facilities (laboratories, libraries, auditoriums)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={typography.body.default}>Renovation and modernization projects</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <div className={`h-12 w-1 bg-gradient-to-b ${colors.primary.gold.default} mr-4`}></div>
              <blockquote className={`${typography.special.quote} text-slate-800 text-xl italic`}>
                "Every classroom we build is a step toward a brighter future for our communities."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`${colors.background.dark} ${layout.section.default}`}>
        <div className={layout.container.default}>
          <h2 className={`${typography.heading.h2} mb-12 text-center`}>Why Choose Us for Educational Construction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Safety First</h3>
              <p className={typography.text.secondary}>We prioritize student and staff safety with comprehensive security features, fire safety systems, and ADA-compliant designs in every project.</p>
            </div>
            
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Modern Technology</h3>
              <p className={typography.text.secondary}>Our buildings incorporate the latest educational technology infrastructure, smart classrooms, and energy-efficient systems for sustainable learning environments.</p>
            </div>
            
            <div className={`${colors.background.default} p-6 rounded-lg shadow-md`}>
              <div className="bg-blue-200 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={`${typography.heading.h3} mb-2`}>Community Partnership</h3>
              <p className={typography.text.secondary}>We work closely with school boards, educators, and communities to ensure our buildings meet specific educational needs and local requirements.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
