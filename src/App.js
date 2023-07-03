import { useState } from "react";
import { Header, Main, TextField } from "./components/index.js";
import "./reset.css";

function App() {
  const [question, setQuestion] = useState("");
  return (
    <div className="App">
      <Header />
      <Main question={question} />
      <TextField setQuestion={setQuestion} />
    </div>
  );
}

export default App;
