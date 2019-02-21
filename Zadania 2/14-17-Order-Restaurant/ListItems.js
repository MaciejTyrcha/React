const ListItems = (props) => {
  const items = props.items.map(item => (
    <Item 
      // key nie przekazuje propsa, ale jest wymagany przez react
      key = {item.id}
      id = {item.id}
      name = {item.name}
      active = {item.active}
      changeStatus = {props.changeStatus}
    />
  ));

  return (
    <>
      <h1>Twoje zamówienie</h1>
      <ul>
        {items}
      </ul>
    </>
  )
} 