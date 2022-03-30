import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
import AboutUs from './components/AboutUs';
import NewMovies from './components/NewMovies';
import ContactEmailForm from './components/ContactEmailForm';
import Footer from './components/Footer';
import ContactUsPage from './components/ContactUsPage';

function App() {
  return (
    <div className="App">
      
      {/* <HomePage/> */}
      {/* <AboutUs/> */}
      {/* <NewMovies></NewMovies> */}
      <ContactUsPage/>
    </div>
  );
}

export default App;
