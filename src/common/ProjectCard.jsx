import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ src, link, h3, p }) {
  const isExternalLink = link.startsWith('http'); // Check if the link is external

  return (
    isExternalLink ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    ) : (
      <Link to={link}>
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </Link>
    )
  );
}

export default ProjectCard;
