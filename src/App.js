import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import './scss/origin.scss';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AboutUs from './components/About Us/AboutUs';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner/>

      <Routes>

        <Route path="/cafeteria" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog/:id" element={<Blog />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
