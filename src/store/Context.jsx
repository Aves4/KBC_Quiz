import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const questions = [
    {
      question: "What is the purpose of React's useEffect hook?",
      options: [
        "To directly update the DOM",
        "To manage side effects in a functional component",
        "To define a component's state",
        "To create reusable component logic",
      ],
      answer: "To manage side effects in a functional component",
    },
    {
      question: "Which of the following is NOT a feature of React?",
      options: [
        "Virtual DOM",
        " Two-way data binding",
        "JSX",
        "Component-based architecture",
      ],
      answer: " Two-way data binding",
    },
    {
      question:
        "How do you pass data from a parent component to a child component in React?",
      options: [
        "Using state",
        "Using props",
        "Using context",
        "Using useEffect",
      ],
      answer: "Using props",
    },
    {
      question: "What does React's setState function do?",
      options: [
        "It directly modifies the state object",
        "It replaces the component's current state with a new one",
        "It schedules an update to the components state object",
        "It re-renders the entire DOM",
      ],
      answer: "It schedules an update to the components state object",
    },
    {
      question: "What is the default value of a newly created useState hook?",
      options: [
        "null",
        "undefined",
        "The initial value passed to useState",
        "0",
      ],
      answer: "The initial value passed to useState",
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
    if (correctAnswer && selectedOption !== "") {
      setMessage(`Congratulations. ${playerName} Your Answer is Correct`);
      setCorrectCount(correctCount + 1);
    } else if (selectedOption === "") {
      setMessage("Please choose any one option from above");
    } else {
      setMessage("Incorrect Answer!");
    }
    selectedOption !== "" &&
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setQuestionNumber(questionNumber + 1);
        setSelectedOption("");
        setMessage("");
      }, 1000);
  };
  const handlePlayAgain = () => {
    setCurrentIndex(0);
    setPlayerName("");
    setQuestionNumber(1);
    setCorrectCount(0);
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
        handlePlayAgain,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
