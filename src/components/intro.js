import React, { useState } from "react";
import "../index.css";

const Intro = () => {
  const [showResults, setShowResults] = React.useState(true);
  const playQuiz = () => setShowResults(false);
  return (
    <div>
      {showResults ? (
        <div className="introScreen">
			<h2>The Phillipian's</h2>
          <h1>Name Drop!</h1>
          <p>The answer to last week was: ___ <br />
            Guess the student or faculty member at Phillips Academy. The less clues you need, the more points you get.
          </p>
		  {/* <p>Love, from Phillipian Digital. Want to be a featured? Email cwang23@andover.edu!</p> */}
          <button className="playQuizButton" onClick={playQuiz}>Play game</button>
        </div>
      ) : null}
    </div>
  );
};

export default Intro;
