import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state from "./components/Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App words={state.words} lettersData={state.lettersData} />);
