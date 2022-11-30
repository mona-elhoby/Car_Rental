import React from "react";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "snow" };
  }
  
  //add custom dropdown toolbar
  componentDidMount() {
    const placeholderPickerItems = Array.prototype.slice.call(
      document.querySelectorAll(".ql-placeholder .ql-picker-item")
    );
    placeholderPickerItems.forEach(
      (item) => (item.textContent = item.dataset.value)
    );

    document.querySelector(".ql-placeholder .ql-picker-label").innerHTML =
      "Variables";
  }

  render() {
    return (
        <ReactQuill
          theme={this.state.theme}
          onChange={this.props.handleChange}
          value={this.props.editorHtml}
          defaultValue={this.props.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={this.placeholder}
          style={{ height: "300px", marginBottom: "100px", marginTop: "40px" }}
        />
    );
  }
}

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
Editor.modules = {
  toolbar: {
    container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ["clean"],
      [{ placeholder: ["[&_CLIENTNAME]", "[&_VEHICLENAME]"] }], // my custom dropdown
    ],
    handlers: {
      placeholder: function (value) {
        if (value) {
          const cursorPosition = this.quill.getSelection().index;
          this.quill.insertText(cursorPosition, value);
          this.quill.setSelection(cursorPosition + value.length);
        }
      },
    },
  },
};

export default Editor;
