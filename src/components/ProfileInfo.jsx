import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EditProfileForm from "./EditProfileForm";
import "<styles>/ProfileInfo.scss";
import user from "<images>/user.png";
import Loader from "./common/Loader";

class ProfileInfo extends Component {
  state = {
    open: false,
    firstName: "",
    lastName: "",
    gender: "",
    biography: "",
    imageURL: "",
    middleName: "",
    mobileNumber: "",
    isLoading: true
  };

  handleChange = e => {
    console.log(e.target.name, "<======>", e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  close = () => this.setState({ open: false });

  show = () => {
    this.setState({ open: true });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.profile) {
      const {
        firstName,
        lastName,
        imageURL,
        biography,
        gender,
        mobileNumber
      } = this.props.profile;
      this.setState({
        firstName,
        lastName,
        mobileNumber,
        imageURL,
        biography,
        gender,
        isLoading: false
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loader/>;
    }

    const { imageURL, firstName, biography, lastName } = this.props.profile;

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
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileInfo.propTypes = {
  profile: PropTypes.object
};
const mapStateToProps = store => ({
  profile: store.profile.profileData
});

ProfileInfo.propTypes = {
  profile: PropTypes.object
};

export default connect(
  mapStateToProps,
  null
)(ProfileInfo);
