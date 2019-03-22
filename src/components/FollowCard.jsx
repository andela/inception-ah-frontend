import React, { Component } from "react";
import { Link } from "react-router-dom";
import kingsley from "<images>/kingsley.jpg";
import "<styles>/custom.scss";
import "<styles>/FollowCard.scss";

class FollowCard extends Component {
  render() {
    return (
      <div className="custom-container">
        <div className="follow-card">
          <div className="follow-card__img">
            <img src={kingsley} alt="" />
          </div>
          <div className="follow-card__content">
            <div className="follow-card__header">
              <Link to="/profile">
                <h3>Kingsley Frank-Demis</h3>
              </Link>
            </div>
            <div className="follow-card_description">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                voluptatem laudantium fugiat.
              </p>
            </div>
            <div className="follow-card__action">
              <span className="follow-card__action_follower">Follower</span>
              <button className="follow-card__action_btn">Follow</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowCard;
