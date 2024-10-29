import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import One from "./components/One";
import Two from "./components/Two";

function App() {
  return (
    <div className="App">
      <h2 className="underline">123123</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
      </Routes>
    </div>
  );
}

export default App;
