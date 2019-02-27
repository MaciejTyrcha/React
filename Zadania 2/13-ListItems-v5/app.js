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
  state = {
    select: "all",
  }

  usersList = () => {
    let users = this.props.data.users;
    switch(this.state.select) {
      case "all":
        return users.map(user => <Item user = {user} key = {user.id}/>);
      case "female":
        users = users.filter(user => user.sex === "female")
        return users.map(user => <Item user = {user} key = {user.id}/>);
      case "male":
        users = users.filter(user => user.sex === "male")
        return users.map(user => <Item user = {user} key = {user.id}/>);
      default: 
        return "coś się zepsuło";
    }
  }

  handleUsersFilter = (option) => {
    this.setState({
      select: option
    })
  }

  render() {
    return (
      <>
bind powoduje mi że funkcja się nie wykona od razu. Plus przekazujemy argument
        <button onClick = {this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
        <button onClick = {this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
        <button onClick = {this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
        {this.usersList()}
      </>
    )
  }
}

ReactDOM.render(<ListItems data = {data}/>, document.getElementById("root"));