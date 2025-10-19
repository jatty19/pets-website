import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Blogs from "./pages/Blogs";
// import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <div className="min-h-screen">
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'register' && <Register setCurrentPage={setCurrentPage} />}
      {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
    </div>
  );
};
export default App;
