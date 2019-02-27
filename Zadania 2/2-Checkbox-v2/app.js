const PositiveMessage = () => 
<p>Możesz obejrzeć film. Zapraszamy!</p>

const NegativeMessage = () => 
  <p>Nie możesz obejrzeć filmu. Masz mniej niż 16 lat!</p>

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false,
  }
  handleCheckBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmited: false,
    })
  }

  displayMessage = () => {
    if(this.state.isFormSubmited) {
      if(this.state.isConfirmed){
        return <PositiveMessage/>
      }
      else {
        return <NegativeMessage/>
      }
    }
    else return null
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if(!this.state.isFormSubmited) {
      this.setState({
        isFormSubmited: !this.state.isFormSubmited
      });
    }
  }
  render() {
    return(
      // htmlFor oznacza opis do którego elemntu się to odnosi
      <>
        <h1>Kup bilet na horror roku</h1>
        <form onSubmit = {this.handleFormSubmit}>
          <input type="checkbox" id="age" onChange = {this.handleCheckBoxChange} checked = {this.state.isConfirmed}/>
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br/>
          <button type = "submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"));