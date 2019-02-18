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
    const styleCss = this.state.shoppingCart === 0 ? {opacity: 0.3} : {};
    return(
      <div>
        <button disabled = {this.state.shoppingCart === 0 ? true : false} onClick={this.handleRemoveFromCart}>-</button>
        <span style = {styleCss}>{this.state.shoppingCart}</span>
        <button disabled = {this.state.shoppingCart === this.state.avaiableProducts ? true: false} onClick = {this.handleAddToCart}>+</button>
        {this.state.shoppingCart > 0 && <button onClick = {this.handleBuy}>Kup</button>}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));