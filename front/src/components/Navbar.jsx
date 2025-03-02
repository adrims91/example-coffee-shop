import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <nav className="bg-amber-200 flex justify-between items-center">
            <div>
                <img className="w-20 rounded-full ml-20" src="logo.jpg" alt="" />
            </div>
            <div>
                <Link className="mr-20 border bg-black text-white p-2 rounded-2xl font-serif" to={'/login'}>Iniciar Sesión</Link>
            </div>
        </nav>
    )
}

export default Navbar;