import './css/App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
import AboutUs from './components/AboutUs';
import Movies from './components/Movies';
import NewReleases from './components/NewReleasesPage';

import ContactEmailForm from './components/ContactEmailForm';
import Footer from './components/Footer';
import ContactUsPage from './components/ContactUsPage';
import Bookings from './components/Bookings';
import UpcomingReleases from './components/UpcomingReleases';

import FindUs from './components/FindUs';
import PlacesToGoPage from './components/PlacesToGoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forum from './components/Forum';

import Classification from './components/Classification';



function App() {
 
  return (

    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/ContactUs" element={<ContactUsPage />}></Route>
          <Route path="/NewReleases" element={<NewReleases />}></Route>
          <Route path="/UpcomingReleases" element={<UpcomingReleases />}></Route>
          <Route path="/Bookings" element={<Bookings />}></Route>
          <Route path="/FindUs" element={<FindUs />}></Route>
          <Route path="/PlacesToGo" element={<PlacesToGoPage />}></Route>
          <Route path="/Forum" element={<Forum />}></Route>

        </Routes>
        <Footer />
      </Router>
      {/* <Classification/> */}
    </>

  );
}

export default App;
