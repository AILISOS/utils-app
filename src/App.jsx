import './App.css';
import Increment from './components/Counter';
import Json from './components/Json';
import JsonString from './components/JsonString';
import Board from './components/TicTac';

function App() {
  return (
    <div >
      <Increment />
      <Json />
      <JsonString />
      <Board />
    </div>
  );
}

export default App;
