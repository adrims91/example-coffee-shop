import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const Layout = () => {

    return (
        <Router>
            <MyNavbar />
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Menu />} path="/menu" />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Layout;