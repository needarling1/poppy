import './App.css';
import Header from './components/header/header.js';
import Home from './components/home/home.js';
import Create from './components/create/create.js';
import Pin from './components/pin/pin.js';

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
      if (window.location.pathname.startsWith("/")) {
        page = <Pin/>; // Or whatever component you want to render for other paths
    } else {
        page = <h1>404 not found</h1>;
    }
  }
  return (
    <div className="App">
      <Header/>
      {page}
    </div>
  );
}

export default App;
