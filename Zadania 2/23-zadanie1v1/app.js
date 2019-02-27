class App extends React.Component {
  state = {  
    options: ["1", "2", "3"],
    option: null,
    newOmen: "",
  }

  handleShowOption = () => {
    const number = Math.floor(Math.random() * this.state.options.length)
    this.setState({
      option: this.state.options[number]
    });
  }

  render() { 
    return ( 
      <>
        <button onClick = {this.handleShowOption}>Zobacz wróżbę</button>
        <br/>
        {this.state.option ? <h1>{this.state.option}</h1> : ""}
      </>
     );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))
 

