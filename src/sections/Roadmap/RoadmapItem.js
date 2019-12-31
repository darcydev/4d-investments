import React from 'react';

export default function RoadmapItem({ date, title, desc }) {
  return (
    <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
      <h6 className="roadmap-year-s2">{date}</h6>
      <h5 className="title title-sm roadmap-date">{title}</h5>
      <div className="roadmap-text">
        <p>{desc}</p>
      </div>
    </div>
  );
}
