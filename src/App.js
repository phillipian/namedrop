import React, { useState, Component } from "react";
import NameForm from "./components/form";
import "./App.css";
import "./index.css";

class App extends Component {
  // const clues=[
  //   "In my memoir \“A Girl from Yamhill,\” I recall discovering my love of reading when, bored on a rainy day, I picked up \“The Dutch Twins,\” by Lucy Fitch Perkins.",
  //   "clue2",
  //   "clue3",
  //   "clue4",
  //   "clue5"
  // ]
  constructor(props) {
    super(props);
    this.clues = [
      "In my memoir “A Girl from Yamhill,” I recall discovering my love of reading when, bored on a rainy day, I picked up “The Dutch Twins,” by Lucy Fitch Perkins.",
      "My birthday, April 12th, is celebrated as National “Drop Everything and Read” Day.",
      "There are bronze sculptures of three of my characters in the Grant Park neighborhood of Portland, Oregon, where I set many of my books.",
      "Judy Blume, Amy Poehler, and Kate DiCamillo wrote the forewords for new editions of my books that were published in 2016, in celebration of my hundredth birthday.",
      "One of my best-known characters, a daughter of Robert and Dorothy Quimby, began as a minor character in my Henry Huggins series.",
    ];
    // console.log(this.clues);
    this.index = 0;
    this.state = {
      message: this.clues[this.index],
    };
  }
  nextClue = () => {
    if (this.index == 4) {
      return 0;
    }
    this.index = this.index + 1;
    setTimeout(() => {
      this.setState({ message: this.clues[this.index] });
    }, 500);
  };
  prevClue = () => {
    if (this.index == 0) {
      return 0;
    }
    this.index = this.index - 1;
    this.setState({ message: this.clues[this.index] });
  };

  render() {
    return (
      <div className="container">
        <div className="banner">
          <h1 className="heading">Andover Namedrop w/ the</h1>
          <a src="https://phillipian.net"><span className="plip-font"></span></a>

          {/* <h1 className="plip">Phillipian</h1> */}
        </div>
        <div className="body-text">
          <button className="next" onClick={this.prevClue}>
            ←
          </button>
          <p className="guesstext">{this.state.message}</p>{" "}
          <button className="next" onClick={this.nextClue}>
            →
          </button>
        </div>
        {/* <input>Answer</input> */}
        <div className="bottom">
        <NameForm name="claire wang" score={this.index} />
        </div>
      </div>
    );
  }
}

export default App;
