# Manual React App Setup

This project demonstrates how to create a React application **from scratch** without using Create React App (CRA), Vite, or any other boilerplate tools. It uses **Webpack** and **Babel** to bundle and transpile the code.

---

## Project Structure

```
manual-react-app/  
│  
├── public/  
│ └── index.html  
├── src/  
│ ├── index.js  
│ └── App.js  
├── .babelrc  
├── webpack.config.js  
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/therealakash13/manual-react-app.git
cd manual-react-app
```

2.  Install dependencies: 
`npm install` 

----------

## Available Scripts

### Start Development Server

`npm start` 

-   Runs the app in development mode
    
-   Opens the app in your default browser
    
-   Supports live reloading and clears the terminal on each reload
    

### Build for Production

`npm run build` 

-   Bundles the app for production in the `dist/` folder
    
-   Optimized and ready to deploy
    

----------

## Key Configurations

-   **Webpack** handles module bundling
    
-   **Babel** transpiles JSX and modern JavaScript
    
-   **HtmlWebpackPlugin** injects the bundle into `index.html`
    
-   **Dev server** is configured to clear the terminal on every reload
    

----------

## Usage

-   Edit `src/App.js` to modify your main component
    
-   Add new components inside the `src/` folder
    
-   Import them in `index.js` or other components as needed
    

----------

## Learning Points

-   How React apps are bundled and transpiled manually
    
-   Webpack configuration for JS/JSX and HTML
    
-   Setting up a dev server with live reload
    
-   Understanding what CRA and Vite do under the hood
    

----------

## Tags

React, Webpack, Babel, JavaScript, Frontend, Learning, Manual Setup

----------

## Notes

This setup is perfect for learning and understanding how React apps work under the hood.  
For production projects or faster development, tools like CRA or Vite are recommended.

----------------
