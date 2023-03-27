import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8080/api")
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
