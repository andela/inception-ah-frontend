import React, { Component } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Loader from "<common>/Loader";
import image from "../assets/images/politics.jpg";
import "<styles>/ProfileArticleCard.scss";

class ProfileArticleCard extends Component {
  render() {
    if (!this.props.article) {
      return <Loader />;
    }
    const {
      title,
      description,
      createdAt,
      readTime,
      commentCounts,
      numberOfLikes,
      numberOfReads,
      imageURL,
    } = this.props.article;

    return (
      <div className=" ui card">
        <div className="image">
          <img src={imageURL || image} alt="" />
        </div>
        <div className="content">
          <p className="header">{title}</p>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="meta left floated">
            <span className="date">{`${format(
              createdAt,
              "MMM D, YYYY"
            )}. ${readTime} min`}</span>
          </div>
          <div className="meta right floated black-icon">
            <span>
              <i className="eye icon" />
              {numberOfReads}
            </span>
            <span>
              <i className="heart outline icon" />
              {numberOfLikes}
            </span>
            <span>
              <i className="comment icon" />
              {commentCounts}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ProfileArticleCard.propTypes = {
  article: PropTypes.object
};
export default ProfileArticleCard;
