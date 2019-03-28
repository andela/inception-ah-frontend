import React, { Component } from "react";
import {format} from "date-fns";
import Loader from "<common>/Loader";
import image from "../assets/images/imA.png";
import "<styles>/ProfileArticleCard.scss";

class ProfileArticleCard extends Component {
  render() {
    if (!this.props.article) {
      return <Loader />;
    }
    console.log(">>>>", this.props);
    const {
      title,
      description,
      createdAt,
      readTime,
      numberOfDislikes,
      numberOfLikes,
      numberOfReads
    } = this.props.article;
  
    return (
      <div className=" ui card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <a className="header">{title}</a>
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
              <i className="comment icon" />0
            </span>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = ({ profile }) => ({
//   userArticles: profile.profileData.author
// });

export default ProfileArticleCard;
