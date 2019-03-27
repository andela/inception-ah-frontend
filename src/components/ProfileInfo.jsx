import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import EditProfileForm from "./EditProfileForm";
import "<styles>/ProfileInfo.scss";
import user from "<images>/user.png";
import Loader from "./common/Loader";
import { updateProfileRequest } from "<profileActions>/profile";
import checkImageFile from "<utils>/checkImageType";

class ProfileInfo extends Component {
  state = {
    open: false,
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    biography: "",
    imageURL: "",
    imageFile: {},
    middleName: "",
    mobileNumber: "",
    isLoading: true
  };

  close = () => this.setState({ open: false });

  show = () => {
    this.setState({ open: true });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filereader = new FileReader();
      checkImageFile(filereader, file, fileType => {
        if (
          fileType === "image/png" ||
          fileType === "image/gif" ||
          fileType === "image/jpeg"
        ) {
          this.setState({ imageFile: file });
          filereader.onload = e => {
            this.setState({ imageURL: e.target.result });
          };
          filereader.readAsDataURL(file);
        } else {
          this.setState({ imageURL: this.props.profile.imageURL });
          toast.error("please provide a valid image file");
        }
      });
    } else {
      this.setState({ imageURL: this.props.profile.imageURL, imageFile: {} });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.close();
    this.setState({ isLoading: true });
    this.props.updateProfileRequest(this.state);
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.profile) {
      const {
        firstName,
        lastName,
        imageURL,
        biography,
        gender,
        mobileNumber,
        middleName,
        id
      } = this.props.profile;

      this.setState({
        firstName,
        lastName,
        mobileNumber: !mobileNumber ? "" : mobileNumber.trim(),
        imageURL,
        biography,
        middleName: middleName || "",
        gender,
        id,
        isLoading: false
      });
    }
  }

  render() {
    if (this.state.isLoading || !this.state.firstName) {
      return <Loader />;
    }

    const { imageURL, firstName, biography, lastName } = this.state;

    return (
      <div className="">
        <div className="custom-container profile-info">
          <div className="profile-info__img">
            <img src={imageURL || user} alt="" />
          </div>
          <div className="profile-info__content">
            <div className="profile-info__header">
              <p>{`${firstName}  ${lastName}`}</p>
            </div>
            <div className="profile-info_description">
              <p>{biography || "No biography provided yet."}</p>
            </div>
            <div className="profile-info__action">
              <EditProfileForm
                className="profile-info__action_btn"
                handleChange={this.handleChange}
                profile={this.state}
                close={this.close}
                show={this.show}
                profileStatus={this.props.profileStatus}
                open={this.state.open}
                submitUpdateProfile={this.handleSubmit}
                handleImageChange={this.handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileInfo.propTypes = {
  profile: PropTypes.object,
  updateProfileRequest: PropTypes.func,
  history: PropTypes.object,
  profileStatus: PropTypes.bool
};
const mapStateToProps = ({ profile }) => ({
  profile: profile.profileData
});

export default connect(
  mapStateToProps,
  { updateProfileRequest }
)(withRouter(ProfileInfo));
