"use client";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const translateRef = useRef<HTMLAnchorElement>(null);
  const servicesRef = useRef<HTMLAnchorElement>(null);
  const newsRef = useRef<HTMLAnchorElement>(null);
  const governmentRef = useRef<HTMLAnchorElement>(null);
  const employeesRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).M) {
      (window as any).M.AutoInit();
    }
  }, []);

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
        <a href="#" className="white-text" style={{ marginLeft: 24, fontWeight: 500 }}>311</a>
        <a href="#" className="white-text" style={{ marginLeft: 24, fontWeight: 500 }}>GovMeetings</a>
        <a href="#" className="white-text" style={{ marginLeft: 24, fontWeight: 500 }}>Calendar</a>
        <a
          ref={translateRef}
          className="dropdown-trigger white-text"
          href="#"
          data-target="translate-dropdown"
          style={{ fontWeight: 500, gap: 1, marginLeft: 24, display: "flex", alignItems: "center" }}
        >
          Translate <i className="material-icons" style={{ fontSize: 18 }}>arrow_drop_down</i>
        </a>
        <ul id="translate-dropdown" className="dropdown-content">
          <li><a href="#">Spanish</a></li>
          <li><a href="#">Creole</a></li>
          <li><a href="#">Portuguese</a></li>
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
    flexWrap: "wrap" // Ensures content wraps if screen too small
  }}>
    {/* Logo and Navigation Bar */}
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 24,
      minWidth: 0,
      flex: "1 1 auto",
      flexWrap: "wrap" // allow wrapping
    }}>
      {/* Logo */}
      <a href="#" className="brand-logo" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <img src="/logo.png" alt="Miami Dade County Logo" style={{ height: 40, width: "auto", maxWidth: "100%" }} />
      </a>

      {/* Navigation Bar */}
      <ul style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        marginLeft: "100px",
        padding: 0,
        listStyle: "none",
        flexWrap: "wrap",
        flex: "1 1 auto"
      }}>
        <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>Home</a></li>
        <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>About</a></li>
        <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>Listings</a></li>
        <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>Resources</a></li>
        <li><a href="#" className="black-text" style={{ fontSize: 15, fontWeight: 600 }}>Contact</a></li>
      </ul>
    </div>

    {/* Search and Login */}
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
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
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          fontSize: 16
        }}
      >
        <i className="material-icons left" style={{ fontSize: 21, marginRight: 4 }}>login</i>Login
      </a>
    </div>
  </div>
</nav>

      {/* Spacer to avoid content hidden behind header */}
      <div style={{ height: 108 }}></div>
    </header>
  );
};

export default Header;
