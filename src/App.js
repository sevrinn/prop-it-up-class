import React, { Component } from "react";

import PersonCard from "./components/PersonCard";
import MyNewComponent from "./components/MyNewComponent";
import LightSwitch from "./components/LightSwitch";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonCard
          firstName={"James"}
          lastName={"Arnold"}
          age={34}
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
        {/* code below is from the lessons and exercises leading up to the core assignment */}
        {/* <MyNewComponent header={"What's up?!"}>
          <p>This is a child</p>
          <p>This is another child</p>
          <p>This is even another child</p>
        </MyNewComponent>
        <LightSwitch /> */}
      </div>
    );
  }
}

export default App;
