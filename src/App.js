import './App.css';
import AppNavbar from './AppNavbar.js';
import CollegeList from './CollegeList';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Home from './Home.js';
import MiddleText from './MiddleText';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Home />
      <MiddleText />
      <CollegeList />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
