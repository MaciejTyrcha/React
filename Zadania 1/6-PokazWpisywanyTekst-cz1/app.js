class App extends React.Component {
  state = {
    value: "",
  }

  //Albo bind albo funkcja strzałkowa
  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  handleResetClick = () => {
    this.setState({
      value: "",
    })
  }

  render() {
    return (
      <>
      {/* w inputach powinniśmy używać value */}
        <input value = {this.state.value} onChange = {this.handleInputChange.bind(this)} type="text" placeholder = "wpisz"/>
        <button onClick = {this.handleResetClick}>Reset</button>
        <h1 className = "title">{this.state.value.toUpperCase()}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));