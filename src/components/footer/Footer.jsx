import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Sue</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">Projects</a>
          </li>

          <li>
            <a href="#testimonial" className="footer_link">Testimonials</a>
          </li>
        </ul>

        <div className="footer_social">
          <a 
            href="https://twitter.com/noriheus" 
            className="footer_social-link" 
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a 
            href="https://dribbble.com/noriheus" 
            className="footer_social-link" 
            target="_blank"
          >
            <i className="bx bxl-dribbble"></i>
          </a>

          <a 
          href="https://github.com/kaogamasala" 
          className="footer_social-link" 
          target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Sue. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer