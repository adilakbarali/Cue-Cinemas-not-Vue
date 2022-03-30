import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import HomeSlideShow from './components/HomeSlideShow';
import AboutUs from './components/AboutUs';

import NewReleases from './components/NewReleasesPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage/> */}
      {/* <AboutUs/> */}
      <NewReleases></NewReleases>
    </div>
  );
}

export default App;
