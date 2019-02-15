//Funkcja strzałkowa a renderowanie metody

class App extends React.Component {
  state = {
    text: "",
  }

  //Sposób bez funkcji strzałkowej z obiektem. Musi być zrobiony bind
  // handleClick () {
  //   //Tak nie robimy, gdyż nie wpływa na renderowanie elementu. Działa w konsoli
  //   // this.state.text += "a";
  //   this.setState({
  //     text: this.state.text += "a",
  //   })
  // }

  //Sposób bez funkcji strzałkowej z metodą. Musi być zrobiony bind
  handleClick () {
    //Tak nie robimy, gdyż nie wpływa na renderowanie elementu. Działa w konsoli
    // this.state.text += "a";
    this.setState( () => ({
        text: this.state.text += "a",
    }))
  }

  render(){
    return(
      <>
        <button onClick = {this.handleClick.bind(this)} >Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));