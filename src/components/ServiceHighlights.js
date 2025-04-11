import React from 'react';
import '../styles/ServiceHighlights.css';

const ServiceHighlights = () => {
  return (
    <div className="service-highlights">
      <div className="grid-container">
        {/* First Row - 3 columns */}
        <div className="grid-row first-row">
          <div className="grid-item small">
         
            <div className="content-overlay">
            </div>
          </div>
          <div className="grid-item large">
            <img src="/images/aboutus.webp" alt="Service 2" />
            <div className="content-overlay">
 
            </div>
          </div>
          <div className="grid-item medium">
      
            <div>
              <h3>Explore Our Medical <br></br> Tourism Services</h3>
            </div>
          </div>
        </div>

        {/* Second Row - 3 columns */}
        <div className="grid-row second-row">
          <div className="grid-item medium">
            <img src="/images/aboutus.webp" alt="Service 4" />
            <div className="content-overlay">
              <h3>Service 4</h3>
              <p>Description of service 4</p>
            </div>
          </div>
          <div className="grid-item small">
            <img src="/images/aboutus.webp" alt="Service 5" />
            <div className="content-overlay">
              <h3>Service 5</h3>
              <p>Description of service 5</p>
            </div>
          </div>
          <div className="grid-item large">
            <img src="/images/aboutus.webp" alt="Service 6" />
            <div className="content-overlay">
              <h3>Service 6</h3>
              <p>Description of service 6</p>
            </div>
          </div>
        </div>

        {/* Third Row - 3 columns */}
        <div className="grid-row third-row">
          <div className="grid-item large">
            <img src="/images/aboutus.webp" alt="Service 7" />
            <div className="content-overlay">
              <h3>Service 7</h3>
              <p>Description of service 7</p>
            </div>
          </div>
          <div className="grid-item medium">
            <img src="/images/aboutus.webp" alt="Service 8" />
            <div className="content-overlay">
              <h3>Service 8</h3>
              <p>Description of service 8</p>
            </div>
          </div>
          <div className="grid-item small">
            <img src="/images/aboutus.webp" alt="Service 9" />
            <div className="content-overlay">
              <h3>Service 9</h3>
              <p>Description of service 9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
