import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import FollowCard from "./FollowCard";
import NoArticles from "./common/NoArticles";
// import NoFollower from "./common/NoFollower";
import NoFollowing from "./common/NoFollowing";
import "<styles>/custom.scss";

const panes = [
  {
    menuItem: "Posts (0)",
    render: () => (
      <Tab.Pane attached={false}>
        <NoArticles />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Following (0)",
      render: () => <Tab.Pane attached={false}>
      <NoFollowing />
      </Tab.Pane>
  },
  {
    menuItem: "Followers (1)",
    render: () => (
      <Tab.Pane attached={false}>
        <FollowCard />
      </Tab.Pane>
    )
  }
];

class ProfileTab extends Component {
  render() {
    return (
      <div className="profile-tab">
        <Tab menu={{ text: true }} panes={panes} />
      </div>
    );
  }
}

export default ProfileTab;
