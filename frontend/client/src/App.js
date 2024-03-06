import './App.css';
import Header from './components/header/header.js';
import Home from './components/home/home.js';
import Create from './components/create/create.js';

const App = () => {
  let page
  switch (window.location.pathname) {
    case "/":
      page = <Home/>
      break;
    case "/create":
      page = <Create/>
      break;
    default:
  }
  return (
    <div className="App">
      <Header/>
      {page}
    </div>
  );
}

export default App;
