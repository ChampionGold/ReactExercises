import React from 'react';

function Card (profile){
  return(
    <div className="row github-profile-card">
      
      {/* Pic */}
      <div className="col-md-4 github-profile-pic">
        <img className="github-profile-pic" alt={profile.name} src={profile.avatar_url} />
      </div>
      
      {/* Data */}
      <div className="col-md-4 github-profile-data">
          <div className="github-profile-name">{profile.name}</div>
          <div className="github-profile-company">{profile.company}</div>
      </div>

    </div>
  );
}

export default Card;
