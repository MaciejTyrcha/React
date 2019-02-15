//komponent funkcyjny, bezstanowy 
const Header = () => {
  //Musi zawierać return
  return (
    <>
      <h1>Witaj na stronie</h1>
    </>
  )
}

//komponent klasowy, stanowy
class Blog extends React.Component {
  state = {
    number: 0,
  }
  //Musi zawierać metodę render a w nim return
  render() {
    return (
    <section>
      <h2>Artykuł {this.state.number}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus error sed rem cupiditate et natus ratione, perferendis obcaecati doloremque iusto ipsa officia placeat minima quisquam non at odit omnis provident?</p>
    </section>
    )
  }
} 

//To znowu komponent funkcyjny, bezstanowy
const App = () => {
  return (
    //Zagnieżdżanie komponentów w innym komponencie. Przez komponent funkcyjny
    <>
      <Header/>
      <Blog/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));