class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }


  render() {
    console.log(this.state.messageIsActive);

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi sunt vero sint, vitae culpa expedita? Officiis, nihil, quaerat architecto totam mollitia voluptatem illum vel officia voluptates accusamus similique deserunt.";
    return (
      <>
        <button onClick = {this.handleClick}>{this.state.messageIsActive ? "Ukryj" : "Pokaż"}</button>
        <p>{this.state.messageIsActive ? text : ""}</p>
        {/* albo tak */}
        <p>{this.state.messageIsActive && text}</p>
        {/* albo tak */}
        {this.state.messageIsActive ? <p>{text}</p> : null}
      </>
    )
  }
}

ReactDOM.render(<Message/>, document.getElementById("root"));