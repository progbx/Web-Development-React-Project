import React, { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = () => {
  // Quiz questions data
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      id: 4,
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      id: 5,
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2"
    },
    {
      id: 6,
      question: "Which programming language is known as the 'language of the web'?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    },
    {
      id: 7,
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correctAnswer: "Blue Whale"
    },
    {
      id: 8,
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: "1945"
    },
    {
      id: 9,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: "Au"
    },
    {
      id: 10,
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7"
    }
  ];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  // Reset quiz when component mounts
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResults(false);
    setAnswers([]);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle moving to next question
  const handleNextQuestion = () => {
    if (selectedAnswer === '') {
      alert('Please select an answer before proceeding!');
      return;
    }

    // Check if answer is correct and update score
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Store the answer
    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect
      }
    ]);

    // Move to next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
    }
  };

  // Handle quiz restart
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResults(false);
    setAnswers([]);
  };

  // Results component
  if (showResults) {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    let performanceMessage = '';

    if (percentage >= 90) {
      performanceMessage = 'Excellent! Outstanding performance!';
    } else if (percentage >= 70) {
      performanceMessage = 'Great job! You did well!';
    } else if (percentage >= 50) {
      performanceMessage = 'Good effort! Keep practicing!';
    } else {
      performanceMessage = 'Keep trying! Practice makes perfect!';
    }

    return (
      <main className="quiz-container">
        <section className="results-container">
          <h1 className="results-title">Quiz Results</h1>
          <div className="score-display">
            <h2>Your Score</h2>
            <p className="score-number">{score} / {questions.length}</p>
            <p className="score-percentage">{percentage}%</p>
            <p className="performance-message">{performanceMessage}</p>
          </div>

          <div className="answers-review">
            <h3>Review Your Answers</h3>
            {answers.map((answer, index) => (
              <article key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                <p className="question-number">Question {index + 1}</p>
                <p className="question-text">{answer.question}</p>
                <p className="answer-info">
                  <strong>Your answer:</strong> {answer.selectedAnswer}
                  {!answer.isCorrect && (
                    <span className="correct-answer-text">
                      <br /><strong>Correct answer:</strong> {answer.correctAnswer}
                    </span>
                  )}
                </p>
              </article>
            ))}
          </div>

          <button onClick={handleRestart} className="restart-button">
            Restart Quiz
          </button>
        </section>
      </main>
    );
  }

  // Quiz question component
  return (
    <main className="quiz-container">
      <section className="quiz-content">
        <div className="quiz-header">
          <h1>Quiz Time!</h1>
          <p className="question-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <article className="question-card">
          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(option)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            className="next-button"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </article>
      </section>
    </main>
  );
};

export default Quiz;
