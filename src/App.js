import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/homepage';
import Brandpage from './components/Brandpage/brandpage';
import Countrypage from './components/Countrypage/CountryPage';
import Page404 from './components/Page404/page404';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path=":countryName" element={<Countrypage />} />
        <Route path="brand" element={<Brandpage />}>
          <Route path=":brandID" element={<Brandpage />} />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>

    </div>
  );
}

export default App;
