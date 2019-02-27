const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
  }

  currencies = [
    {
      id: 1,
      ratio: 3.6,
      title: "Wartość w dolarach: ", 
    },
    {
      id: 2,
      ratio: 4.2,
      title: "Wartość w euro: ", 
    },
    {
      id: 3,
      ratio: 4.55,
      title: "Wartość w funtach: ", 
    },
  ]

  handleChange = (event) => {
    this.setState({
      amount: event.target.value
    });
  }
  render() { 
    const{amount} = this.state;
    const calculators = this.currencies.map(currency => (
      <Cash key = {currency.id} ratio = {currency.ratio} title = {currency.title} cash = {amount}/>
    ));
    return ( 
      <div className="app">
        <label>
          <input type="number" value = {amount} onChange = {this.handleChange}/>
        </label>
        {calculators}

      </div>
     );
  }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"));