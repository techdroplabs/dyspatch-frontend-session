import React from "react";
import "./styles.css";

/////////////////////////////////////////////////
// Dyspatch Frontend Session
// Functional and Class Component Boilerplate  //
// Choose one and export it to begin           //
/////////////////////////////////////////////////

const AppFunctional: React.FC<any> = () => {
  return (
    <div className="App">
      <h1>Dyspatch Frontend Session</h1>
    </div>
  );
};

class AppClass extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <h1>Dyspatch Frontend Session</h1>
      </div>
    );
  }
}

// Change which one you export here
export const App = AppFunctional;
// export const App = AppClass;
