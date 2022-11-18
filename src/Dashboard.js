import React from 'react'
import "./App.css";
import { Navigate } from "react-router-dom";
import React from "react";
function Dashboard() {
    const [gotoc, setgotoc] = React.useState(false);
  if (gotoc) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="body">
    <div className="dashboardpage">
     <div className="dashboard">
     <h1 style={{textalign:"center", margin:"auto"}}>DASHBOARD</h1>
      <div className="orange">
          <div className="Addtopic">
          <h1>ADD TOPIC</h1>
          <button
            onClick={() => {
              setgotoc(true);
            }}> Add</button>
              <div className="topiclist">
                  <h1>TOPIC LIST:</h1>
                 
            </div>
          </div>
      </div>
     </div>
    </div>
  </div>
  );

}

export default Dashboard;