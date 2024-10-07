import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { GameContext } from "./Context";
import styles from "./MainScreen.module.css";

// export const questions = [
//   {
//     question: "What is React",
//     options: ["A Library", "A Framework", "A Language", "A Machine"],
//     answer: "A Library",
//   },
//   {
//     question: "What is JSX",
//     options: ["A Libary", "A Framework", "JavaScript XML", "A Machine"],
//     answer: "JavaScript XML",
//   },
//   {
//     question: "What is Enemy?",
//     options: ["A Library", "A Framework", "A Language", "A Machine"],
//     answer: "A Language",
//   },
// ];
const MainScreen = () => {
  const {
    playerName,
    setPlayerName,
    currentIndex,
    setCurrentIndex,
    questions,
    selectedOption,
    isGameOver,
    validateAnswer,
    setSelectedOption,
    message,
    setMessage,
    questionNumber,
    setQuestionNumber,
    correctCount,
    setCorrectCount,
  } = useContext(GameContext);
  // const [playerName, setPlayerName] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const currentQuestion = questions[currentIndex];
  // const [selectedOption, setSelectedOption] = useState("");
  // const [message, setMessage] = useState("");

  // const isGameOver = currentIndex >= questions.length;
  // const validateAnswer = () => {
  //   const correctAnswer = selectedOption === questions[currentIndex].answer;
  //   if (correctAnswer) {
  //     setMessage(`Congratulations. ${playerName} Your Answer is Correct`);
  //     setTimeout(() => {
  //       setCurrentIndex(currentIndex + 1);
  //       setSelectedOption("");
  //       setMessage("");
  //     }, 2000);
  //   } else {
  //     setMessage("Incorrect Answer!");
  //   }
  // };
  const currentQuestion = questions[currentIndex];

  const nameRef = useRef();
  const handleNameSubmit = () => {
    setPlayerName(nameRef.current.value);
  };
  return (
    <div>
      <Link to="/">Go Back</Link>
      {playerName && !isGameOver && (
        <h3 className={styles.playerName}>Player Name: {playerName}.</h3>
      )}

      {isGameOver ? (
        <div className={styles.messageContainer}>
          <h2>You Answered {correctCount} out of 5 Questions</h2>
          <h2>Thank You for Participating</h2>
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

export default MainScreen;
