const header = <h1 className = "title">Witaj na stronie</h1>

const classBig = "big";

const handleClick = () => {
  alert("kliknął");
}

const main = (
  <div>
    <h1 onClick={handleClick} className = "red">Pierwszy artykuł</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dolore iste, adipisci eum labore ad. Corrupti, id modi culpa at quis enim nihil debitis? Unde cumque reprehenderit qui deserunt magni!</p>
  </div>
)

// {} wstrzykujemy właściwości, przekazanie zmiennej
const footer = (
  <footer>
    <p className ={classBig}>Stopka</p>
  </footer>
)

//Tak się nie robi, powinno się zagnieżdżać. To tylko przykład, że idzie
const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));