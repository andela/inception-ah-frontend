import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Image from "../assets/images/homepage.jpg";
import "../assets/styles/HomePageIntro.scss";
import Button from "<components>/CommentButton";

class HomePageIntro extends Component {
  handleClick = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <Fragment>
        <div className="intro-container">
          <div className="intro-container__border-bottom">
            <div className="intro-container__text-section">
              <h1>Welcome to Authors Haven</h1>
              <p>
                The best place to share your innovations and inspirations. Sign
                up for free to start sharing your story.
              </p>
              <Button
                style="signin-button"
                text="Get started"
                handleClick={this.handleClick}
              />
            </div>
            <div className="intro-container__image-section">
              <img src={Image} alt=""/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

HomePageIntro.propTypes = {
  history: PropTypes.object
};

export default withRouter(HomePageIntro);
