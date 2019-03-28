import React from "react";
import PropTypes from "prop-types";
import { Block, addNewBlock } from "medium-draft";
import { request } from "<api>/request";

class ImageButton extends React.Component {
  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  }

  onClick = () => {
    this.input.value = null;
    this.input.click();
  }

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
    const appendImage = addNewBlock(this.props.getEditorState(),
      Block.IMAGE, { src: res.data.secure_url });
      
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
        <i className="camera large icon"></i>

        <input
          ref={(c) => { this.input = c; }}
          onChange={this.onChange}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
      </button>
    );
  }
}

export default ImageButton;
