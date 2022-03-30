import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
import AboutUs from './components/AboutUs';
import NewMovies from './components/NewMovies';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage/> */}
      {/* <AboutUs/> */}
      <NewMovies></NewMovies>
    </div>
  );
}

export default App;
