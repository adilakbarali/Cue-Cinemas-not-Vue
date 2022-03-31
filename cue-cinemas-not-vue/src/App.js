import logo from './resources/logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
import AboutUs from './components/AboutUs';
import NewMovies from './components/NewMovies';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage/> */}
      {/* <AboutUs/> */}
      <BookingForm sID="62430f13e60e734b2865c365"/>
    </div>
  );
}

export default App;
