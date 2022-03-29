import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
    </div>
  );
}

export default App;
