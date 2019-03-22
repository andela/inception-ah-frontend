import React, { Component } from "react";
import queryString from "querystring";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { setToken } from "<utils>/authenticate";

class SocialRedirect extends Component {
  componentDidMount() {
    const {
      location: { search }
    } = this.props;
    const parsed = queryString.parse(search);
    const token = parsed["?token"];
    if (token) {
      setToken(token).then(() => {
        this.props.history.push("/profile");
        toast.success("You are successfully logged in");
      });
    }
    if (parsed.error) {
      this.props.history.push("/login");
      toast.error(parsed.error);
    }
  }

  render() {
    return <h1>Verifying your account .... </h1>;
  }
}

SocialRedirect.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default SocialRedirect;
