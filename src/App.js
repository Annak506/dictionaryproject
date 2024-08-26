
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className = "App-Header">
          <h1 className="text-center mt-5">Testing Bootstrap in React</h1>
          <button className="btn btn-primary">Bootstrap Button</button>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>

        </footer>
    </div>
  </div>
);
}

export default App;
