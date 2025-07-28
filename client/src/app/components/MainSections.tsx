'use client';

import React, { useEffect, useState } from 'react';
import listingsData from '../data/listings.json';
import { MdViewModule, MdViewList } from 'react-icons/md';

const FilterPanel: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredListings, setFilteredListings] = useState(listingsData);

  const [zipCode, setZipCode] = useState('');
  const [district, setDistrict] = useState('');
  const [housingType, setHousingType] = useState('');
  const [seniorLivingOnly, setSeniorLivingOnly] = useState('');

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
      const matchHousing = housingType ? item.housingType.toLowerCase() === housingType.toLowerCase() : true;
      const matchSenior = seniorLivingOnly === 'yes' ? item.projectType === 'Elderly' : true;
      return matchZip && matchDistrict && matchHousing && matchSenior;
    });

    setFilteredListings(filtered);
  };

  const resetFilters = () => {
    setZipCode('');
    setDistrict('');
    setHousingType('');
    setSeniorLivingOnly('');
    setFilteredListings(listingsData);
  };

  return (
    <>
      {/* Filter Panel */}
      <div className="z-depth-1" style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px 32px', margin: '30px auto', maxWidth: '1200px' }}>
        <h6 style={{ fontWeight: 600, color: '#666', marginBottom: '24px' }}>Search</h6>

        <div className="row" style={{ marginBottom: '10px' }}>
          {/* Zip Code */}
          <div className="input-field col s12 m3">
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Enter Zipcode" />
            <label className="active">Zipcode</label>
          </div>

          {/* District */}
          <div className="input-field col s12 m3">
            <select value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option value="">Select District</option>
              {[...new Set(listingsData.map((l) => l.district.toString()))].map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
            <label>District</label>
          </div>

          {/* Housing Type */}
          <div className="input-field col s12 m3">
            <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
              <option value="">Select Option</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
            <label>Housing Type</label>
          </div>

       {/* Senior Living Only */}
<div style={{ marginBottom: '16px' }}>
  <label style={{ fontWeight: 600, display: 'block', marginBottom: 8 }}>
    Senior Living Only
  </label>
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    {[
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ].map((option) => (
      <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <input
          name="seniorLiving"
          type="radio"
          value={option.value}
          checked={seniorLivingOnly === option.value}
          onChange={() => setSeniorLivingOnly(option.value)}
        />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
</div>

        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-flat grey lighten-2 black-text" onClick={resetFilters}>Reset</button>
          <button className="btn" style={{ backgroundColor: '#28649b', color: '#fff' }} onClick={handleFilter}>Search by Filter</button>
        </div>
      </div>

      {/* View Toggle */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 16px', padding: '0 4px', textAlign: 'right' }}>
        <button className="btn-flat" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
          {viewMode === 'grid' ? <MdViewList size={24} /> : <MdViewModule size={24} />}
        </button>
      </div>

      {/* Listing Cards */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 40px',
          padding: '0 4px',
          display: 'grid',
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(3, 1fr)' : '1fr',
          gap: '24px',
        }}
      >
        {filteredListings.map((listing) => (
          <div key={listing.id} className="card z-depth-1" style={{ display: viewMode === 'list' ? 'flex' : 'block', height: viewMode === 'list' ? '200px' : 'auto' }}>
            {viewMode === 'list' ? (
              <>
                <div style={{ flex: '0 0 200px' }}>
                  <img src={listing.image} alt={listing.project} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, padding: '16px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', color: 'black' }}>
                  <div>
                    <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>{listing.project}</h6>
                    <p>{listing.address}, {listing.zipcode}</p>
                    <p>Phone: {listing.phone}</p>
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
                  <p>{listing.address}, {listing.zipcode}</p>
                  <p>Phone: {listing.phone}</p>
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
    </>
  );
};

export default FilterPanel;
