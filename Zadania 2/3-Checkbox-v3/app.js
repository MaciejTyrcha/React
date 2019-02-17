const ValidationMessage = (props) => {
  //Destrukturyzacja. Tu jest bezsensu przykład
  const {txt} = props;
  return (
    <p>{txt}</p>
  )
}

//Funkcja poza komponentem
const displayMessage = (isConfirmed, isFormValidated) => {
  if(isFormValidated) {
    if(isConfirmed){
      return <ValidationMessage txt = "Możesz obejrzeć film. Zapraszamy!" />
    }
    else {
      return <ValidationMessage txt = "Nie możesz obejrzeć filmu. Masz mniej niż 16 lat!" />
    }
  }
  else {
    return null;
  }
}

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormValidated: false,
  }
  handleCheckBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormValidated: false,
    })
  }

  // displayMessage = () => {
  //   if(this.state.isFormValidated) {
  //     if(this.state.isConfirmed){
  //       return <ValidationMessage txt = "Możesz obejrzeć film. Zapraszamy!" />
  //     }
  //     else {
  //       return <ValidationMessage txt = "Nie możesz obejrzeć filmu. Masz mniej niż 16 lat!" />
  //     }
  //   }
  //   else {
  //     return null;
  //   }
  // }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.isFormValidated) {
      this.setState({
        isFormValidated: true,
      })
    }
  }

  render() {
    //Destrukturyzacja. Tworzę zmienną, i potem mogę się skrótowo do niej odnieść
    const {isConfirmed, isFormValidated} = this.state;

    return(
      <>
        <h1>Kup bilet na horror roku</h1>
        <form onSubmit = {this.handleFormSubmit}>
          <input type="checkbox" id="age" onChange = {this.handleCheckBoxChange} checked = {isConfirmed}/>
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormValidated)}
      </>
    )
  }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"));