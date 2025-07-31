'use client';

import React, { useEffect, useState } from 'react';
import listingsData from '../data/listings.json';
import { MdLocationOn, MdPhone } from "react-icons/md";

const FilterPanel: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredListings, setFilteredListings] = useState(listingsData);

  const [zipCode, setZipCode] = useState('');
  const [district, setDistrict] = useState('');
  const [projectType, setProjectType] = useState('');
  const [housingType, setHousingType] = useState('');

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

  const handleFilter = () => {
    const filtered = listingsData.filter((item) => {
      const matchZip = zipCode ? item.zipcode.toString() === zipCode : true;
      const matchDistrict = district ? item.district.toString() === district : true;
      const matchProject = projectType ? item.projectType.toLowerCase() === projectType.toLowerCase() : true;
      const matchHousing = housingType ? item.housingType.toLowerCase() === housingType.toLowerCase() : true;
      return matchZip && matchDistrict && matchProject && matchHousing;
    });

    setFilteredListings(filtered);
    setCurrentPage(1); // Reset to first page on filter
  };

  const resetFilters = () => {
    setZipCode('');
    setDistrict('');
    setProjectType('');
    setHousingType('');
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
        <div className="z-depth-1" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '50px 32px', margin: '0 auto', maxWidth: '800px' }}>

          <div className="row" style={{ marginBottom: '10px' }}>
            {/* Zip Code */}
            <div className="input-field col s12 m3">
              <input style = {{color: 'black'}}
              type="text" value={zipCode}
              onChange={(e) => { 
                if (e.target.value === '' || /^\d+$/.test(e.target.value)) {
                  setZipCode(e.target.value);
                }
                }}
                placeholder="Enter Zipcode Number" />
              <label className="active" style={{ fontFamily: `'Segoe UI', 'SegoeUI', sans-serif`, color: 'black' }}>Zipcode</label>
            </div>

            {/* District */}
            <div className="input-field col s12 m3">
              <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                <option value="">Select District</option>
                <option value="">All</option>
                {[...new Set(listingsData.map((l) => l.district.toString()))].map((dist) => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
              </select>
              <label style={{ fontFamily: `'Segoe UI', 'SegoeUI', sans-serif`, color: 'black' }}>District</label>
            </div>

            {/* Type of Project */}
            <div className="input-field col s12 m3">
              <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                <option value="">Select Option</option>
                <option value="">All</option>
                <option value="Family">Family</option>
                <option value="Elderly">Elderly</option>
                <option value="Foster Care Facility">Foster Care Facility</option>
                <option value="Homeless">Homeless</option>
                <option value="Special Needs">Special Needs</option>
              </select>
              <label style={{ fontFamily: `'Segoe UI', 'SegoeUI', sans-serif`, color: 'black' }}>Type of Project</label>
            </div>

            {/* Housing Type */}
            <div className="input-field col s12 m3">
              <select value={housingType} onChange={(e) => setHousingType(e.target.value)} style={{ color: 'black' }}>
                <option value="">Select Option</option>
                <option value="">All</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <label style={{ fontFamily: `'Segoe UI', 'SegoeUI', sans-serif`, color: 'black' }}>Housing Type</label>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-flat grey lighten-2 black-text" onClick={resetFilters}>Reset</button>
            <button className="btn" style={{ backgroundColor: '#28649b', color: '#fff' }} onClick={handleFilter}>Search by Filter</button>
          </div>
        </div>
      </div>

      {/* View Toggle Button */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '30px auto 4px',
          padding: '0 1px',
          textAlign: 'right',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '10px',
          paddingLeft: '20px'
        }}
      >
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

      {/* Listings */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 4px',
          display: 'grid',
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr',
          gap: '24px',
        }}
      >
        {currentListings.map((listing) => (
          <div key={listing.id} className="card z-depth-1" style={{ display: viewMode === 'list' ? 'flex' : 'block', height: viewMode === 'list' ? '200px' : 'auto' }}>
            {viewMode === 'list' ? (
              <>
                <div style={{ flex: '0 0 200px' }}>
                  <img src={listing.image} alt={listing.project} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, padding: '16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', color: 'black' }}>
                  <div>
                    <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>{listing.project}</h6>
                    <p><MdLocationOn style={{ verticalAlign: 'middle' }} /> {listing.address}, {listing.zipcode}</p>
                    <p><MdPhone style={{ verticalAlign: 'middle' }} /> {listing.phone}</p>
                  </div>
                  <div>
                    <p>District: {listing.district}</p>
                    <p>No. of Units: {listing.units}</p>
                    <p>Type of Project: {listing.projectType}</p>
                    <p><strong>Housing Type:</strong> {listing.housingType}</p>
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
                  <p><MdLocationOn style={{ verticalAlign: 'middle' }} /> {listing.address}, {listing.zipcode}</p>
                  <p><MdPhone style={{ verticalAlign: 'middle' }} /> {listing.phone}</p>
                  <br />
                  <p>District: {listing.district}</p>
                  <p>No. of Units: {listing.units}</p>
                  <p>Type of Project: {listing.projectType}</p>
                  <p><strong>Housing Type:</strong> {listing.housingType}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="center" style={{ marginTop: '24px', paddingBottom: '24px'}}>
        <ul className="pagination">
          <li className={currentPage === 1 ? 'disabled' : 'waves-effect'}>
            <a href="#!" onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={currentPage === i + 1 ? 'active' : 'waves-effect'}>
              <a href="#!" onClick={() => setCurrentPage(i + 1)}>{i + 1}</a>
            </li>
          ))}
          <li className={currentPage === totalPages ? 'disabled' : 'waves-effect'}>
            <a href="#!" onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterPanel;
