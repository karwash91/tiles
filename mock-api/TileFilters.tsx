import React from "react";

interface FilterProps {
  platform: string;
  track: string;
  type: string;
  onChange: (key: string, value: string) => void;
}

const platforms = ["", "ServiceNow", "Confluence", "SharePoint", "PolicyTech", "Developer Portal", "Tableau", "Kali", "TLX"];
const tracks = ["", "developer", "new_user", "project_manager"];
const types = ["", "documentation", "service"];

const TileFilters: React.FC<FilterProps> = ({ platform, track, type, onChange }) => (
  <div className="filters">
    <select value={platform} onChange={e => onChange("platform", e.target.value)}>
      {platforms.map(p => <option key={p} value={p}>{p || "All Platforms"}</option>)}
    </select>
    <select value={track} onChange={e => onChange("track", e.target.value)}>
      {tracks.map(t => <option key={t} value={t}>{t || "All Tracks"}</option>)}
    </select>
    <select value={type} onChange={e => onChange("type", e.target.value)}>
      {types.map(tp => <option key={tp} value={tp}>{tp || "All Types"}</option>)}
    </select>
  </div>
);

export default TileFilters;
