const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 30,
      name: "Janek",
      sex: "male",
    },
    {
      id: 4,
      age: 15,
      name: "Angelika",
      sex: "female",
    },
  ]
}

const Item = ({user}) => (
  <div className = "userInfo">
    <h1>{user.name}</h1>
    <p>Informacja o użytkowniku</p>
    <p>Wiek użytkownika: <strong>{user.age}</strong></p>
    <p>Płeć użytkownika {user.sex}</p>
  </div>
)

class ListItems extends React.Component {

  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === "female" );

    const Items = users.map(user => <Item user = {user} key = {user.id}/>);
    return (
      <ul>
        {Items}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems data = {data}/>, document.getElementById("root"));