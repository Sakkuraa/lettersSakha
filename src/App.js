import Costs from "./components/Costs/Costs";
import React from "react";

const App = (props) => {
  return (
    <div>
      <Costs words={props.words} lettersData={props.lettersData} />
    </div>
  );
};

export default App;
