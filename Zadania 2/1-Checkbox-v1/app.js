const PositiveMessage = () => 
<p>Możesz obejrzeć film. Zapraszamy!</p>


const NegativeMessage = () => 
  <p>Nie możesz obejrzeć filmu. Masz mniej niż 16 lat!</p>


class CheckBoxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  }
  handleCheckBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    })
  }

  displayMessage = () => {
    if(this.state.isConfirmed){
      return <PositiveMessage/>
    }
    else {
      return <NegativeMessage/>
    }
  }
  render() {
    return(
      // htmlFor oznacza opis do którego elemntu się to odnosi
      <>
        <h1>Kup bilet na horror roku</h1>
        <input type="checkbox" id="age" onChange = {this.handleCheckBoxChange} checked = {this.state.isConfirmed}/>
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckBoxAgeConfirmation/>, document.getElementById("root"));

