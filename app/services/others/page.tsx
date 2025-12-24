'use client';

import React from 'react';
import { colors } from '../../styles/utils/colors';
import { typography } from '../../styles/utils/typography';
import { layout } from '../../styles/utils/layoutUtils';

export default function OthersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${colors.primary.blue.navy} text-white ${layout.section.default}`}>
        <div className={layout.container.default}>
          <div className="text-center">
            <h1 className={`${typography.heading.h1} mb-6`}>
              Specialized Construction Services
            </h1>
            <p className={`${typography.heading.subtitle} mb-8 max-w-3xl mx-auto`}>
              Beyond traditional construction, we excel in specialized projects including gold mining operations, 
              industrial facilities, and custom infrastructure. We find you wherever you want your projects built.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${colors.background.light} ${layout.section.default}`}>
        <div className={layout.container.default}>
          
          {/* Industrial & Commercial Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`${typography.heading.h2} mb-6`}>
                  Industrial & Commercial Projects
                </h2>
                <p className={`${typography.body.large} mb-6`}>
                  From manufacturing facilities to commercial complexes, we handle diverse industrial 
                  construction projects with precision and expertise. Our team adapts to unique 
                  requirements and challenging environments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Manufacturing and processing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Warehouses and storage complexes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Agricultural processing centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Custom industrial infrastructure</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-700">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-lg font-semibold">Industrial Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Mining Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-96 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-amber-700">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                    <p className="text-lg font-semibold">Gold Mining Excellence</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className={`${typography.heading.h2} mb-6 text-amber-600`}>
                  Gold Mining Operations
                </h2>
                <p className={`${typography.body.large} mb-6`}>
                  Our expertise extends to complex gold mining projects, from exploration site preparation 
                  to full-scale mining facility construction. We understand the unique challenges of mining 
                  operations and deliver solutions that maximize efficiency and safety.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span>Mining site preparation and access roads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span>Processing plant construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span>Equipment foundations and support structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">✓</span>
                    <span>Environmental compliance infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location Services Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className={`${typography.heading.h2} mb-6`}>
                We Come to You
              </h2>
              <p className={`${typography.heading.subtitle} max-w-4xl mx-auto`}>
                No matter where your project is located, we have the capability and experience to 
                deliver exceptional results. From remote mining sites to urban developments, 
                we find you wherever you want your projects built.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Remote Locations</h3>
                <p className="text-gray-600">
                  Specialized in accessing and building in challenging, remote locations with 
                  full logistical support.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Urban Development</h3>
                <p className="text-gray-600">
                  Expert navigation of city regulations and complex urban construction 
                  environments.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">International Projects</h3>
                <p className="text-gray-600">
                  Cross-border expertise with understanding of international standards 
                  and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h2 className={`${typography.heading.h2} text-center mb-12`}>
              Additional Specialized Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-3 text-slate-700">Healthcare Facilities</h4>
                <p className="text-gray-600 text-sm">
                  Clinics, hospitals, and medical centers built to strict health standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-3 text-slate-700">Agricultural Infrastructure</h4>
                <p className="text-gray-600 text-sm">
                  Farm buildings, processing facilities, and agricultural support structures.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-3 text-slate-700">Energy Projects</h4>
                <p className="text-gray-600 text-sm">
                  Power generation facilities, substations, and renewable energy infrastructure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-3 text-slate-700">Custom Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Unique projects tailored to specific client needs and requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 text-white p-12 rounded-lg">
            <h2 className={`${typography.heading.h2} mb-6`}>
              Ready to Discuss Your Specialized Project?
            </h2>
            <p className={`${typography.body.large} mb-8 max-w-2xl mx-auto`}>
              Whether it's gold mining, industrial construction, or any other specialized project, 
              we have the expertise and flexibility to deliver exceptional results anywhere you need us.
            </p>
            <button className={`bg-gradient-to-r ${colors.primary.gold.default} text-slate-900 hover:from-amber-400 hover:to-yellow-400 font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg shadow-md`}>
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
