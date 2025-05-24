import React, { useEffect, useState } from "react";
import TileCard from "./TileCard";
import TileFilters from "./TileFilters";

interface Tile {
  id: string;
  title: string;
  description: string;
  linkHref: string;
  platform: string;
  track: string;
  type: string;
}

const TileLibrary: React.FC = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [filters, setFilters] = useState({ platform: "", track: "", type: "" });

  useEffect(() => {
    fetch("http://localhost:4000/tiles")
      .then(res => res.json())
      .then(data => setTiles(data));
  }, []);

  const filteredTiles = tiles.filter(tile =>
    (filters.platform ? tile.platform === filters.platform : true) &&
    (filters.track ? tile.track === filters.track : true) &&
    (filters.type ? tile.type === filters.type : true)
  );

  return (
    <>
      <TileFilters
        platform={filters.platform}
        track={filters.track}
        type={filters.type}
        onChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
      />
      <div className="tile-grid">
        {filteredTiles.map(tile => (
          <TileCard key={tile.id} {...tile} />
        ))}
      </div>
    </>
  );
};

export default TileLibrary;
