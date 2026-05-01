# Poll App (React + Tailwind CSS)

A responsive poll application built with React and Tailwind CSS. Users can add poll options, vote once, and see live results with percentages and progress bars. All data persists using localStorage.

## Features

- Add new poll options dynamically
- Vote for an option (only once per user)
- Live vote count updates
- Percentage-based progress bars
- Reset all votes
- Data persists after page refresh (localStorage)
- Fully responsive (mobile & desktop)
- Clean UI using Tailwind CSS

## Concepts Used

- React Components (App, PollForm, PollList, PollOption)
- Props (data passed down)
- Event Handling (onClick, onSubmit, onChange)
- State Management with `useState`
- Side Effects with `useEffect`
- Data persistence using `localStorage`
- One-way data flow (React pattern)

## Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- localStorage API

---

## Project Structure

src/
├── App.jsx
├── components/
│ ├── PollForm.jsx
│ ├── PollList.jsx
│ └── PollOption.jsx
├── main.jsx
├── index.css

## Installation & Setup

1. Clone the repository:

git clone

https://github.com/Nasra-Hassan/voting-poll-app.git

2. Install dependencies:

npm install

## Data Persistence

- Poll options and vote counts are saved in `localStorage`
- Data remains even after refreshing the page
- Reset button clears votes but keeps options

---

## UI & Responsiveness

- Built with Tailwind CSS utility classes
- Uses consistent color palette:
  - Blue (primary)
  - Green (actions)
  - Red (reset)
  - Indigo (progress bars)

- Responsive layout using flexible containers and spacing

---

## Voting Logic

- Users can only vote once per session
- Vote buttons are disabled after voting
- Reset button allows voting again

---

---

## MIT License

T
