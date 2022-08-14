import React, { useState, useEffect } from "react";
// import {Routes, Route} from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import TakeTest from "./TakeTest";
// import SetTest from "./SetTest";
// import Login from "./Login";
// import Logout from "./Logout";
import Question from "./Question";



function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:3001/questions')
      const jsonResult = await result.json();


      setQuestions(jsonResult)
    }
    fetchData()
  }, [])
  
  return (
    <main>
        <section>
      {currentQuestion ? (
        <Question
          question={currentQuestion}
          onAnswered={handleQuestionAnswered}
        />
      ) : (
        <>
          <h1>Game Over</h1>
          <h2>Total Correct: {score}</h2>
        </>
      )}
    </section>
    </main>
  );
}

export default App;