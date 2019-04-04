import React, { Component, Fragment } from "react";
import { Button, Modal, Form, Input } from "semantic-ui-react";
import PropTypes from "prop-types";
import Select from "./common/Select";
import user from "<images>/user.png";
import "<styles>/custom.scss";
import "<styles>/EditProfileForm.scss";

class EditProfile extends Component {
  render() {
    const {
      profile: {
        firstName,
        lastName,
        gender,
        middleName,
        mobileNumber,
        biography,
        imageURL
      },
      handleChange,
      followUser,
      submitUpdateProfile,
      handleImageChange,
      status
    } = this.props;
    const genderOptions = [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "No select", value: "" }
    ];

    const FollowButton = () => (
      <Button className="profile-info__action_btn" onClick={followUser}>
        {status ? "Unfollow" : "Follow"}
      </Button>
    );

    return (
      <div>
        {!this.props.profileStatus ? (
          <FollowButton status="follow" />
        ) : (
          <Fragment>
            <Button
              className="profile-info__action_btn"
              onClick={this.props.show}
            >
              Edit Profile
            </Button>

            <Modal
              size="small"
              centered={false}
              open={this.props.open}
              onClose={this.props.close}
              closeIcon
            >
              <Modal.Content image>
                <div className="profile-img__upload">
                  <img
                    className="ui medium circular image"
                    src={imageURL || user}
                  />
                  <Input
                    type="file"
                    className="profile-img__upload_btn"
                    onChange={handleImageChange}
                  />
                </div>
                <Modal.Description>
                  <Form onSubmit={submitUpdateProfile}>
                    <Form.Input
                      size="mini"
                      placeholder="First name"
                      name="firstName"
                      onChange={handleChange}
                      value={firstName}
                      required
                    />
                    <Form.Input
                      size="mini"
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Last name"
                      value={lastName}
                      required
                    />
                    <Form.Input
                      size="mini"
                      name="middleName"
                      onChange={handleChange}
                      placeholder="Middle name"
                      value={middleName || ""}
                    />
                    <Form.Input
                      size="mini"
                      name="mobileNumber"
                      onChange={handleChange}
                      placeholder="Phone Number"
                      value={mobileNumber}
                    />
                    <Select
                      placeholder="Gender"
                      name="gender"
                      value={gender}
                      handleChange={handleChange}
                      options={genderOptions}
                    />
                    <Form.TextArea
                      placeholder="Biography... Tell us a bit about yourself"
                      value={biography}
                      name="biography"
                      onChange={handleChange}
                    />
                    <Button
                      className="profile-info__submit-btn"
                      fluid
                      type="submit"
                    >
                      Save changes
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Fragment>
        )}
      </div>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object,
  handleChange: PropTypes.func,
  submitUpdateProfile: PropTypes.func,
  handleImageChange: PropTypes.func,
  close: PropTypes.func,
  open: PropTypes.bool,
  profileStatus: PropTypes.bool,
  show: PropTypes.func
};

export default EditProfile;
