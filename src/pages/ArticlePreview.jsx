import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavBar from "<components>/NavBar";

class ArticlePreview extends React.Component {
  componentDidMount() {
    document.querySelector(".preview").innerHTML = this.props.draft;
  }

  static propTypes = {
    allowPublish: PropTypes.string,
    onEdit: PropTypes.func,
    onPublish: PropTypes.func,
    title: PropTypes.string,
    draft: PropTypes.string,
  }

  render() {
    const { allowPublish } = this.props;
    return (
      <Fragment>
        <NavBar />
        <div className="ui text container" style={{ marginTop: "70px" }}>
          <div style={{ textAlign: "right", marginBottom: "13px" }}>
            <button
              onClick={this.props.onEdit}
              className="ui micro button basic orange">
              Edit
          </button>

            &nbsp; &nbsp; &nbsp;
          <button
              className={`ui micro button basic orange ${allowPublish}`}
              onClick={this.props.onPublish} >
              Publish
          </button>

          </div>

          <div className="ui text large segment">
            <div className="ui header huge"> {this.props.title} </div>
            <div className="ui text aligned centered content preview"> </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ArticlePreview;
