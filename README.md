# Stopwatch App

A simple stopwatch application built using React, designed to track time with precision and provide user-friendly features.

## Features

- **Start/Pause:** Toggle between starting and pausing the stopwatch.
- **Reset:** Reset the stopwatch to zero.
- **Split:** Record lap times while the stopwatch is running.
- **Precise Timing:** Display time in the format `HH:MM:SS.MS` (hours, minutes, seconds, milliseconds).
- **Responsive Design:** Fully responsive and centered layout for a clean user experience.

## Project Structure

The project is built using the following structure:

```
src/
  |- App.jsx      # Main component for the stopwatch
  |- App.css      # Styling for the app
  |- main.jsx     # Entry point for rendering the app
  |- index.html   # HTML template with font imports
  |- components/  # (Optional) Directory for reusable components
```

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Install [Node.js](https://nodejs.org/) (ensure npm is included).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stopwatch-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the app.

## Deployment

### Vercel Deployment

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```
2. Deploy the app:
   ```bash
   vercel
   ```

### Netlify Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist/` folder into the Netlify dashboard for instant deployment.

## Customization

Feel free to modify the `App.css` to update styles or `App.jsx` for additional features.

## Acknowledgments

- Fonts: [Google Fonts](https://fonts.google.com/) (PT Serif)
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

---

### Author

Megan D Costa

