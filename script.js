marked.setOptions({
  breaks: true,
});

const defaultMarkdown = `
# Header 1
## Header 2

### Link

[FreeCodeCamp.org](https://www.freecodecamp.org)

### Code

\`<div class='title'>Hello World</div>\`

### Codeblock
\`\`\`
class App extends React.Component {
  render (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
\`\`\`


### List
- Item 1
- Item 2
- Item 3

### Blockquote

> Markdown previewer

### Text

**bold**

### Images
![Image test](/img/img.png)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultMarkdown,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(() => ({
      text: e.target.value,
    }));
  }

  render() {
    return (
      <div className="container-sm">
        <h1 className="heading text-center">Markdown Previewer</h1>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="title text-primary">Input</h2>
            <textarea
              className="container-fluid view-container"
              id="editor"
              rows="20"
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <h2 className="title text-success">Output</h2>
            <Preview markdown={this.state.text} />
          </div>
        </div>
      </div>
    );
  }
}

function Preview(props) {
  return (
    <div
      className="view-container"
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked.parse(props.markdown) }}
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
