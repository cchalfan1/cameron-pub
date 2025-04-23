import React from "react";
import "./LandingPage.css";

import Logo from "../assets/logo.png";
import AppScreenshot from "../assets/app-mockup.png";
import AppleIcon from "../assets/apple-white.png";
import GoogleIcon from "../assets/google.png";

export default function App() {
  return (
    <div className="lp-container">
      <header className="lp-header">
        <img src={Logo} alt="Cameron logo" className="lp-logo" />
        <div className="lp-header-text">
          <h1 className="lp-title">Cameron</h1>
          <p className="lp-tagline">The AI Camera.</p>
        </div>
      </header>

      <section className="lp-hero">
        <img
          src={AppScreenshot}
          alt="App screenshot"
          className="lp-screenshot"
        />
        <div className="lp-cta">
          <a href="#" className="lp-button">
            <img
              src={AppleIcon}
              alt="App Store"
              className="lp-store-icon-apple"
            />
            Download on App Store
          </a>
          {/* <a href="#" className="lp-button outline">
            <img src={GoogleIcon} alt="Google Play" className="lp-store-icon" />
            Get it on Google Play
          </a> */}
        </div>
      </section>

      <section className="lp-features">
        <div className="feature">
          <h3>Instant </h3>
          <p>Point your camera and get AI‑driven answers.</p>
        </div>
        <div className="feature">
          <h3>Effortless </h3>
          <p>Capture, analyze, and share in one tap.</p>
        </div>
        <div className="feature">
          <h3>Privacy‑First</h3>
          <p>We don't store any of your photos.</p>
        </div>
      </section>
    </div>
  );
}
