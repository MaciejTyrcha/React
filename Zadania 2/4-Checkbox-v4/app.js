const ValidationMessage = (props) => {
  //Destrukturyzacja. Tu jest bezsensu przykład
  const {txt} = props;
  return (
    <p>{txt}</p>
  )
}

const OrderForm = (props) => {
  const {submit, change, checked} = props;
  return(
    <form onSubmit = {submit}>
      <input type="checkbox" id="age" onChange = {change} checked = {checked}/>
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  )
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

  displayMessage = () => {
    if(this.state.isFormValidated) {
      if(this.state.isConfirmed){
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

  handleFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.isFormValidated) {
      this.setState({
        isFormValidated: true,
      })
    }
  }

  render() {
    const {isConfirmed} = this.state;

    return(
      <>
        <h1>Kup bilet na horror roku</h1>
        <OrderForm 
          change = {this.handleCheckBoxChange} 
          submit = {this.handleFormSubmit} 
          checked = {isConfirmed}/>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop/>, document.getElementById("root"));