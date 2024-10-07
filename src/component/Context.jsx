import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const questions = [
    {
      question: "What is React",
      options: ["A Library", "A Framework", "A Language", "A Machine"],
      answer: "A Library",
    },
    {
      question: "What is JSX",
      options: ["A Libary", "A Framework", "JavaScript XML", "A Machine"],
      answer: "JavaScript XML",
    },
    {
      question: "What is Enemy?",
      options: ["A Library", "A Framework", "A Language", "A Machine"],
      answer: "A Language",
    },
  ];

  const [playerName, setPlayerName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const isGameOver = currentIndex >= questions.length;
  const validateAnswer = () => {
    const correctAnswer = selectedOption === questions[currentIndex].answer;
    if (correctAnswer) {
      setMessage(`Congratulations. ${playerName} Your Answer is Correct`);
      setCorrectCount(correctCount + 1);
    } else {
      setMessage("Incorrect Answer!");
    }
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setQuestionNumber(questionNumber + 1);
      setSelectedOption("");
      setMessage("");
    }, 2000);
  };

  return (
    <GameContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
