

import "./App.css";
import { Navigate } from "react-router-dom";
import React from "react";

function App() {
  const [gotoc, setgotoc] = React.useState(false);
  if (gotoc) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="body">
      <div className="landing-page">
        <div className="landing">
          <h1>LANDING</h1>
          <h1>PAGE:</h1>

          <input
            type="text"
            style={{ color: "white" }}
            className="username"
            placeholder="USERNAME"
          />
          <button
            onClick={() => {
              setgotoc(true);
            }}
          >
            Button
          </button>
      
        </div>
      </div>
    </div>
  );
}

export default App;
