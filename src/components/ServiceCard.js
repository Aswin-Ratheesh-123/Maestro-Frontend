import React from "react";

function ServiceCard({ title, description, image, url }) {
  return (
    <div className="service-card glass fade-service">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="service-btn"
        >
          Know More
        </a>
      </div>
    </div>
  );
}


export default ServiceCard;
