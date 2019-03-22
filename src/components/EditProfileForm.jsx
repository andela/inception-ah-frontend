import React, { Component } from "react";
import { Button, Modal, Form, Image, Input } from "semantic-ui-react";
import lateefat from "<images>/lateefat.jpg";
import "<styles>/custom.scss";
import "<styles>/EditProfileForm.scss";

class EditProfile extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const genderOptions = [
      { key: "m", text: "Male", value: "male" },
        { key: "f", text: "Female", value: "female" },
        { key: "n", text: "No select", value: "noselect" }
    ];
    return (
      <div>
        <Button className="profile-info__action_btn" onClick={this.show}>
          Edit Profile
        </Button>

        <Modal size="small" centered={false} open={open} onClose={this.close}>
          <Modal.Content image>
            <div className="profile-img__upload">
              <Image wrapped circular size="medium" src={lateefat} />
              <Input type="file" className="profile-img__upload_btn" />
            </div>
            <Modal.Description>
              <Form>
                <Form.Input size="mini" placeholder="First name" />
                <Form.Input size="mini" placeholder="Last name" />
                <Form.Input size="mini" placeholder="Middle name" />
                <Form.Input size="mini" placeholder="Phone number" />
                <Form.Select options={genderOptions} placeholder="Gender" />
                <Form.TextArea placeholder="Biography... Tell us a bit about yourself" />
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

export default EditProfile;
