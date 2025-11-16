import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export default function AppHeader() {
    return (
        <>
            <nav className="navbar navbar-expand bg-light border-bottom mb-3">
                <div className="container">
                    <span className="navbar-brand">
                        <Link className="link text-dark text-decoration-none" to="/" > <i className="bi bi-film me-2"></i> MOVIES</Link>


                    </span>
                    <div className="navbar-nav gap-2">
                        <NavLink className="nav-link" to="/movies"> <i className="bi bi-house"></i> Home </NavLink>
                        <NavLink className="nav-link" to="/movies/:id"> <i className="bi bi-star-fill"></i> Movie Review </NavLink>
                    </div>
                </div>

            </nav>
        </>
    )
};