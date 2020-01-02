import React from 'react';

export default function TeamItem({
  name = 'John Smith',
  imgSrc = 'images/azalea/team-a.jpg',
  position = 'Team Member'
}) {
  return (
    <div className="item animated" data-animate="fadeInUp" data-delay="0.3">
      <div className="team team-s2 team-odd">
        <div className="team-photo team-photo-s2">
          <img src={imgSrc} alt={`${name}-profile`} />
        </div>
        <h5 className="team-name title title-md">{name}</h5>
        <span className="team-position">{position}</span>
      </div>
    </div>
  );
}
