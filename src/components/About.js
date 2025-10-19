import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-container">
      <section className="about-content">
        <h1 className="about-title">About This Quiz Application</h1>

        <article className="about-section">
          <h2>Purpose</h2>
          <p>
            This Quiz Application is designed to provide an interactive and engaging way to test
            your knowledge on various topics. It offers a simple, user-friendly interface where
            users can answer multiple-choice questions and receive instant feedback on their performance.
          </p>
        </article>

        <article className="about-section">
          <h2>How It Works</h2>
          <ul className="about-list">
            <li>Navigate to the Quiz page to start the quiz</li>
            <li>Read each question carefully and select your answer</li>
            <li>Click "Next Question" to proceed to the next question</li>
            <li>After completing all questions, view your final score</li>
            <li>Restart the quiz to try again and improve your score</li>
          </ul>
        </article>

        <article className="about-section">
          <h2>Technology</h2>
          <p>
            Built with React and React Router, this application demonstrates modern web development
            practices including component-based architecture, state management with hooks, and
            client-side routing for a seamless single-page application experience.
          </p>
        </article>

        <article className="about-section">
          <h2>Features</h2>
          <ul className="about-list">
            <li>Multiple-choice questions with instant validation</li>
            <li>Score tracking and performance feedback</li>
            <li>Responsive design for mobile and desktop devices</li>
            <li>Smooth navigation between pages without page reloads</li>
          </ul>
        </article>
      </section>
    </main>
  );
};

export default About;
