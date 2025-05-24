import React from "react";

interface TileCardProps {
  title: string;
  description: string;
  linkHref: string;
}

const TileCard: React.FC<TileCardProps> = ({ title, description, linkHref }) => (
  <div className="tile-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={linkHref} target="_blank" rel="noreferrer">Go</a>
  </div>
);

export default TileCard;
