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
    </div>
  );
}

export default App;
