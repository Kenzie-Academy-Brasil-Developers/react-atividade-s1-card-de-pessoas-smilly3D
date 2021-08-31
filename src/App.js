import logo from "./logo.svg";
import "./App.css";

import PersonCard from "./components/PersonCard/index";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <PersonCard />
      </div>
    </div>
  );
}

export default App;
