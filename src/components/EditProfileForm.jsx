import React, { Component } from "react";
import { Button, Modal, Form, Input } from "semantic-ui-react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import Select from "./common/Select";
import user from "<images>/user.png";
import "<styles>/custom.scss";
import "<styles>/EditProfileForm.scss";

class EditProfile extends Component {
  state = {
    open: false
  };

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
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
      handleChange
    } = this.props;
    const genderOptions = [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "No select", value: "" }
    ];

    return (
      <div>
        <Button className="profile-info__action_btn" onClick={this.show}>
          Edit Profile
        </Button>

        <Modal
          size="small"
          centered={false}
          open={open}
          onClose={this.close}
          closeIcon
        >
          <Modal.Content image>
            <div className="profile-img__upload">
              <img
                className="ui medium circular image"
                src={imageURL || user}
              />
              <Input type="file" className="profile-img__upload_btn" />
            </div>
            <Modal.Description>
              <Form>
                <Form.Input
                  size="mini"
                  placeholder="First name"
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                />
                <Form.Input
                  size="mini"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last name"
                  value={lastName}
                />
                <Form.Input
                  size="mini"
                  name="middleName"
                  onChange={handleChange}
                  placeholder="Middle name"
                  value={middleName}
                />
                <Form.Input
                  size="mini"
                  name="mobileNumber"
                  onChange={handleChange}
                  placeholder="Phone number"
                  value={mobileNumber || ""}
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
                  value={biography || ""}
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
      </div>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object,
  handleChange: PropTypes.func
};

export default EditProfile;
