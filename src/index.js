import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

/* First create a variable to store and target the root element (div)
in order to setup the main container of our app. */
const rootContainer = document.getElementById("root");

/* Second create another variable to store and create the root
and basically set it up as the container via the React DOM. */
const root = ReactDOM.createRoot(rootContainer);

// Finally, render the App component which is the main component for our app.
root.render(<App />);
