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
import SingleOrder from "./components/Orders/SingleOrder";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order/:orderId" element={<SingleOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
