import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <>
            <nav className="navbar navbar-expand bg-light border-bottom">
                <div className="container">
                    <span className="navbar-brand">
                        <i class="bi bi-film me-2"></i>
                        MOVIES
                    </span>
                    <div className="navbar-nav gap-2">
                        <NavLink className="nav-link" to="/movies"> <i class="bi bi-house"></i> Home </NavLink>
                        <NavLink className="nav-link" to="/movies/:id"> <i class="bi bi-star-fill"></i> Movie Review </NavLink>
                    </div>
                </div>

            </nav>
        </>
    )
};