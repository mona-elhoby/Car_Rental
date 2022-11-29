import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
    constructor (props) {
      super(props)
      this.state = { editorHtml: "<h1 class='ql-indent-8'>fghfgjhjjjhjhj</h1><p class='ql-indent-8'><s>fkjdfkgllfgjkdfdkglkl</s></p><p class='ql-indent-8'><u>fgldklkdfjdlkgldfjkjdljdkl</u></p><p class='ql-indent-8'><em>c,vmbcndkjsjewiauhrfwaer</em></p><p class='ql-indent-8'><span class='ql-size-small'>ajdkBNQJ2EK UIEJKQqjnsmfkfd</span></p><p class='ql-indent-8'><br></p>", theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange (html) {
        this.setState({ editorHtml: html });
      console.log("this.state.editorHtml: ", this.state.editorHtml)
    }
    
    handleThemeChange (newTheme) {
      if (newTheme === "core") newTheme = null;
      this.setState({ theme: newTheme })
    }
   
    render () {
      return (
        <div>
          <button id="custom-button">btn1</button>
          <button>btn2</button>
          <button>btn3</button>
          <button>btn4</button>
          <button>btn5</button>
          <button>btn6</button>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />
          <div className="themeSwitcher">
            <label>Theme </label>
            <select onChange={(e) => 
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div>
         </div>
       )
    }
  }
  
 
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
      const quill = new Quill('#editor', {
          theme: 'snow',
          modules: {
              toolbar: {
                  container: [
                      ['bold', 'italic', 'underline', 'strike'],
                      ['blockquote', 'code-block'],
  
                      [{ 'header': 1 }, { 'header': 2 }],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                      [{ 'script': 'sub' }, { 'script': 'super' }],
                      [{ 'indent': '-1' }, { 'indent': '+1' }],
                      [{ 'direction': 'rtl' }],
  
                      [{ 'size': ['small', false, 'large', 'huge'] }],
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
                      [{ 'color': [] }, { 'background': [] }],
                      [{ 'font': [] }],
                      [{ 'align': [] }],
                      ['clean'],
                  ]
              }
          }
      })
  
      // Add a custom Button to the Quill Editor's toolbar:
      const dropDownItems = {
      'Mike Smith': 'mike.smith@gmail.com',
      'Jonathan Dyke': 'jonathan.dyke@yahoo.com',
      'Max Anderson': 'max.anderson@gmail.com'
  }
  
  const myDropDown = new QuillToolbarDropDown({
      label: "Email Addresses",
      rememberSelection: false
  })
  
  myDropDown.setItems(dropDownItems)
  
  myDropDown.onSelect = function(label, value, quill) {
      // Do whatever you want with the new dropdown selection here
  
      // For example, insert the value of the dropdown selection:
      const { index, length } = quill.selection.savedRange
      quill.deleteText(index, length)
      quill.insertText(index, value)
      quill.setSelection(index + value.length)
  }
  
  myDropDown.attach(quill)
 