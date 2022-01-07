import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Users from './components/Users/Users';
import Orders from './components/Orders/Orders';
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'
import NotFound from './shared/404/NotFound'
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
