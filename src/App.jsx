import "./App.css";
import Counter from "./components/Counter";
import Json from "./components/Json";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JsonString from "./components/JsonString";
import Board from "./components/TicTac";
import Calculator from "./components/Calculator";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/json" element={<Json />} />
          <Route path="/jsonString" element={<JsonString />} />
          <Route path="/board" element={<Board />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
