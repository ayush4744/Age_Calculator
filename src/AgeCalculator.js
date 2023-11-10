import React, { Component } from "react";

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "",
      age: null,
    };
  }

  handleDOBChange = (event) => {
    this.setState({ dob: event.target.value });
  };

  calculateAge = () => {
    const dob = new Date(this.state.dob);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
      age--;
    }
    this.setState({ age });
  };

  render() {
    const ageBoxStyle = {
      background: "blue",
      padding: "20px",
      borderRadius: "10px",
      color: "white",
    };

    const inputStyle = {
      width: "250px", // Increase the width to your desired size
      padding: "10px",
    };

    return (
      <div>
        <h1>Age Calculator</h1>
        <label htmlFor="dob"><h4>Enter your date of birth</h4></label>
     
        <br />
        <input
          type="date"
          id="dob"
          value={this.state.dob}
          onChange={this.handleDOBChange}
          style={inputStyle} // Apply the style here
        />
        <br />
        <br />
        <button
          style={{
            background: "lightblue",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
          }}
          onClick={this.calculateAge}
        >
          Calculate Age
        </button>
        <br />
        {this.state.age !== null && (
         
            <p><h2>Your age is: {this.state.age} years old</h2></p>
        
        )}
      </div>
    );
  }
}

export default AgeCalculator;
