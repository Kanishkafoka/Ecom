// import React, { useState } from 'react';
// import './quiz.css'

// const Quiz = () => {
//   const [currentQuiz, setCurrentQuiz] = useState(0);
//   const [score, setScore] = useState(0);

//   const quizData = [
//     {
//       question: "In the movie 'The Godfather,' what food does Don Corleone famously say, 'I'm gonna make him an offer he can't refuse?'",
//       a: "Spaghetti",
//       b: "Cannoli",
//       c: "Pizza",
//       d: "Meatballs",
//       correct: "b",
//     },
//     {
//       question: "In the movie 'Julie & Julia,' what dish is Julie Powell attempting to master by cooking all 524 recipes from Julia Child's cookbook?",
//       a: "Beef Bourguignon",
//       b: "Ratatouille",
//       c: "Croissants",
//       d: "Boeuf à la Mode",
//       correct: "a",
//     },
//     {
//       question: "Which animated movie features a rat who aspires to become a great chef in Paris?",
//       a: "Kung Fu Panda",
//       b: "Finding Nemo",
//       c: "Ratatouille",
//       d: "Shrek",
//       correct: "c",
//     },
//     {
//       question: "In the movie 'Pulp Fiction,' what fast-food restaurant do Vincent Vega and Mia Wallace go to for dinner?",
//       a: "McDonald's",
//       b: "Burger King",
//       c: "Jack in the Box",
//       d: "Big Kahuna Burger",
//       correct: "d",
//     },
//     {
//       question: "In the film 'Chocolat,' what does Vianne Rocher, played by Juliette Binoche, open in the small French village?",
//       a: "Bakery",
//       b: "Chocolate shop",
//       c: "Coffeehouse",
//       d: "Ice cream parlor",
//       correct: "b",
//     },
//   ];

//   const loadQuiz = () => {
//     const currentQuizData = quizData[currentQuiz];
//     setQuestion(currentQuizData.question);
//     setOptions([
//       { id: 'a', text: currentQuizData.a },
//       { id: 'b', text: currentQuizData.b },
//       { id: 'c', text: currentQuizData.c },
//       { id: 'd', text: currentQuizData.d },
//     ]);
//   };

//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const handleAnswerChange = (id) => {
//     setSelectedAnswer(id);
//   };

//   const handleSubmit = () => {
//     if (selectedAnswer === quizData[currentQuiz].correct) {
//       setScore(score + 1);
//     }
//     setCurrentQuiz(currentQuiz + 1);

//     if (currentQuiz < quizData.length) {
//       loadQuiz();
//       setSelectedAnswer(null);
//     }
//   };

//   return (
//     <div className="quiz-container">
//       <div className="quiz-header">
//         <h2>{question}</h2>
//         <ul>
//           {options.map((option) => (
//             <li key={option.id}>
//               <input
//                 type="radio"
//                 name="answer"
//                 id={option.id}
//                 className="answer"
//                 checked={selectedAnswer === option.id}
//                 onChange={() => handleAnswerChange(option.id)}
//               />
//               <label htmlFor={option.id}>{option.text}</label>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={handleSubmit} id="submit">
//         Submit
//       </button>

//       {currentQuiz === quizData.length && (
//         <div>
//           <h2>You answered correctly at {score} / {quizData.length} questions</h2>
//           <button onClick={() => window.location.reload()}>Reload</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
