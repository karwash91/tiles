import React from "react";
import TileLibrary from "../components/Tiles/TileLibrary";

const ResourcesPage: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Resources</h1>
      <TileLibrary />
    </div>
  );
};

export default ResourcesPage;
