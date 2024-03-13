import React from "react";

const ProfilePage = () => {
  return (
    <div className="card">
      <div className="cover-photo">
        <img src="https://i.imgur.com/KykRUCV.jpeg" className="profile" />
      </div>
      <h3 className="profile-name">James Carson</h3>
      <p className="about"></p>
      <div className="icons">
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default ProfilePage;
