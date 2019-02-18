class App extends React.Component {
  state = {
    avaiableProducts: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  handleBuy = () => {
    this.setState({
      avaiableProducts: this.state.avaiableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    })
  }

  render() {
    const {shoppingCart, avaiableProducts} = this.state;
    const styleCss = shoppingCart === 0 ? {opacity: 0.3} : {};
    return(
      <div>
        <button disabled = {shoppingCart === 0 ? true : false} onClick={this.handleRemoveFromCart}>-</button>
        <span style = {styleCss}>{shoppingCart}</span>
        <button disabled = {shoppingCart === avaiableProducts ? true: false} onClick = {this.handleAddToCart}>+</button>
        {shoppingCart > 0 && <button onClick = {this.handleBuy}>Kup</button>}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));