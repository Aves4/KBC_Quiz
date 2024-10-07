import { React, useContext, useRef } from "react";
import { GameContext } from "./Context";
import { Link } from "react-router-dom";
import styles from "./MobileScreen.module.css";
const MobileScreen = () => {
  const {
    playerName,
    setPlayerName,
    currentIndex,

    questions,
    selectedOption,
    isGameOver,
    validateAnswer,
    setSelectedOption,
    message,
    handlePlayAgain,
    questionNumber,

    correctCount,
  } = useContext(GameContext);
  const currentQuestion = questions[currentIndex];

  const nameRef = useRef();
  const handleNameSubmit = () => {
    setPlayerName(nameRef.current.value);
  };
  return (
    <div>
      {playerName && !isGameOver && (
        <h3 className={styles.playerName}>Player Name: {playerName}</h3>
      )}

      {isGameOver ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>You Answered {correctCount} out of 5 Questions</h2>
          <h2>Thank You for Participating</h2>
          <div>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        </div>
      ) : !playerName ? (
        <div className={styles.container}>
          <div>
            <span>Enter Name Here: </span>{" "}
            <input
              type="text"
              placeholder="Enter Name"
              ref={nameRef}
              className={styles.inputfield}
            ></input>
          </div>
          <button onClick={handleNameSubmit}>Submit Name</button>
        </div>
      ) : (
        <div>
          <div className={styles.questioncontainer}>
            <h2>
              <span>{questionNumber}.</span>
              {currentQuestion.question}
            </h2>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className={styles.options}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                />

                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <div className={styles.submitButton}>
            <button onClick={validateAnswer} className={styles.submitButton}>
              Submit
            </button>
          </div>
          <h3>{message}</h3>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default MobileScreen;
