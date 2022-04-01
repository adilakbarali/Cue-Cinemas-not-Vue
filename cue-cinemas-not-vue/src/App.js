import './css/App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
import AboutUs from './components/AboutUs';
import Movies from './components/Movies';
import NewReleases from './components/NewReleasesPage';
// import NewMovies from './components/NewMovies';
import ContactEmailForm from './components/ContactEmailForm';
import Footer from './components/Footer';
import ContactUsPage from './components/ContactUsPage';
import BookingForm from './components/BookingForm';
import UpcomingReleases from './components/UpcomingReleases'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <HomePage/> */}
      <AboutUs/>
      {/* <NewReleases/> */}
      {/* <NewMovies></NewMovies> */}
      {/* <ContactUsPage/> */}
      {/* <UpcomingReleases></UpcomingReleases> */}
      <Footer/>
    </div>
  );
}

export default App;
