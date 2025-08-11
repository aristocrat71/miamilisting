'use client';

import React, { useEffect, useState } from 'react';
import listingsData from '../data/listings.json';
import { MdLocationOn, MdPhone } from "react-icons/md";
import { useTranslation } from '../contexts/TranslationContext';

const FilterPanel: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredListings, setFilteredListings] = useState(listingsData);
  const { translateText } = useTranslation();
  const [translatedContent, setTranslatedContent] = useState<Record<string, string>>({});

  const [zipCode, setZipCode] = useState('');
  const [district, setDistrict] = useState('all');
  const [projectType, setProjectType] = useState('all');
  const [housingType, setHousingType] = useState('all');

  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 12;

  useEffect(() => {
    const initMaterialize = async () => {
      if (typeof window !== 'undefined') {
        const M = await import('materialize-css');
        M.AutoInit();
      }
    };
    initMaterialize();
  }, []);

  // Translate content when component mounts
  useEffect(() => {
    const translateContent = async () => {
      const textsToTranslate = [
        'Zipcode', 'District', 'Type of Project', 'Housing Type', 'Reset', 'Search by Filter',
        'Showing', 'of', 'listings', 'Enter Zipcode Number', 'Select District', 'Select Option',
        'All', 'Family', 'Elderly', 'Foster Care Facility', 'Homeless', 'Special Needs',
        'Public', 'Private', 'No. of Units', 'Type of Project:', 'Housing Type:'
      ];

      const translations: Record<string, string> = {};
      for (const text of textsToTranslate) {
        translations[text] = await translateText(text);
      }
      setTranslatedContent(translations);
    };

    translateContent();
  }, [translateText]);

  const handleFilter = () => {
    const filtered = listingsData.filter((item) => {
      const matchZip = zipCode ? item.zipcode.toString() === zipCode : true;
      const matchDistrict = district && district !== 'all' ? item.district.toString() === district : true;
      const matchProject = projectType && projectType !== 'all' ? item.projectType.toLowerCase() === projectType.toLowerCase() : true;
      const matchHousing = housingType && housingType !== 'all' ? item.housingType.toLowerCase() === housingType.toLowerCase() : true;
      return matchZip && matchDistrict && matchProject && matchHousing;
    });

    setFilteredListings(filtered);
    setCurrentPage(1); // Reset to first page on filter
  };

  const resetFilters = () => {
    setZipCode('');
    setDistrict('all');
    setProjectType('all');
    setHousingType('all');
    setFilteredListings(listingsData);
    setCurrentPage(1);

    // Visually reset Materialize select dropdowns
    setTimeout(() => {
      const M = require('materialize-css');
      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    }, 0);
  };

  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);
  const currentListings = filteredListings.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );

  return (
    <div style={{ fontFamily: `'Segoe UI', 'SegoeUI', sans-serif`, color: 'black' }}>

      {/* Filter Panel */}
      <div style={{ backgroundImage: `url('/skyline.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px 0' }}>
        <div className="z-depth-1" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '30px 24px', margin: '0 auto', maxWidth: '800px' }}>

          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '8px', marginBottom: '0' }}>
            {/* Zip Code */}
            <div className="input-field" style={{ flex: '0 0 18%' }}>
              <input
                type="text"
                style={{ color: 'black' }}
                value={zipCode}
                onChange={(e) => {
                  if (e.target.value === '' || /^\d+$/.test(e.target.value)) {
                    setZipCode(e.target.value);
                  }
                }}
                placeholder={translatedContent['Enter Zipcode'] || 'Enter Zipcode'}
              />
              <label className="active" style={{ color: 'black' }}>
                {translatedContent['Zipcode'] || 'Zipcode'}
              </label>
            </div>

            {/* District */}
            <div className="input-field" style={{ flex: '0 0 18%' }}>
              <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                <option value="">{translatedContent['Select District'] || 'Select District'}</option>
                <option value="all">{translatedContent['All'] || 'All'}</option>
                {[...new Set(listingsData.map((l) => l.district.toString()))]
                  .filter(dist => dist !== "all" && dist !== "")
                  .sort((a, b) => parseInt(a) - parseInt(b))
                  .map((dist) => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
              </select>
              <label style={{ color: 'black' }}>
                {translatedContent['District'] || 'District'}
              </label>
            </div>

            {/* Type of Project */}
            <div className="input-field" style={{ flex: '0 0 18%' }}>
              <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                <option value="">{translatedContent['Select Option'] || 'Select Option'}</option>
                <option value="all">{translatedContent['All'] || 'All'}</option>
                {[...new Set(listingsData.map((l) => l.projectType))]
                  .sort((a, b) => a.localeCompare(b))
                  .map((type) => (
                    <option key={type} value={type}>
                      {translatedContent[type] || type}
                    </option>
                  ))}
              </select>
              <label style={{ color: 'black' }}>
                {translatedContent['Type of Project'] || 'Type of Project'}
              </label>
            </div>

            {/* Housing Type */}
            <div className="input-field" style={{ flex: '0 0 18%' }}>
              <select value={housingType} onChange={(e) => setHousingType(e.target.value)} style={{ color: 'black' }}>
                <option value="">{translatedContent['Select Option'] || 'Select Option'}</option>
                <option value="all">{translatedContent['All'] || 'All'}</option>
                <option value="Public">{translatedContent['Public'] || 'Public'}</option>
                <option value="Private">{translatedContent['Private'] || 'Private'}</option>
              </select>
              <label style={{ color: 'black' }}>
                {translatedContent['Housing Type'] || 'Housing Type'}
              </label>
            </div>

            {/* Reset Button */}
            <div className="input-field" style={{ flex: '0 0 11%' }}>
              <button className="btn-flat grey lighten-2 black-text" onClick={resetFilters} style={{ width: '100%', marginTop: '10px', padding: '0 4px' }}>
                {translatedContent['Reset'] || 'Reset'}
              </button>
            </div>

            {/* Search Button */}
            <div className="input-field" style={{ flex: '0 0 11%' }}>
              <button className="btn" onClick={handleFilter} style={{ width: '100%', backgroundColor: '#28649b', color: '#fff', marginTop: '10px', padding: '0 4px', whiteSpace: 'nowrap' }}>
                {translatedContent['Search'] || 'Search'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Count and View Toggle */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '30px auto 4px',
          padding: '0 1px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        {/* Listings Count - Left aligned */}
        <div style={{
          fontSize: '14px',
          color: '#666',
          fontWeight: 400
        }}>
          {translatedContent['Showing'] || 'Showing'} {((currentPage - 1) * listingsPerPage) + 1}-{Math.min(currentPage * listingsPerPage, filteredListings.length)} {translatedContent['of'] || 'of'} {filteredListings.length} {translatedContent['listings'] || 'listings'}
        </div>

        {/* View Toggle Buttons - Right aligned */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <button
            className="btn-flat"
            onClick={() => {
              setViewMode('grid');
              setCurrentPage(1);
            }}
            style={{
              padding: '6px',
              border: viewMode === 'grid' ? '2px solid #28649b' : '2px solid transparent',
              borderRadius: '4px',
              backgroundColor: viewMode === 'grid' ? '#e3f2fd' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px'
            }}
          >
            <img src="/grid-new.png" alt="Grid View" style={{ width: 30, height: 30, opacity: viewMode === 'grid' ? 0.8 : 1 }} />
          </button>
          <button
            className="btn-flat"
            onClick={() => {
              setViewMode('list');
              setCurrentPage(1);
            }}
            style={{
              padding: '6px',
              border: viewMode === 'list' ? '2px solid #28649b' : '2px solid transparent',
              borderRadius: '4px',
              backgroundColor: viewMode === 'list' ? '#e3f2fd' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px'
            }}
          >
            <img src="/table.png" alt="Table View" style={{ width: 30, height: 30, opacity: viewMode === 'list' ? 0.8 : 1 }} />
          </button>
        </div>
      </div>

      {/* Listings */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 4px',
          display: 'grid',
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr',
          gap: '2px',
        }}
      >
        {currentListings.map((listing) => (
          <div key={listing.id} className="card z-depth-1" style={{ display: viewMode === 'list' ? 'flex' : 'block', height: viewMode === 'list' ? '108px' : 'auto' }}>
            {viewMode === 'list' ? (
              <>
              <div style={{ flex: '0 0 200px' }}>
                <img
                  src={listing.image}
                  alt={listing.project}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            
              <div
                style={{
                  flex: 1,
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start', // 🔹 Aligns top with image
                  color: 'black'
                }}
              >
                {/* Left Section */}
                <div style={{ flex: '1 1 33%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>
                    {listing.project}
                  </h6>
            
                  {/* Address Row */}
                  <p style={{ display: 'flex', alignItems: 'center', margin: 0, marginBottom: '4px' }}>
                    <a
                      href={`https://www.google.com/maps?q=${encodeURIComponent(listing.address + ', ' + listing.zipcode)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', marginRight: '6px' }}
                    >
                      <span
                        className="circle-icon"
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                      >
                        <svg
                          role="presentation"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          style={{ width: '14px', height: '14px' }}
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 
                            0 192 0 85.961 85.961 0 192 0s192 
                            85.961 192 192c0 77.413-26.97 99.031-172.268 
                            309.67-9.535 13.774-29.93 13.773-39.464 
                            0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80
                            -80 35.817-80 80 35.817 80 80 80z"
                          />
                        </svg>
                      </span>
                    </a>
                    <span>{listing.address}, {listing.zipcode}</span>
                  </p>
            
                  {/* Phone Row */}
                  <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                    <span
                      className="circle-icon"
                      style={{ display: 'inline-flex', alignItems: 'center', marginRight: '6px' }}
                    >
                      <MdPhone style={{ width: '14px', height: '14px', verticalAlign: 'middle' }} />
                    </span>
                    <a
                      href={`tel:${listing.phone}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {listing.phone}
                    </a>
                  </p>
                </div>
            
                {/* Center Section */}
                <div style={{ flex: '1 1 33%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left' }}>
                  <p><strong>District:</strong> {listing.district}</p>
                  <p><strong>{translatedContent['No. of Units'] || 'No. of Units'}:</strong> {listing.units}</p>
                </div>
            
                {/* Right Section */}
                <div style={{ flex: '1 1 33%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'right' }}>
                  <p><strong>{translatedContent['Type of Project:'] || 'Type of Project:'}</strong> {listing.projectType}</p>
                  <p><strong>{translatedContent['Housing Type:'] || 'Housing Type:'}</strong> {listing.housingType}</p>
                </div>
              </div>
            </>            
            ) : (
              <>
                <div className="card-image">
                  <img src={listing.image} alt={listing.project} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                </div>
                <div className="card-content" style={{ color: 'black' }}>
                  <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>{listing.project}</h6>
                  <p style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                    <a
                      href={`https://www.google.com/maps?q=${encodeURIComponent(listing.address + ', ' + listing.zipcode)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', marginRight: '0px' }}
                    >
                      <span className="circle-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <svg
                          role="presentation"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          style={{ width: '14px', height: '14px' }}
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 
          0 192 0 85.961 85.961 0 192 0s192 
          85.961 192 192c0 77.413-26.97 99.031-172.268 
          309.67-9.535 13.774-29.93 13.773-39.464 
          0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80
          -80 35.817-80 80 35.817 80 80 80z"
                          />
                        </svg>
                      </span>
                    </a>
                    <span>
                      {listing.address}, {listing.zipcode}
                    </span>
                  </p>
                  {/* Phone Row */}
                  <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                    <span
                      className="circle-icon"
                      style={{ display: 'inline-flex', alignItems: 'center', marginRight: '6px' }}
                    >
                      <MdPhone style={{ width: '14px', height: '14px', verticalAlign: 'middle' }} />
                    </span>
                    <a
                      href={`tel:${listing.phone}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {listing.phone}
                    </a>
                  </p>
                  <br />
                  <p><strong>District:</strong> {listing.district}</p>
                  <p><strong>{translatedContent['No. of Units'] || 'No. of Units'}:</strong> {listing.units}</p>
                  <p><strong>{translatedContent['Type of Project:'] || 'Type of Project:'}</strong> {listing.projectType}</p>
                  <p><strong>{translatedContent['Housing Type:'] || 'Housing Type:'}</strong> {listing.housingType}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced Pagination with Materialize Icons */}
      <div className="center" style={{ marginTop: '24px', paddingBottom: '24px' }}>
        <ul className="pagination" style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Jump to First */}
          <li className={currentPage === 1 ? 'disabled' : 'waves-effect'}>
            <a href="#!" onClick={() => currentPage !== 1 && setCurrentPage(1)}>
              <i className="material-icons">first_page</i>
            </a>
          </li>

          {/* Previous Page */}
          <li className={currentPage === 1 ? 'disabled' : 'waves-effect'}>
            <a href="#!" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>

          {/* Page Numbers with Ellipsis */}
          {(() => {
            const pageItems = [];
            const visiblePages = 10;
            const sidePages = 2;
            let start = Math.max(currentPage - sidePages, 1);
            let end = Math.min(currentPage + sidePages, totalPages);

            if (currentPage <= 5) {
              start = 1;
              end = Math.min(visiblePages, totalPages);
            } else if (currentPage >= totalPages - 4) {
              start = Math.max(totalPages - visiblePages + 1, 1);
              end = totalPages;
            } else {
              start = currentPage - 4;
              end = currentPage + 5;
            }

            if (start > 1) {
              pageItems.push(
                <li key="start-ellipsis" className="disabled"><span style={{ padding: '0 10px' }}>...</span></li>
              );
            }

            for (let i = start; i <= end; i++) {
              pageItems.push(
                <li key={i} className={currentPage === i ? 'active' : 'waves-effect'}>
                  <a href="#!" onClick={() => setCurrentPage(i)}>{i}</a>
                </li>
              );
            }

            if (end < totalPages) {
              pageItems.push(
                <li key="end-ellipsis" className="disabled"><span style={{ padding: '0 10px' }}>...</span></li>
              );
            }

            return pageItems;
          })()}

          {/* Next Page */}
          <li className={currentPage === totalPages ? 'disabled' : 'waves-effect'}>
            <a href="#!" onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>

          {/* Jump to Last */}
          <li className={currentPage === totalPages ? 'disabled' : 'waves-effect'}>
            <a href="#!" onClick={() => currentPage !== totalPages && setCurrentPage(totalPages)}>
              <i className="material-icons">last_page</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPanel;
