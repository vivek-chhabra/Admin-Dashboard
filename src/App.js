import PageNotFound from "./components/pagenotfound/PageNotFound";
import SinglePage from "./components/singlePage/SinglePage";
import { AuthContext } from "./context/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./pages/products/Products";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/product/Product";
import Signup from "./pages/signup/Signup";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import "./styles/main.scss";

function App() {
    return (
        <div className="App container">
            <Navbar />
            <div className="middle flex">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/products" element={<Users />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
