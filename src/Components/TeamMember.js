import React from 'react';
import './TeamMember.css';

const TeamMember = ({ img, name, role, bio }) => {
  return (
    <div className="team-member-card">
      <div className="member-image-container">
        <img src={img} alt={name} className="member-image" />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;