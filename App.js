import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';
import Heading from './heading'
import question from './question.json';
function App() {
  return (
    <div className="App">

 <Quiz  mydata={question} />
  
    </div>

  );
}

export default App;
