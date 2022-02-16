import logo from './logo.svg';
import './App.css';

const atividades = ['escovar os dentes', 'tomar banho', 'vestir roupa', 'tomar cafe'];
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const ulConstruido = atividades.map((atividade) => Task(atividade)) ;

function App() {
  return (
    <div className="App">
      <ul>
        {ulConstruido}
      </ul>
    </div>
  );
}

export default App;
