class App extends React.Component {
  state = {
    value: "",
  }

  //Albo bind albo funkcja strzałkowa
  handleInputChange(e) {
    console.log("Zawartość w eencie: " + e.target.value);
    console.log("Zawartość value przed setState: " + this.state.value);
    this.setState({
      value: e.target.value,
    })
    console.log("Zawartość value PO setState: " + this.state.value);
  }

  handleResetClick = () => {
    this.setState({
      value: "",
    })
  }

  //Poprawna wartość w inpucie pojawia się dopiero w metodzie render
  render() {
    console.log("Zawartość value w trakcie render: " + this.state.value);
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