import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import People from "./Components/People/People";
import Register from "./Components/Register/Register";
import TvShows from "./Components/TvShows/TvShows";
import Movies from "./Components/Movies/Movies"
import Logout from "./Components/Logout/Logout";
function App() {
  return (
   <div className="all">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="People" element={<People />} />
          <Route path="Register" element={<Register />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
