import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"James"}
        lastName={"Arnold"}
        age={35}
        hairColor={"Light Brown"}
      />
      <PersonCard
        firstName={"Greg"}
        lastName={"Yang"}
        age={33}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Mike"}
        lastName={"Winetroub"}
        age={38}
        hairColor={"Blond"}
      />
      <PersonCard
        firstName={"Ash"}
        lastName={"Ketchum"}
        age={11}
        hairColor={"Black"}
      />
    </div>
  );
}

export default App;
