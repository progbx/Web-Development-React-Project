import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to the Quiz Application</h1>
        <p className="hero-description">
          Test your knowledge with our interactive multiple-choice quiz!
          Challenge yourself with various questions and see how well you score.
        </p>
        <div className="features">
          <article className="feature-card">
            <h2>Interactive Questions</h2>
            <p>Answer multiple-choice questions one at a time</p>
          </article>
          <article className="feature-card">
            <h2>Track Your Score</h2>
            <p>See your results and performance at the end</p>
          </article>
          <article className="feature-card">
            <h2>Easy Navigation</h2>
            <p>Seamlessly move between questions</p>
          </article>
        </div>
        <Link to="/quiz" className="start-button">Start Quiz</Link>
      </section>
    </main>
  );
};

export default Home;
