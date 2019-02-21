const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
    },
    {
      id: 3,
      age: 30,
      name: "Janek",
    },
    {
      id: 4,
      age: 15,
      name: "Angelika",
    },
  ]
}

const Item = (props) => (
  <div>
    <h1>Użytkownik {props.user.name}</h1>
    <h2>Ma: {props.user.age}</h2>
  </div>
)

class ListItems extends React.Component {

  render() {
    const users = this.props.data.users;

    const Items = users.map(user => <Item user = {user} key = {user.id}/>);
    return (
      <ul>
        {Items}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems data = {data}/>, document.getElementById("root"));