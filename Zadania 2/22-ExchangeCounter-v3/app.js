const Cash = (props) => {
  const value = (props.cash / props.ratio * props.price).toFixed(2);
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity",
  }
  static defaultProps = {
    currencies: [
      {
        id: 0,
        ratio: 1,
        title: "Wartość w złotówkach: ", 
      },
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
    ],
    prices: {
      electricity: 0.51,
      gasoline: 4.76,
      oranges: 3.79,
    }
  }

  handleChange = (event) => {
    this.setState({
      amount: event.target.value
    });
  }

  handleSelect = (event) => {
    this.setState({
      product: event.target.value,
      amount: "",
    });
  }

  insertSuffix(select) {
    if ( select === "electricity") return <em>kWh</em>
    else if ( select === "gasoline") return <em>litrów</em>
    else if ( select === "oranges") return <em>kilogramów</em>
    else return null;
  }

  selectPrice(select) {
    //musi być w []
    const price = this.props.prices[select];
    return price;
  }
  render() { 
    const{amount, product} = this.state;
    const priceMethod = this.selectPrice(product);
    //defultProps to również props
    const calculators = this.props.currencies.map(currency => (
      <Cash key = {currency.id} ratio = {currency.ratio} title = {currency.title} cash = {amount} price = {priceMethod}/>
    ));
    return ( 
      <div className="app">
        <label>
          Wybierz produkt
          <select value = {product} onChange = {this.handleSelect}>
            <option value="electricity">Prąd</option>
            <option value="gasoline">Benzyna</option>
            <option value="oranges">Pomarańcze</option>
          </select>
        </label>
        <br/>
        <label>
          <input type="number" value = {amount} onChange = {this.handleChange}/>
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}

      </div>
     );
  }
}
 
ReactDOM.render(<ExchangeCounter/>, document.getElementById("root"));