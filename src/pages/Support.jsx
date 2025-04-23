import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";

function Support() {
  return (
    <div className="support-container">
      <p className="support-back">
        <Link to="/" className="support-link">
          Back to Home
        </Link>
      </p>
      <h1 className="support-title">Support for Cameron</h1>
      <p className="support-intro">
        We're here to help you get the most out of Cameron, your AI-powered
        camera app. Find answers to common questions, contact us, or explore
        additional resources below.
      </p>

      <section className="support-section">
        <h2 className="support-heading">Frequently Asked Questions</h2>
        <div className="support-faq">
          <h3 className="support-faq-question">How do I use Cameron?</h3>
          <p className="support-faq-answer">
            Take a photo or upload an image using the app, then ask a question.
            Our AI will analyze the image and provide a response. The free tier
            allows one question per day, while subscribers get enhanced usage
            limits.
          </p>
          <h3 className="support-faq-question">
            How do I manage my subscription?
          </h3>
          <p className="support-faq-answer">
            Subscriptions are handled via Apple In-App Purchases. Visit{" "}
            <a
              href="https://support.apple.com"
              className="support-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Support
            </a>{" "}
            to manage billing, renewals, or cancellations.
          </p>
          <h3 className="support-faq-question">Is my data private?</h3>
          <p className="support-faq-answer">
            Yes, we do not store your images on our servers. For details, see
            our{" "}
            <Link to="/privacy" className="support-link">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2 className="support-heading">Contact Us</h2>
        <p className="support-text">
          For any questions or support needs, reach out to:
        </p>
        <p className="support-contact">
          Afternoon Products, LLC
          <br />
          1 Park Ave, Unit G-1
          <br />
          Hampton, NH 03842
          <br />
          Email:{" "}
          <a href="mailto:cameronapptech@gmail.com" className="support-link">
            cameronapptech@gmail.com
          </a>
        </p>
      </section>

      <section className="support-section">
        <h2 className="support-heading">Additional Resources</h2>
        <ul className="support-list">
          <li>
            <a
              href="https://support.apple.com"
              className="support-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Support for Subscriptions
            </a>
          </li>
          <li>
            <Link to="/privacy" className="support-link">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/tos" className="support-link">
              Terms of Service
            </Link>
          </li>
        </ul>
      </section>

      <p className="support-back">
        <Link to="/" className="support-link">
          Back to Home
        </Link>
      </p>
    </div>
  );
}
export default Support;
