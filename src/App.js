import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import './scss/origin.scss';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner/>

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
