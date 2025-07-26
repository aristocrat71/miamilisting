"use client";
import React from "react";
import styles from "./Banner.module.css";

const Banner = () => (
  <section className={styles.bannerSection}>
    <div className={styles.overlay}>
      <div className={styles.searchBox}>
        <h5 className={styles.bannerTitle}>SEARCH MIAMIDADE.GOV</h5>
        <form action="#" method="GET" className={styles.formRow}>
          <input
            type="search"
            className={styles.searchInput}
            aria-label="input search"
            placeholder="Search by Zip Code, District, or Housing Type…"
            name="q"
          />
          <button className={styles.searchButton} type="submit">
            <i className="material-icons white-text">search</i>
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Banner; 