import './App.css';
import Cover from './components/Cover';
import Header from './containers/Header.js';

const App = () => {
  return (
    <div className="App">
    <div className='app-container'>
      <Header></Header>
      <Cover></Cover>
    </div>
    </div>
  );
}

export default App;
