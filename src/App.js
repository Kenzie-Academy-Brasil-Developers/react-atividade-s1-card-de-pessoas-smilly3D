import logo from "./logo.svg";
import "./App.css";

import PersonCard from "./components/PersonCard/index";

function App() {
  const person = {
    id01: {
      name: "Joan",
      age: 20,
      country: "PA",
    },
    id02: {
      name: "Joane",
      age: 21,
      country: "SC",
    },
    id03: {
      name: "James",
      age: 30,
      country: "MA",
    },
  };

  return (
    <div className="App">
      <div className="App-header">
        <PersonCard
          name={person.id01.name}
          age={person.id01.age}
          country={person.id01.country}
        />
        <PersonCard
          name={person.id02.name}
          age={person.id02.age}
          country={person.id02.country}
        />
        <PersonCard
          name={person.id03.name}
          age={person.id03.age}
          country={person.id03.country}
        />
      </div>
    </div>
  );
}

export default App;
