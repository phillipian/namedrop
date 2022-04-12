import React, { useState, Component } from "react";
import "../index.css";

class NameForm extends Component {
	constructor(props) {
	  super(props);
	  this.state = {value: ''};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	  this.setState({value: event.target.value});
	}
  
	handleSubmit(event) {
		this.state.value = this.state.value.toLowerCase();
		if (this.state.value == this.props.name.toLowerCase()) {
			alert("You guessed correctly! Your score is: " + (this.props.score+1) + "!");

		} else {
			alert("Try Again... Hint: you need the full name, and check your spelling!");
		}
	//   alert('A name was submitted: ' + this.state.value);
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>
			Guess: 
			<input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
		  </label>
		  <input className="submitButton" type="submit" value="Submit" />
		</form>
	  );
	}
  }

  export default NameForm;