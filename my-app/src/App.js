import logo from "./logo.svg";
import "./App.css";
import People from "./People.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Entertainment Guild</p>
      </header>
      <body className="App-body">
        <People />
      </body>
      <footer className="App-footer">
        <em>Thanks for using our website</em>
      </footer>
    </div>
  );
}

export default App;
