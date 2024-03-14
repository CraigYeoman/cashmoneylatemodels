import { Router, Route, Routes } from "react-router-dom";
import "./index";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Schedule from "./components/Schedule"
import Rules from "./components/Rules"
import NewsHome from "./components/NewsHome";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/news" element={<NewsHome />}></Route>
        <Route path="/newsdetail" element={<NewsDetail />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
