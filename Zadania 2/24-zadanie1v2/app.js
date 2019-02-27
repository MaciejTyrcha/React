class App extends React.Component {
  state = {  
    options: ["1", "2", "3"],
    option: null,
    value: "",
  }

  handleShowOption = () => {
    const number = Math.floor(Math.random() * this.state.options.length)
    this.setState({
      option: this.state.options[number]
    });
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  // handleAddOption = () => {
  //   if ( this.state.value === "") return alert("Wpisz cokolwiek");
  //   //Kopiujemy nową tablicę
  //   const options = [...this.state.options];
  //   options.push(this.state.value);
  //   this.setState({
  //     options: options,
  //     value: ""
  //   });
  //   alert(`Wróżba dodana. Aktualne wróżby ${options}`);
  // }

  handleAddOption = () => {
    if ( this.state.value === "") return alert("Wpisz cokolwiek");
    const options = this.state.options.concat(this.state.value);
    this.setState({
      options: options,
      value: ""
    });
    alert(`Wróżba dodana. Aktualne wróżby ${options}`);
  }

  render() { 
    return ( 
      <>
        <button onClick = {this.handleShowOption}>Zobacz wróżbę</button>
        <br/>
        <input type="text" value = {this.state.value} onChange = {this.handleInputChange}/>
        <button onClick = {this.handleAddOption}>Dodaj wróżbę</button>
        {this.state.option ? <h1>{this.state.option}</h1> : ""}
      </>
     );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))
 