import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Editor, createEditorState } from "medium-draft";
import ImageButton from "<components>/mediumDraftButton";
import draftExporter from "medium-draft/lib/exporter";
import ArticlePreview from "./ArticlePreview";
import "<styles>/createArticle.scss";
import "<styles>/mediumDraft.scss";
import { request } from "<api>/request";
import NavBar from "<components>/NavBar";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
      editorState: createEditorState(),
      draftHTML: "",
      title: "",
      contentLength: 0,
      draftText: "",
      isArticle: false,
      isTitle: false
    };
    this.refsEditor = React.createRef();
  }

  onEditorStateChange = editorState => {
    this.setState(() => {
      const draftHTML = draftExporter(editorState.getCurrentContent());
      const draftText = draftHTML.replace(/<[^>]*>/gi, " ");
      const contentLength = draftText.length;
      const draftWordCount = draftText.split(/\s+/gi).length;
      const isArticle = draftWordCount > 20 && contentLength > 199;
      return { editorState, draftHTML, contentLength, draftText, isArticle };
    });
  };

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  actionComponent = disablePublish => {
    return (
      <div style={{ textAlign: "right", marginBottom: "13px" }}>
        <button
          className="ui micro button basic orange"
          onClick={this.onPreview}
        >
          Preview
        </button>
        &nbsp; &nbsp; &nbsp;
        <button
          className={`ui micro button basic orange ${disablePublish}`}
          onClick={this.onPublish}
        >
          Publish
        </button>
      </div>
    );
  };

  onPreview = () => {
    this.setState(state => {
      return { preview: true, draftHTML: state.draftHTML };
    });
  };

  onEdit = () => {
    this.setState(() => ({ preview: false }));
  };

  onTitleChange = event => {
    const title = event.target.value;
    const titleWordCount = title.split(/\s+/gi).length;
    const isTitle = titleWordCount > 3 && titleWordCount < 15;
    this.setState(() => {
      return { title, isTitle };
    });
  };

  sideButtons = () => {
    return [
      {
        title: "Upload Image",
        component: ImageButton
      }
    ];
  };

  onPublish = async () => {
    const { title, draftHTML, draftText } = this.state;
    console.log(localStorage.getItem("imageURL"));
    const data = {
      title,
      content: draftHTML,
      description: draftText.substring(0, 20),
      categoryId: "demo category does not work",
      imageURL: localStorage.getItem("imageURL")
    };
    const payload = {
      data,
      url: "/api/v1/articles",
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    const res = await request(payload);
    const { article } = res.data;
    this.props.history.push(`/articles/${article.slug}`);
  };

  validationMessage = (show, message) => {
    if (show) {
      return <div className="ui pointing below red basic label">{message}</div>;
    }
  };

  canPublish = () => {
    const { isArticle, isTitle } = this.state;
    console.log("Article", isArticle, " ", "title", isTitle);
    return isTitle && isArticle;
  };

  render() {
    const { title, draftHTML, editorState, preview } = this.state;
    const disable = this.canPublish() ? "" : "disabled";
    if (preview) {
      return (
        <ArticlePreview
          onPublish={this.onPublish}
          allowPublish={disable}
          onEdit={this.onEdit}
          draft={draftHTML}
          title={title}
        />
      );
    }

    return (
      <Fragment>
        <NavBar />
        <div className="ui text container" style={{ marginTop: "70px" }}>
          {this.actionComponent(disable)}
          <form className="ui form">
            <div className="ui huge input fluid">
              <input
                value={this.state.title}
                className="bold"
                type={"text"}
                placeholder="Title"
                onChange={this.onTitleChange}
              />
            </div>

            <div className="ui segment">
              <Editor
                ref={this.refsEditor}
                editorState={editorState}
                onChange={this.onEditorStateChange}
                sideButtons={this.sideButtons()}
              />
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

Create.propTypes = {
  history: PropTypes.object
};
const createArticle = connect(
  state => {
    return { ...state };
  },
  action => {
    return { action };
  }
)(Create);

export default withRouter(createArticle);
