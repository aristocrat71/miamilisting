"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "../contexts/TranslationContext";

const Header = () => {
  const translateRef = useRef<HTMLAnchorElement>(null);
  const servicesRef = useRef<HTMLAnchorElement>(null);
  const newsRef = useRef<HTMLAnchorElement>(null);
  const governmentRef = useRef<HTMLAnchorElement>(null);
  const employeesRef = useRef<HTMLAnchorElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, translateText } = useTranslation();
  const [translatedContent, setTranslatedContent] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).M) {
      (window as any).M.AutoInit();
    }
  }, []);

  // Translate content when language changes
  useEffect(() => {
    const translateContent = async () => {
      const textsToTranslate = [
        '311', 'GovMeetings', 'Calendar', 'Translate', 'English', 'Spanish', 'Haitian Creole',
        'Home', 'About', 'Listings', 'Resources', 'Contact', 'Login', 'MENU', 'Miami-Dade County'
      ];

      const translations: Record<string, string> = {};
      for (const text of textsToTranslate) {
        translations[text] = await translateText(text);
      }
      setTranslatedContent(translations);
    };

    translateContent();
  }, [currentLanguage, translateText]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    const languageMap: Record<string, string> = {
      'English': 'en',
      'Spanish': 'es',
      'Haitian Creole': 'ht'
    };
    setLanguage(languageMap[language] || 'en');
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      {/* Top Blue Bar */}
      <div style={{
        backgroundColor: "#28649b",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 115px",
        fontSize: "0.85rem"
      }}>
        <a href="#" className="white-text-bold" style={{ marginLeft: 24, fontWeight: 500, color: "#fff"}}>
          {translatedContent['311'] || '311'}
        </a>
        <a href="#" className="white-text-bold" style={{ marginLeft: 24, fontWeight: 500, color: "#fff"}}>
          {translatedContent['GovMeetings'] || 'GovMeetings'}
        </a>
        <a href="#" className="white-text-bold" style={{ marginLeft: 24, fontWeight: 500, color: "#fff"}}>
          {translatedContent['Calendar'] || 'Calendar'}
        </a>
        <a
          ref={translateRef}
          className="dropdown-trigger white-text"
          href="#"
          data-target="translate-dropdown"
          style={{ fontWeight: 500, gap: 1, marginLeft: 24, display: "flex", alignItems: "center" }}
        >
          {translatedContent['Translate'] || 'Translate'} <i className="material-icons" style={{ fontSize: 18 }}>arrow_drop_down</i>
        </a>
        <ul id="translate-dropdown" className="dropdown-content" style={{
          fontSize: "0.85rem",
          fontWeight: 500,
          backgroundColor: "white",
          border: "1px solid #e0e0e0",
          borderRadius: "0px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          minWidth: "120px",
          marginTop: "8px"
        }}>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleLanguageChange('English'); }}
              style={{ color: "#28649b", fontSize: "0.85rem", fontWeight: 500, padding: "8px 16px" }}
            >
              {translatedContent['English'] || 'English'}
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleLanguageChange('Spanish'); }}
              style={{ color: "#28649b", fontSize: "0.85rem", fontWeight: 500, padding: "8px 16px" }}
            >
              {translatedContent['Spanish'] || 'Spanish'}
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleLanguageChange('Haitian Creole'); }}
              style={{ color: "#28649b", fontSize: "0.85rem", fontWeight: 500, padding: "8px 16px" }}
            >
              {translatedContent['Haitian Creole'] || 'Haitian Creole'}
            </a>
          </li>
        </ul>
      </div>
      
      <nav className="white z-depth-1" style={{  
        height: 62,
        display: "flex",
        alignItems: "center",
        padding: "0 115px"
      }}>
        <div className="nav-wrapper" style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}>
          
          {/* Mobile Menu Button - Only visible on small screens */}
          <button
              onClick={toggleMenu}
              className="btn-flat hide-on-large-only"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                minWidth: "44px",
                minHeight: "44px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                marginLeft: "10px"
              }}
            >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
              <span style={{ width: "20px", height: "4px", borderRadius: "9px",backgroundColor: "#666", marginTop:"15px",marginBottom:"1px", display: "block" }}></span>
              <span style={{ width: "20px", height: "4px", borderRadius: "9px",backgroundColor: "#666", marginBottom:"1px", display: "block" }}></span>
              <span style={{ width: "20px", height: "4px", borderRadius: "9px",backgroundColor: "#666", display: "block" }}></span>
              <span style={{ fontSize: "12px", color: "#28649b", fontWeight: 500 }}>
                {translatedContent['MENU'] || 'MENU'}
              </span>
            </div>
          </button>
          
          {/* Logo and Navigation Bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            minWidth: 0,
            flex: "1 1 auto",
            flexWrap: "wrap"
          }}>
            {/* Logo */}
            <a href="#" className="brand-logo" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img src="/logo.png" alt="Miami Dade County Logo" style={{ height: 40, width: "auto", maxWidth: "100%" }} />
            </a>

            {/* Navigation Bar - Hidden on mobile */}
            <ul style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginLeft: "100px",
              padding: 0,
              listStyle: "none",
              flexWrap: "wrap",
              flex: "1 1 auto"
            }} className="hide-on-med-and-down">
              <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>
                {translatedContent['Home'] || 'Home'}
              </a></li>
              <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>
                {translatedContent['About'] || 'About'}
              </a></li>
              <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>
                {translatedContent['Listings'] || 'Listings'}
              </a></li>
              <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>
                {translatedContent['Resources'] || 'Resources'}
              </a></li>
              <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>
                {translatedContent['Contact'] || 'Contact'}
              </a></li>
            </ul>
          </div>

          {/* Search, Login, and Mobile Menu */}
          {/* Desktop: Search then Login */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }} className="hide-on-med-and-down">
            <a
              href="#"
              className="btn-floating waves-effect waves-light"
              style={{
                backgroundColor: "#28649b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <i className="material-icons white-text">search</i>
            </a>
            <a
              href="#"
              className="black-text"
              style={{
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                fontSize: 16
              }}
            >
              <i className="fa fa-sign-in" style={{ fontSize: 15, marginRight: 4 }}></i>
              {translatedContent['Login'] || 'Login'}
            </a>
          </div>
          
          {/* Mobile: Login then Search (switched order) */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hide-on-large-only">
            <a
              href="#"
              className="black-text"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 12
              }}
            >
              {translatedContent['Login'] || 'Login'}
            </a>
            <a
              href="#"
              className="btn-floating waves-effect waves-light"
              style={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none"
              }}
            >
              <img src="/search-mobile.png" alt="Search" style={{ width: 24, height: 24 }} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          zIndex: 2000,
          display: "flex",
          flexDirection: "column"
        }}>
          {/* Menu Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #e0e0e0",
            backgroundColor: "#f8f9fa"
          }}>
            <div style={{ fontSize: "14px", fontWeight: 400, color: "black" }}>
              {translatedContent['Miami-Dade County'] || 'Miami-Dade County'}
            </div>
            <button
              onClick={closeMenu}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#333",
                padding: "8px"
              }}
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div style={{
            flex: 1,
            padding: "20px 0"
          }}>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0
            }}>
              <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                <a href="#" style={{
                  display: "block",
                  padding: "16px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500
                }}>
                  {translatedContent['Home'] || 'Home'}
                </a>
              </li>
              <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                <a href="#" style={{
                  display: "block",
                  padding: "16px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500
                }}>
                  {translatedContent['About'] || 'About'}
                </a>
              </li>
              <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                <a href="#" style={{
                  display: "block",
                  padding: "16px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500
                }}>
                  {translatedContent['Listings'] || 'Listings'}
                </a>
              </li>
              <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                <a href="#" style={{
                  display: "block",
                  padding: "16px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500
                }}>
                  {translatedContent['Resources'] || 'Resources'}
                </a>
              </li>
              <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                <a href="#" style={{
                  display: "block",
                  padding: "16px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500
                }}>
                  {translatedContent['Contact'] || 'Contact'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Spacer to avoid content hidden behind header */}
      <div style={{ height: 108 }}></div>
      
      {/* Custom CSS for translate dropdown */}
      <style jsx>{`
        #translate-dropdown {
          background-color: white !important;
          border: 1px solid #e0e0e0 !important;
          border-radius: 0px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
          min-width: 120px !important;
          margin-top: 8px !important;
          top: 15% !important;
          transform: none !important;
        }
      
      #translate-dropdown li a {
        color: #027abb !important;
        font-size: 0.85rem !important;
        font-weight: 400 !important;
        padding: 8px 16px !important;
        padding-bottom: 2px !important;
      }
      
      #translate-dropdown li a:hover {
        background-color: #f5f5f5 !important;
        color: #28649b !important;
        text-decoration: underline !important;
      }
    `}</style>
    </header>
  );
};

export default Header;
