import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

const Layout = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/'></Route>
      </Routes>
    </Router>
  )
}

export default Layout;
