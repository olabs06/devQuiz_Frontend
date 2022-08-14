import {useState, useEffect} from "react";


function Question() {
const [questions, setQuestions] = useState([]);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  

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
  );
}


export default Question;