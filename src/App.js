import logo from "./logo.png";
import Dictionary from "./Dictionary";
import './App.css';

 export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="app-logo img-fluid" alt="logo"/>
       </header>
       <main>
        <Dictionary/>
        </main>
      <footer className="app-footer">Coded by Nicolette Steenkamp, the code is <a href="https://github.com/NicoletteSteenkamp/dictionary" target="_blank" rel="noreferrer"> open-sourced</a> and deployed on <a href="https://dictionarify.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></footer>
      </div>
    </div>
  );
}


