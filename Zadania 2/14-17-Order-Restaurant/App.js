class App extends React.Component {
  state = { 
    items: [
      {id: 1, name: "herbata", active: true},
      {id: 2, name: "ziemniaki", active: false},
      {id: 3, name: "kasza", active: false},
      {id: 4, name: "zupa", active: true},
      {id: 5, name: "woda", active: false},
      {id: 6, name: "chleb", active: false},
    ],
   }

   handleChangeStatus = (id) => {
     const itemList = this.state.items.map(item => {
       if (id === item.id) {
         item.active = !item.active;
       }
       return item;
     });

     this.setState({
       items: itemList
     })
   }

  render() { 
    return (  
      <>
        <Header items = {this.state.items}/>
        <ListItems items = {this.state.items} changeStatus = {this.handleChangeStatus}/>
      </>
    );
  }
}