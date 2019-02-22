//Przy pomocy 2 różnych komponentów
// const Dollars = (props) => (
//   <div>Wartość w dolarach: {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)} </div>
// )

// const Euros = (props) => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return (
//     <div>Wartość w euro: {props.cash <= 0 ? "" : value}</div>
//   )
// }

//Przy pomocy 1 komponentu
const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.2,
  }

  handleChange = (event) => {
    this.setState({
      amount: event.target.value
    });
  }
  render() { 
    const{amount,ratioDollar, ratioEuro} = this.state;
    return ( 
      <div className="app">
        <label>
          <input type="number" value = {amount} onChange = {this.handleChange}/>
        </label>
        {/* <Dollars cash = {amount} ratio = {ratioDollar}/> */}
        {/* <Euros cash = {amount} ratio = {ratioEuro}/> */}
        <Cash cash={amount} ratio = {ratioDollar} title = "Wartość w Dolarach"/>
        <Cash cash={amount} ratio = {ratioEuro} title = "Wartość w Euro"/>
      </div>
     );
  }
}
 
ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"));