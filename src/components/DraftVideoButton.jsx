import React from "react";
// import PropTypes from "prop-types";
// import { Block, addNewBlock } from "medium-draft";
import { request } from "<api>/request";
import DraftImageButton from "./DraftImageButton";

class ImageButton extends DraftImageButton {

  onChange = async (e) => {
    const imageFile = e.target.files[0];
    const formdata = new FormData();
    formdata.append("file", imageFile);
    formdata.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);
    const payLoad = {
      url: process.env.CLOUDINARY_API_URL,
      method: "POST",
      data: formdata
    };
    const res = await request(payLoad, false);
    const src = res.data.secure_url;
    const appendImage = addNewBlock(this.props.getEditorState(),
      Block.IMAGE, { src });

    this.props.setEditorState(appendImage);
    this.props.close();
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.onClick}
        className="ui icon button basic"
        title="Add image"
      >
        <i className="video large icon"></i>

        <input
          ref={(c) => { this.input = c; }}
          onChange={this.onChange}
          type="file"
          accept="video/*"
          style={{ display: "none" }}
        />
      </button>
    );
  }
}

export default ImageButton;
