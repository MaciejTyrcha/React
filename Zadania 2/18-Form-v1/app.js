class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLoved: true,
    number: "2",
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  handleIsLovedChanged = (event) => {
    this.setState({
      isLoved: event.target.checked,
    })
  }

  handleVisitsNumberChange(event) {
    this.setState({
      number: event.target.value,
    });

  }

  render() {
    return (
      <div>
        <label>
          Podaj miasto 
          <input value = {this.state.city} onChange = {this.handleCityChange} type="text"/>
        </label>
        <br/>
        <label>
          Napisz coś o tym mieście
          <textarea value = {this.state.text} onChange = {this.handleTextChange}>
          </textarea>
        </label>
        <br/>
        <label>
          Czy lubisz to miasto? 
          <input type="checkbox" checked = {this.state.isLoved} onChange = {this.handleIsLovedChanged}/>
        </label>
        <br/>
        <label>
          Ile razy byliście w tym mieście
          <select value = {this.state.number} onChange = {this.handleVisitsNumberChange.bind(this)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="more">Więcej</option>
          </select>
        </label>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'))
