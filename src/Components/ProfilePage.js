import React from "react";

const ProfilePage = () => {
  return (
    <div class="card">
      <div class="cover-photo">
        <img src="https://i.imgur.com/KykRUCV.jpeg" class="profile" />
      </div>
      <h3 class="profile-name">James Carson</h3>
      <p class="about"></p>
      <div class="icons">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default ProfilePage;
