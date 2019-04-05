import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Editor, createEditorState } from "medium-draft";
import ImageButton from "<components>/mediumDraftButton";
import draftExporter from "medium-draft/lib/exporter";
import "<styles>/createArticle.scss";
import "<styles>/mediumDraft.scss";
import { request } from "<api>/request";
import NavBar from "<components>/NavBar";
import { convertToRaw } from "draft-js";
import mediumDraftImporter from "medium-draft/lib/importer";
import ArticlePreview from "./ArticlePreview";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: null,
      preview: false,
      editorState: createEditorState(),
      draftHTML: "",
      title: "",
      contentLength: 0,
      draftText: "",
      isArticle: false,
      isTitle: true,
      message: null,
      slug: null,
      saveTimeout: null,
      token: localStorage.getItem("token"),
    };
    this.refsEditor = React.createRef();
  }

  onEditorStateChange = (editorState) => {
    // clear saving timeout if the user types less than every 20 seconds
    clearTimeout(this.state.saveTimeout);

    this.setState(() => {
      const draftHTML = draftExporter(editorState.getCurrentContent());
      const draftText = draftHTML.replace(/<[^>]*>/gi, " ");
      const contentLength = draftText.length;
      const draftWordCount = draftText.split(/\s+/gi).length;

      const saveTimeout = setTimeout(() => {
        this.onSaveDraft(true);
      }, 10000);
      const isArticle = draftWordCount > 20 && contentLength > 199;
      return { saveTimeout, editorState, draftHTML, contentLength, draftText, isArticle };
    });
  };

  getDraftArticle = async () => {
    const payload = {
      url: "/api/v1/articles/draft",
      method: "GET",
      headers: {
        Authorization: this.state.token,
      }
    };
    try {
      const response = await request(payload);
      if (response.status === 200) {
        const { slug, content, title, imageURL } = response.data.article;
        console.log(imageURL)
        const editorState = createEditorState(convertToRaw(mediumDraftImporter(content)));
        this.setState({ slug, draftHTML: content, title, editorState, imageURL });
      }
    } catch (e) {
      console.log("Cannot get draft Article");
    }
  };

  componentDidMount() {
    this.getDraftArticle();
    this.refsEditor.current.focus();
  }

  onPreview = () => {
    this.setState((state) => {
      return { preview: true, draftHTML: state.draftHTML };
    });
  };

  onEdit = () => {
    this.setState(() => ({ preview: false }));
  };

  onTitleChange = (event) => {
    const title = event.target.value;
    // const titleWordCount = title.split(/\s+/gi).length;
    const isTitle = true; // titleWordCount > 3 && titleWordCount < 15;
    this.setState(() => {
      return { title, isTitle };
    });
  };

  /**
   * when a new Image is uploaded and there was no imageURL set pre to this event,
   * the url will be captured by this function. see
   * @component/mediumDraffButton for implementation
   * set image is attached as static property to the editor file button component
   * */

  setImage = (imageURL) => {
    if (!this.state.imageURL) this.setState({ imageURL });
  };

  sideButtons = () => {
    ImageButton.setImage = this.setImage;
    return [
      {
        title: "Upload Image",
        component: ImageButton
      }
    ];
  };

  onPublish = async () => {
    const { slug, token } = this.state;
    if (!slug) {
      // if after onSaveDraft publish will be called, pass false to avoid
      // displaying the saved Alert
      await this.onSaveDraft.call(this, false);
      slug = this.state.slug;
    }
    const payload = {
      url: `/api/v1/articles/${slug}/publish`,
      method: "PUT",
      headers: {
        Authorization: token,
      }
    };
    try {
      await request(payload);
      this.props.history.push(`/articles/${slug}`);
    } catch (e) {
      this.setState({ message: " could not publish draft" });
    }
  };

  onSaveDraft = async (noAlert) => {
    const { title, draftHTML, token, draftText, slug, imageURL } = this.state;
    const data = {
      title,
      content: draftHTML,
      description: draftText.substring(0, 20),
      categoryId: "demo category does not work",
      imageURL,
      slug
    };
    const payload = {
      data,
      url: slug ? `/api/v1/articles/${slug}` : "/api/v1/articles",
      method: slug ? "PUT" : "POST",
      headers: {
        Authorization: token,
      }
    };
    const res = await request(payload);
    const { article } = await res.data;

    // dont show any message if article will be pulish after save
    if (noAlert) {
      this.setState(() => {
        setTimeout(() => {
          this.setState({ message: null });
        }, 2000);
        const { message } = res.data;
        return { slug: article.slug, message };
      });
    }

    return Promise.resolve(article);
  };

  validationMessage = (show, message) => {
    if (show) {
      return <div className="ui pointing below red basic label">{message}</div>;
    }
  };

  canPublish = () => {
    const { isArticle, isTitle } = this.state;
    return isTitle && isArticle;
  };

  actionComponent = (disablePublish) => {
    const { message } = this.state;
    return (
      <div className="create">
        <div style={{ textAlign: "right", marginBottom: "13px" }}>
          <span className={`ui positive message compact tiny ${message ? "" : "hide"}`}>
            <p>{"saved"}</p>
          </span>
          &emsp;
          <button className="ui micro button basic orange" onClick={this.onSaveDraft}>
            save draft
          </button>
          &emsp;
          <button className="ui micro button basic orange" onClick={this.onPreview}>
            preview
          </button>
          &emsp;
          <button onClick={this.onPublish} className={`ui micro button basic orange ${disablePublish}`}>
            publish
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { title, draftHTML, editorState, preview } = this.state;
    const disable = this.canPublish() ? "" : "disabled";
    if (preview) {
      return (
        <ArticlePreview
          message={this.state.message}
          onSaveDraft={this.onSaveDraft}
          allowPublish={disable}
          onEdit={this.onEdit}
          draft={draftHTML}
          title={title}
          onPublish={this.onPublish}
        />
      );
    }

    return (
      <Fragment>
        <NavBar />
        {/* Add class text to wrap container */}
        <div className="ui container" style={{ marginTop: "70px" }}>
          {this.actionComponent(disable)}
          <form className="ui form">
            <div className="ui huge input fluid">
              <input value={this.state.title} className="bold" type={"text"} placeholder="Title" onChange={this.onTitleChange} />
            </div>
            <div className="ui segment">
              <Editor ref={this.refsEditor} editorState={editorState} onChange={this.onEditorStateChange} sideButtons={this.sideButtons()} />
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
  (state) => {
    return { ...state };
  },
  (action) => {
    return { action };
  }
)(Create);

export default withRouter(createArticle);
