// import logo from './logo.svg';
import './App.css';
const compromissos = ['estudar react', 'rever a aula', 'fazer os exercicios do dia'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <ul>{ compromissos.map((element,) => Task(element)) }</ul>
    </div>
  );
}

export default App;
