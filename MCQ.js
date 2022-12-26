import "./MCQ.css";
import { useState } from "react";

const MCQ = (props) => {
  //Some variables storing important data.
  const alph = "abcd";
  const MCQs = props.MCQs;
  //Important states.
  const [testOngoing, setTestOngoing] = useState(true);
  const [currentMCQ, setCurrentMCQ] = useState(0);
  const [score, setScore] = useState(0);
  //Option Click Event Handler Function.
  const clickHandler = (event) => {
    if (event.target.localName === "li") {
      setCurrentMCQ((prevMCQ) => prevMCQ + 1);
      setScore((prevScore) =>
        event.target.dataset.nature === "true" ? prevScore + 1 : prevScore
      );
      // console.log(event.target.dataset.nature);
      if (currentMCQ >= MCQs.length - 1) {
        setTestOngoing(false);
        // alert("Bas ka alaka khatam sho test!");
        return;
      }
    }
  };
  //Restart Handler Function.
  const restartHandler = (event) => {
    setCurrentMCQ(0);
    setScore(0);
    setTestOngoing(true);
  };

  return (
    <>
      <h1 className="title">Quiz App</h1>
      {testOngoing ? (
        <div className="mcq">
          {/* MCQ statement */}
          <h1 className="statement">
            ({currentMCQ + 1}) {MCQs[currentMCQ].statement}
          </h1>
          {/* MCQ options */}
          <ul onClick={clickHandler}>
            {MCQs[currentMCQ].options.map((option, index) => (
              <li className="option" data-nature={option.nature}>
                ({alph[index]}) {option.option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className="result">
            <p className="result-message">
              umbarak sha alaka, tura di owahala!!! <br /> {score}/{MCQs.length}{" "}
              ({Math.floor((score / MCQs.length) * 100)}%)
            </p>
          </div>
          <button className="restart" onClick={restartHandler}>
            Restart
          </button>
        </>
      )}
    </>
  );
};
export default MCQ;
