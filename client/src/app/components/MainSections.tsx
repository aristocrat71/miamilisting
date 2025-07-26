'use client';

import React, { useEffect } from 'react';

const FilterPanel: React.FC = () => {
  useEffect(() => {
    const initMaterialize = async () => {
      if (typeof window !== 'undefined') {
        const M = await import('materialize-css');
        M.AutoInit();
      }
    };

    initMaterialize();
  }, []);

  return (
    <>
      {/* Filter Container */}
      <div
        className="z-depth-1"
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px 32px',
          margin: '30px auto',
          maxWidth: '1200px',
        }}
      >
        {/* Title */}
        <h6 style={{ fontWeight: 600, color: '#666', marginBottom: '24px' }}>Filter</h6>

        <div className="row" style={{ marginBottom: '10px' }}>
          {/* Zipcode */}
          <div className="input-field col s12 m3">
            <select defaultValue="">
              <option value="" disabled>Select Zipcode</option>
              <option value="rent">1234567</option>
              <option value="sale">234567</option>
            </select>
            <label>Listing Type</label>
          </div>

          {/* District */}
          <div className="input-field col s12 m3">
            <select defaultValue="">
              <option value="" disabled>Select District</option>
              <option value="all">All</option>
              <option value="miami">Miami</option>
              <option value="dade">Dade</option>
            </select>
            <label>City</label>
          </div>

          {/* Housing Type */}
          <div className="input-field col s12 m3">
            <select defaultValue="">
              <option value="" disabled>Select Option</option>
              <option value="no">Public</option>
              <option value="yes">Private</option>
            </select>
            <label>Age Restricted Living</label>
          </div>

          {/* Senior Living */}
          <div className="input-field col s12 m3">
            <select defaultValue="">
              <option value="" disabled>Select Option</option>
              <option value="all">Yes</option>
              <option value="allowed">No</option>
            </select>
            <label>Pet Policy</label>
          </div>
        </div>

        {/* Listing Date Filter */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontWeight: 600, display: 'block', marginBottom: 8 }}>
            Listing Date Filter
          </label>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[
              { label: 'Current Opportunities', value: 'current' },
              { label: 'Waitlist Opportunities', value: 'waitlist' },
              { label: 'Coming Soon', value: 'soon' },
              { label: 'Past Opportunities', value: 'past' },
            ].map((option) => (
              <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <input name="listingDate" type="radio" value={option.value} />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-flat grey lighten-2 black-text">Reset</button>
          <button className="btn" style={{ backgroundColor: '#28649b', color: '#fff' }}>Search by Filter</button>
        </div>
      </div>

      {/* Card Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 40px',
          padding: '0 16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        {/* Card 1 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home1.jpeg" alt="Alexan Harrison" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALEXAN HARRISON</h6>
            <p><i className="material-icons tiny">location_on</i> 3 Westchester Park Dr West Harrison NY 10604</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: N/A</p>
            <p>Lottery Date/Time: 09/26/2024 11:00 AM</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home2.jpeg" alt="Allen" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALLEN</h6>
            <p><i className="material-icons tiny">location_on</i> 247 North Ave New Rochelle NY 10801</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: 09/19/2025 4:00 PM</p>
            <p>Lottery Date/Time: 10/07/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home3.png" alt="The Atwood" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>THE ATWOOD</h6>
            <p><i className="material-icons tiny">location_on</i> 1 Vanderbilt Ave Pleasantville NY 10570</p>
            <p>Application Start Date: 07/11/2025 11:00 AM</p>
            <p>Application End Date: 08/18/2025 4:00 PM</p>
            <p>Lottery Date/Time: 09/03/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home1.jpeg" alt="Alexan Harrison" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALEXAN HARRISON</h6>
            <p><i className="material-icons tiny">location_on</i> 3 Westchester Park Dr West Harrison NY 10604</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: N/A</p>
            <p>Lottery Date/Time: 09/26/2024 11:00 AM</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home2.jpeg" alt="Allen" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALLEN</h6>
            <p><i className="material-icons tiny">location_on</i> 247 North Ave New Rochelle NY 10801</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: 09/19/2025 4:00 PM</p>
            <p>Lottery Date/Time: 10/07/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home3.png" alt="The Atwood" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>THE ATWOOD</h6>
            <p><i className="material-icons tiny">location_on</i> 1 Vanderbilt Ave Pleasantville NY 10570</p>
            <p>Application Start Date: 07/11/2025 11:00 AM</p>
            <p>Application End Date: 08/18/2025 4:00 PM</p>
            <p>Lottery Date/Time: 09/03/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home1.jpeg" alt="Alexan Harrison" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALEXAN HARRISON</h6>
            <p><i className="material-icons tiny">location_on</i> 3 Westchester Park Dr West Harrison NY 10604</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: N/A</p>
            <p>Lottery Date/Time: 09/26/2024 11:00 AM</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home2.jpeg" alt="Allen" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALLEN</h6>
            <p><i className="material-icons tiny">location_on</i> 247 North Ave New Rochelle NY 10801</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: 09/19/2025 4:00 PM</p>
            <p>Lottery Date/Time: 10/07/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home3.png" alt="The Atwood" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>THE ATWOOD</h6>
            <p><i className="material-icons tiny">location_on</i> 1 Vanderbilt Ave Pleasantville NY 10570</p>
            <p>Application Start Date: 07/11/2025 11:00 AM</p>
            <p>Application End Date: 08/18/2025 4:00 PM</p>
            <p>Lottery Date/Time: 09/03/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 1 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home1.jpeg" alt="Alexan Harrison" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALEXAN HARRISON</h6>
            <p><i className="material-icons tiny">location_on</i> 3 Westchester Park Dr West Harrison NY 10604</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: N/A</p>
            <p>Lottery Date/Time: 09/26/2024 11:00 AM</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home2.jpeg" alt="Allen" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>ALLEN</h6>
            <p><i className="material-icons tiny">location_on</i> 247 North Ave New Rochelle NY 10801</p>
            <p>Application Start Date: N/A</p>
            <p>Application End Date: 09/19/2025 4:00 PM</p>
            <p>Lottery Date/Time: 10/07/2025 11:00 AM</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card z-depth-1">
          <div className="card-image">
            <img src="/home3.png" alt="The Atwood" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="card-content" style={{ color: 'black' }}>
            <h6 style={{ fontWeight: 700, marginBottom: '4px' }}>THE ATWOOD</h6>
            <p><i className="material-icons tiny">location_on</i> 1 Vanderbilt Ave Pleasantville NY 10570</p>
            <p>Application Start Date: 07/11/2025 11:00 AM</p>
            <p>Application End Date: 08/18/2025 4:00 PM</p>
            <p>Lottery Date/Time: 09/03/2025 11:00 AM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;