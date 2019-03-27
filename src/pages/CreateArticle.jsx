import React from "react";
import { Editor, createEditorState } from "medium-draft";
import ImageButton from "<components>/mediumDraftButton";
import draftExporter from "medium-draft/lib/exporter";
import ArticlePreview from "./ArticlePreview";
import "<styles>/createArticle.scss";
import "<styles>/mediumDraft.scss";
import request from "<api>/request";

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
      editorState: createEditorState(),
      draftHTML: "",
      title: "",
      contentLength: 0,
    };
    this.refsEditor = React.createRef();
  }

  onEditorStateChange = (editorState) => {
    this.setState(() => {
      const draftHTML = draftExporter(editorState.getCurrentContent());
      const contentLength = draftHTML.replace(/<[^>]*>/ig, " ").length;
      return { editorState, draftHTML, contentLength };
    });
  }

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  actionComponent = (disablePublish) => {
    return (
      <div style={{ textAlign: "right", marginBottom: "13px" }}>
        <button
          className="ui micro button basic orange"
          onClick={this.onPreview}>
          Preview
        </button>
        &nbsp; &nbsp; &nbsp;
        <button
          className={`ui micro button basic orange ${disablePublish}`}
          onClick={this.onPublish} >
          Publish
        </button>
      </div>);
  }

  onPreview = () => {
    this.setState((state) => {
      return { preview: true, draftHTML: state.draftHTML };
    });
  };

  onEdit = () => {
    this.setState(() => ({ preview: false }));
  }

  onTitleChange = (event) => {
    const title = event.target.value;
    this.setState(() => ({ title }));
  }

  sideButtons = () => {
    return [{
      title: "Upload Image",
      component: ImageButton,
    }];
  }

  onPublish = async () => {
    const { title, draftHTML } = this.state;
    const body = {
      title,
      content: draftHTML,
    };
    const res = await request("/api/v1/articles", "POST", body);
    console.log(this.state.draftHTML, res);
  };

  canPublish = () => {
    const { title, contentLength } = this.state;
    return (title.length > 10 && contentLength > 50);
  }

  render() {
    const {
      title, draftHTML, editorState, preview,
    } = this.state;
    const disable = (this.canPublish()) ? "" : "disabled";
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
      <div className="ui container" style={{ marginTop: "25px" }}>
        {this.actionComponent(disable)}
        <form className="ui form">
          <div className="ui huge input fluid" >
            <input value={this.state.title}
              className="bold"
              type={"text"}
              placeholder="Title"
              onChange={this.onTitleChange}
            />
          </div>
          <Editor
            ref={this.refsEditor}
            editorState={editorState}
            onChange={this.onEditorStateChange}
            sideButtons={this.sideButtons()}
          />
        </form>
      </div>
    );
  }
}

export default CreateArticle;
