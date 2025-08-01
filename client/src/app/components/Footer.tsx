"use client";
import React from "react";

const Footer = () => (
  <>
    <footer style={{ backgroundColor: '#28649b', color: 'white', paddingTop: 10, paddingBottom: 32 }}>
      <div className="container">
        <div className="row" style={{ marginBottom: 32 }}>
          {/* Left: Titles and Disclaimer */}
          <div className="col s12 m7">
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="col s12 m4" style={{ paddingTop: 10, paddingBottom: 16 }}>
                <h5 className="white-text" style={{ fontWeight: 700, fontSize: 19, marginBottom: 0}}>
                  Help and Support
                </h5>
                <ul style={{ fontSize: 12.9, lineHeight: 3 }}>
                  <li><a href="#" className="white-text footer-link">Miami-Dade Home</a></li>
                  <li><a href="#" className="white-text footer-link">Privacy Statement</a></li>
                  <li><a href="#" className="white-text footer-link">ADA Notice</a></li>
                  <li><a href="#" className="white-text footer-link">Disclaimer</a></li>
                  <li><a href="#" className="white-text footer-link">About Miami-Dade</a></li>
                </ul>
              </div>
              <div className="col s12 m4" style={{ paddingTop: 10, paddingBottom: 16 }}>
                <h5 className="white-text" style={{ fontWeight: 700,fontSize: 19, marginBottom: 0}}>
                  Self-Service
                </h5>
                <ul style={{ fontSize: 12.9, lineHeight: 3 }}>
                  <li><a href="#" className="white-text footer-link">311 Contact Center</a></li>
                  <li><a href="#" className="white-text footer-link">Mobile Applications</a></li>
                  <li><a href="#" className="white-text footer-link">Open Data</a></li>
                  <li><a href="#" className="white-text footer-link">Public Records</a></li>
                  <li><a href="#" className="white-text footer-link">Service Directory</a></li>
                </ul>
              </div>
              <div className="col s12 m4" style={{ paddingTop: 10, paddingBottom: 16 }}>
                <h5 className="white-text" style={{ fontWeight: 700,fontSize: 19, marginBottom: 0}}>
                  Stay Connected
                </h5>
                <ul style={{ fontSize: 12.9, lineHeight: 3 }}>
                  <li><a href="#" className="white-text footer-link">Legal Ads &amp; Public Notices</a></li>
                  <li><a href="#" className="white-text footer-link">Social Media Directory</a></li>
                  <li><a href="#" className="white-text footer-link">Watch Government Meetings</a></li>
                  <li><a href="#" className="white-text footer-link">County Calendar</a></li>
                  <li><a href="#" className="white-text footer-link">News RSS Feed</a></li>
                </ul>
              </div>
            </div>
            {/* Disclaimer below the titles */}
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="col s12" style={{ paddingTop: 10, paddingBottom: 24 }}>
                <p className="white-text" style={{ fontSize: 12.9, marginBottom: 0 }}>
                  Under Florida law, e-mail addresses are public records. If you do not want your e-mail address
                  released in response to a public records request, do not send electronic mail to this entity.
                  Instead, contact this office by phone or in writing.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Logo, Rights Reserved, Award */}
          <div className="col s12 m4 offset-m1 right-footer-col" style={{ paddingTop: 32, paddingBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
            <div className="footer-logo-row" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <a href="/">
                <img
                  src="/footerlogo.png"
                  alt="Miami-Dade County"
                  className="responsive-img"
                  style={{ maxWidth: 120 }}
                />
              </a>
            </div>
            <div className="white-text" style={{ margin: '0 0 16px 0', fontSize: 12.9 }}>
              © {new Date().getFullYear()} Miami-Dade County. All rights reserved.
            </div>
            <img
              src="/award.jpg"
              alt="Government Experience Award"
              className="responsive-img z-depth-1"
              style={{
                maxWidth: 250,
                background: '#fff',
                borderRadius: 4,
                padding: 8,
                marginTop: 0
              }}
            />
          </div>
        </div>
      </div>
        {/* Bottom White Bar - Now floating */}
         <div
           className="white hide-on-med-and-down"
           style={{
              borderTop: '1px solid #e0e0e0',
              padding: '12px 0',
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: '100%',
              zIndex: 1000,
              boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.25)'
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
    <style jsx>{`
      .footer-link:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
      .right-footer-col { align-items: flex-end; }
      @media (max-width: 992px) {
        .right-footer-col { align-items: center !important; }
      }
      .footer-logo-row { width: 100%; display: flex; justify-content: flex-end; }
      @media (max-width: 992px) {
        .footer-logo-row { justify-content: center; }
      }
    `}</style>
  </>
);

export default Footer;
