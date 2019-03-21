import React from "react";
import EditProfileForm from "./EditProfileForm";
import "<styles>/ProfileInfo.scss";
import lateefat from "<images>/lateefat.jpg";

const ProfileInfo = () => (
  <div className="">
    <div className="custom-container profile-info">
      <div className="profile-info__img">
        <img src={lateefat} alt="" />
      </div>
      <div className="profile-info__content">
        <div className="profile-info__header">
          <p>Lateefat Amuda</p>
        </div>
        <div className="profile-info_description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            voluptatem laudantium perspiciatis fugiat. Lorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
        <div className="profile-info__action">
          <EditProfileForm className="profile-info__action_btn" />
        </div>
      </div>
    </div>
  </div>
);

export default ProfileInfo;
