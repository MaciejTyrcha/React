const Person = (props) => {
  return (
    <li>{props.name}
      {/* <button onClick = {props.delete}>Usuń</button> */}
      <button onClick = {() => props.delete(props.name)}>Usuń</button>
    </li>
  );
}
class List extends React.Component {
  state = { 
    people: [
      {id: 1, name: "Jan K."},
      {id: 2, name: "Piotr C."},
      {id: 3, name: "Marysia W."},
      {id: 4, name: "John S."},
    ],
  }
  // handleDeleteOption(id) {
  //   //Kopia tablicy
  //   const people = [...this.state.people];
  //   const index = people.findIndex(person => person.id === id);
  //   people.splice(index, 1);
  //   this.setState({
  //     people
  //   });
  // }

  // handleDeleteOption(name) {
  //   //kopie tablicy
  //   // let people = Array.from(this.state.people);
  //   let people = this.state.people.slice();
  //   people = people.filter(person => name !== person.name);
  //   this.setState({
  //     people
  //   });
  // }

  handleDeleteOption = (name) => {
    //kopie tablicy
    // let people = Array.from(this.state.people);
    let people = this.state.people.slice();
    people = people.filter(person => name !== person.name);
    this.setState({
      people
    });
  }

  render() { 
    const people = this.state.people.map(person => 
    // <Person key = {person.id} name = {person.name} delete = {this.handleDeleteOption.bind(this, person.id)}/>);
    // <Person key = {person.id} name = {person.name} delete = {this.handleDeleteOption.bind(this, person.name)}/>);
    <Person key = {person.id} name = {person.name} delete = {this.handleDeleteOption}/>);
    return ( 
      <ul>
         {people}
      </ul>
     );
  }
}

ReactDOM.render(<List/>, document.getElementById("root"));
