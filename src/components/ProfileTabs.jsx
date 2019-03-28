import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import FollowCard from "./FollowCard";
import NoArticles from "./common/NoArticles";
import NoFollower from "./common/NoFollower";
import NoFollowing from "./common/NoFollowing";
import ProfileArticleCard from "../components/ProfileArticleCard";
import "<styles>/custom.scss";
import "<styles>/ProfileTabs.scss";

const panes = (userArticles, userFollowers, userFollowing) => [
  {
    menuItem: `Articles (${userArticles.length})`,
    render: () => (
      <Tab.Pane attached={false}>
        {userArticles.length ? (
          <div className="custom-container">
            <div className="profile-articles">
              {userArticles.map(article => (
                <Link key={article.id} to="/artices">
                  <ProfileArticleCard article={article} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <NoArticles />
        )}
      </Tab.Pane>
    )
  },
  {
    menuItem: `Following (${userFollowing.length})`,
    render: () => (
      <Tab.Pane attached={false}>
        {userFollowing.length ? (
          userFollowing.map(article => (
            <FollowCard key={article.id} article={article} />
          ))
        ) : (
          <NoFollowing />
        )}
      </Tab.Pane>
    )
  },
  {
    menuItem: `Followers (${userFollowers.length})`,
    render: () => (
      <Tab.Pane attached={false}>
        {userFollowers.length ? (
          userFollowers.map(article => (
            <FollowCard key={article.id} article={article} />
          ))
        ) : (
          <NoFollower />
        )}
      </Tab.Pane>
    )
  }
];

class ProfileTab extends Component {
  state = {
    userArticles: [],
    followers: [],
    following: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.userArticles) {
        this.setState({ userArticles: this.props.userArticles });
      }
      if (this.props.followers) {
        this.setState({ followers: this.props.followers });
      }
      if (this.props.following) {
        this.setState({ following: this.props.following });
      }
    }
  }

  render() {
    const { userArticles, followers, following } = this.state;

    return (
      <div className="profile-tab">
        <Tab
          menu={{ text: true }}
          panes={panes(userArticles, followers, following)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  userArticles: profile.profileData.author,
  followers: profile.profileData.followers,
  following: profile.profileData.following
});

ProfileTab.propTypes = {
  userArticles: PropTypes.array,
  followers: PropTypes.array,
  following: PropTypes.array
};

export default connect(
  mapStateToProps,
  null
)(ProfileTab);
