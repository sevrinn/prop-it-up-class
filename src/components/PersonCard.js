import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    // const { firstName, lastName, age, hairColor } = this.props;
    this.state = {
      age: this.props.age,
    };
  }

  haveBirthday = () => {
    console.log("gets here");
    console.log(this.state.age);
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <>
        <h2>
          {this.props.firstName} {this.props.lastName}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={this.haveBirthday}>
          Birthday Button for {this.props.firstName} {this.props.lastName}
        </button>
      </>
    );
  }
}

export default PersonCard;
