import PageNotFound from "./components/pagenotfound/PageNotFound";
import { AuthContext } from "./context/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./pages/products/Products";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/signup/Signup";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { useContext } from "react";
import "./styles/main.scss";

function App() {
    // const {user} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar />
            <div className="middle flex">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Users />}/>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
