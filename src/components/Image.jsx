import React from "react";
import { PropTypes } from "prop-types";

const Image = props => {
  return (
    <div className="article-info__img">
      <img
        src={props.src}
        alt={props.alt}
      />
    </div>       
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
