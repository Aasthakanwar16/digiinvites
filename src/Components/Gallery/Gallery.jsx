import React from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>

      <div className="gallery-grid">
        {/* Image with Link */}
        <div className="gallery-item">
          <Link to="/weddings">
            <img src="src/assets/gallery7.jpg" alt="Weddings" />
          </Link>
        </div>

        <div className="gallery-item">
          <Link to="/birthday">
            <img src="src/assets/gallery6.jpeg" alt="Birthday" />
          </Link>
        </div>

        <div className="gallery-item">
          <Link to="/puja">
            <img src="src/assets/gallery8.webp" alt="Puja" />
          </Link>
        </div>

        <div className="gallery-item">
          <Link to="/view-image">
            <img src="src/assets/gallery6.jpeg" alt="View Image" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

