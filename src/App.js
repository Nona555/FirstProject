import './App.css';
import Timer from './Timer/Timer';
import Functional from './Functional/Functional';

function App() {
  return (
    <div>
      <Functional name={'Functional Component'} age={5} />
      <Timer name={'Timer'} />
    </div>
  );
}

export default App;
