import React, { Fragment } from "react";
import { PropTypes } from "prop-types";

const ArticlePhoto = props => {
  return (
    <Fragment>
      <div className="photo">
        <img src={props.photoURl} alt="" />
      </div>
      <div className="photo-by">Photo: Austin Daniel</div>
    </Fragment>
  );
};

ArticlePhoto.propTypes = {
  photoURl: PropTypes.string
};

export default ArticlePhoto;
