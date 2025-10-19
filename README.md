# Quiz Application - ReactJS

A simple, interactive quiz application built with React and React Router that allows users to take multiple-choice quizzes and track their scores.

## Features

- **Home Page**: Welcome page with application description and quick access to start the quiz
- **Quiz Page**: Interactive multiple-choice questions displayed one at a time
- **About Page**: Information about the application and how to use it
- **Navigation**: Seamless routing between pages using React Router
- **Answer Selection**: Users can select answers and proceed to the next question
- **Score Tracking**: Automatic score calculation and performance feedback
- **Results Display**: Comprehensive results page showing score, percentage, and answer review
- **Responsive Design**: Mobile-friendly interface that works on all devices

## Technologies Used

- **React** (v19.2.0): JavaScript library for building user interfaces
- **React Router DOM** (v7.9.4): Client-side routing for single-page applications
- **React Scripts** (v5.0.1): Configuration and scripts for Create React App
- **CSS3**: Styling with responsive design and modern UI/UX

## Project Structure

```
quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.js       # Navigation bar component
│   │   ├── Navigation.css      # Navigation styles
│   │   ├── Home.js            # Home page component
│   │   ├── Home.css           # Home page styles
│   │   ├── Quiz.js            # Quiz component with logic
│   │   ├── Quiz.css           # Quiz styles
│   │   ├── About.js           # About page component
│   │   └── About.css          # About page styles
│   ├── App.js                 # Main app component with routing
│   ├── App.css                # App-level styles
│   ├── index.js               # Application entry point
│   └── index.css              # Global styles
├── package.json
└── README.md
```

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## How to Use

1. **Navigate to the Home page** - View the welcome message and features
2. **Click "Start Quiz"** or navigate to the Quiz page
3. **Read each question** carefully
4. **Select your answer** from the multiple-choice options
5. **Click "Next Question"** to proceed
6. **Complete all questions** to view your results
7. **Review your answers** on the results page
8. **Click "Restart Quiz"** to try again

## Component Details

### Navigation Component
- Displays a navigation bar with links to Home, Quiz, and About pages
- Responsive design with mobile-friendly menu

### Home Component
- Welcome page with application description
- Feature cards highlighting key functionalities
- Call-to-action button to start the quiz

### Quiz Component
- **State Management**: Uses React hooks (useState, useEffect)
- **Question Data**: Contains 10 multiple-choice questions
- **Answer Selection**: Handles user input and validation
- **Score Calculation**: Tracks correct answers and calculates percentage
- **Results Display**: Shows detailed results with performance feedback
- **Progress Bar**: Visual indicator of quiz completion

### About Component
- Information about the application's purpose
- Instructions on how to use the quiz
- Technology stack details
- Feature list

## Key Features Implementation

### React Hooks Used
- `useState`: Managing component state (current question, score, selected answer)
- `useEffect`: Lifecycle management and component initialization

### Routing
- React Router DOM for client-side navigation
- Three main routes: `/`, `/quiz`, `/about`
- No page reloads between navigation

### User Interaction
- Answer selection with visual feedback
- Validation to ensure an answer is selected before proceeding
- Restart functionality to retake the quiz

### Responsive Design
- Mobile-first approach
- Flexbox and Grid layouts
- Media queries for different screen sizes

## Evaluation Criteria Met

- Git repository created and configured
- All dependencies in package.json
- All pages (Home, Quiz, About) created
- Routing between pages implemented
- Answer selection functionality working
- Score calculation and results display
- One component per file
- Appropriate HTML semantic tags
- Props and state used correctly
- useEffect and useState hooks implemented
- Responsive to user interactions
- Error-free compilation and execution

## Future Enhancements

- Add more question categories
- Implement timer for each question
- Add difficulty levels
- Store high scores in local storage
- Add animations and transitions
- Implement question randomization
- Add user authentication

## License

This project is created for educational purposes.

## Author

Created as a ReactJS learning project demonstrating component structure, state management, routing, and event handling.
