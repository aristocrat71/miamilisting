"use client";
import React from "react";

const Footer = () => (
  <footer style={{ backgroundColor: '#28649b', color: 'white', paddingTop: 10, paddingBottom: 32 }}>
    <div className="container">
      <div className="row" style={{ marginBottom: 32 }}>
        {/* Columns */}
        <div className="col s12 m8 l9">
          <div className="row" style={{ marginBottom: 0 }}>
            <div className="col s12 m4" style={{ paddingTop: 10, paddingBottom: 16 }}>
              <h5 className="white-text">Help and Support</h5>
              <ul>
                <li><a href="#" className="white-text">Miami-Dade Home</a></li>
                <li><a href="#" className="white-text">Privacy Statement</a></li>
                <li><a href="#" className="white-text">ADA Notice</a></li>
                <li><a href="#" className="white-text">Disclaimer</a></li>
                <li><a href="#" className="white-text">About Miami-Dade</a></li>
              </ul>
            </div>
            <div className="col s12 m4" style={{ paddingTop: 10, paddingBottom: 16 }}>
              <h5 className="white-text">Self-Service</h5>
              <ul>
                <li><a href="#" className="white-text">311 Contact Center</a></li>
                <li><a href="#" className="white-text">Mobile Applications</a></li>
                <li><a href="#" className="white-text">Open Data</a></li>
                <li><a href="#" className="white-text">Public Records</a></li>
                <li><a href="#" className="white-text">Service Directory</a></li>
              </ul>
            </div>
            <div className="col s12 m4" style={{ paddingTop: 10, paddingBottom: 16 }}>
              <h5 className="white-text">Stay Connected</h5>
              <ul>
                <li><a href="#" className="white-text">Legal Ads &amp; Public Notices</a></li>
                <li><a href="#" className="white-text">Social Media Directory</a></li>
                <li><a href="#" className="white-text">Watch Government Meetings</a></li>
                <li><a href="#" className="white-text">County Calendar</a></li>
                <li><a href="#" className="white-text">News RSS Feed</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo and Award */}
        <div className="col s12 m4 l3 center-align" style={{ paddingTop: 32, paddingBottom: 32 }}>
          <img
            src="/footerlogo.png"
            alt="Miami-Dade County"
            className="responsive-img"
            style={{ maxWidth: 160 }}
          />
          <div className="white-text" style={{ margin: '16px 0 8px 0' }}>
            © {new Date().getFullYear()} Miami-Dade County. All rights reserved.
          </div>
          <img
            src="/award.jpg"
            alt="Government Experience Award"
            className="responsive-img z-depth-1"
            style={{
              maxWidth: 240,
              background: '#fff',
              borderRadius: 4,
              padding: 8,
              marginTop: 8
            }}
          />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="row" style={{ marginBottom: 0 }}>
        <div className="col s12" style={{ paddingTop: 10, paddingBottom: 24 }}>
          <p className="white-text" style={{ fontSize: 16, marginBottom: 0 }}>
            Under Florida law, e-mail addresses are public records. If you do not want your e-mail address
            released in response to a public records request, do not send electronic mail to this entity.
            Instead, contact this office by phone or in writing.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom White Bar - Now floating */}
    <div
      className="white"
      style={{
        borderTop: '1px solid #e0e0e0',
        padding: '12px 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000
      }}
    >
      <div className="container">
        <div className="row valign-wrapper" style={{ marginBottom: 0 }}>
          <div className="col s12 m8 l9 valign-wrapper">
            <img
              src="/miamidade.gov.png"
              alt="miamidade.gov"
              style={{
                height: 28,
                marginRight: 16,
                verticalAlign: 'middle'
              }}
            />
            <a href="#"><img src="/fb.png" alt="Facebook" className="circle" style={{ height: 34, marginRight: 1, verticalAlign: 'middle' }} /></a>
            <a href="#"><img src="/instg.png" alt="Instagram" className="circle" style={{ height: 34, marginRight: 1, verticalAlign: 'middle' }} /></a>
            <a href="#"><img src="/yt.png" alt="YouTube" className="circle" style={{ height: 34, marginRight: 1, verticalAlign: 'middle' }} /></a>
            <a href="#"><img src="/x.png" alt="X" className="circle" style={{ height: 34, marginRight: 1, verticalAlign: 'middle' }} /></a>
          </div>

          {/* Feedback Button */}
          <div className="col s12 m4 l3 right-align">
            <a
              href="#"
              className="blue-text text-darken-3"
              style={{ fontWeight: 500, position: 'relative', fontSize: 16 }}
            >
              Feedback
              <i
                className="material-icons"
                style={{
                  fontSize: '1.6em',
                  verticalAlign: 'middle',
                  marginLeft: 4
                }}
              >
                chat
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
