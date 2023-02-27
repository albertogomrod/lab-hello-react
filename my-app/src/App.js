import "./App.css";
import logoIronhack from "./images/ironhack-logo-xs.png";
import navLineas from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <section id="nav">
        <img src={logoIronhack} id="logo" alt="logo" />
        <img src={navLineas} id="barritas" alt="nav" />
      </section>

      <section id="inicio">
        <h1>Say Hello to 
        <br />
        ReactJs</h1>
        <p id= "titular-p">
          You will learn how to use 
          <br />
          the most popular frontend library, 
          <br /> and
          become super Ninja developer
        </p>
        <button>Awesome!</button>
      </section>

      <section id="funciones">
        <div>
          <img src="icon1.png" alt="declarative" />
          <h4>Declarative</h4>
          <p className= "descripciones">React makes it painless to create interactive UIs.</p>
        </div>

        <div>
          <img src="./images/icon2.png" alt="components" />
          <h4>Components</h4>
          <p className= "descripciones">Build encapsulated componentes that manage their state.</p>
        </div>
        <div>
          <img src="./images/icon3.png" alt="single-way" />
          <h4>Single-Way</h4>
          <p className= "descripciones">A set of immutable values are passed to the components </p>
        </div>

        <div>
          <img src="./images/icon4.png" alt="JSX" />
          <h4>JSX</h4>
          <p className= "descripciones">Statically typed designed to run on modern browsers</p>
        </div>
      </section>
    </div>
  );
}

export default App;
