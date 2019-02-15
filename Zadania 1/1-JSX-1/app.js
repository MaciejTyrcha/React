// console.log(React);
// console.log(ReactDOM);

//Tworzenie elementu w Reacie przy pomocy JSX
const element = <div>Pierwszy element React</div>

//Tworzenie elementu bez JSX
const element2 = React.createElement(
  "div",
  null,
  "Pierwszy element React"
)

// W przypadku zagniezdzania uzywac nawiasów ()
const element3 = (
<div>
  <p id="main" className="red">Tekst</p>
</div>
)

//Można też tak ale nie wygląda to dobrze
const element4 = <div><p>Tekst</p></div>

//Elementy muszą być umieszczone w kontenerze
const element5 = (
  <React.Fragment>
    <section></section>
    <section></section>
  </React.Fragment>
)
