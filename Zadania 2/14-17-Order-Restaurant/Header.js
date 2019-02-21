const Header = (props) => {
  const activeItems = props.items.filter(item => item.active === true);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>Do zapłaty: {number ? `${number * 10} złotych` : "Pusty koszyk" }</h2>
    </header>
  )
}