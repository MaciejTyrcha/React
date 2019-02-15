class App extends React.Component {
  //W state dajemy wartości tylko takie, które się będą zmieniać
  state = {
    text: "",
  }

  handleClick = () => {
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + number,
    })
  }

  render(){
    return(
      <>
      {/* W klasie odnosimy się przez this dlatego jest this.props.btnTitle */}
        <button onClick = {this.handleClick} >{this.props.btnTitle}</button>
        <PanelResult name = {this.state.text}/>
      </>
    )
  }
}

const PanelResult = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

ReactDOM.render(<App btnTitle = "Dodaj cyfrę"/>, document.getElementById("root"));