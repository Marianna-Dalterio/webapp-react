import { Link } from "react-router-dom";

export default function AppFooter() {
    return (
        <>
            <div className="bg-light border-bottom ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="logo"> <i className="bi bi-film me-2 fs-4"> </i> MOVIES </div>
                        </div>
                        <div className="col">
                            <h4>Links</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/movies">Home</Link></li>
                                <li><Link to="/movies/:id">Movie Review</Link></li>

                            </ul>
                        </div>
                        <div className="col">
                            <h4>Contact Us</h4>
                            <span><i className="bi bi-envelope me-2 fs-3"></i></span>
                            <span><i className="bi bi-facebook me-2 fs-3"></i></span>
                            <span><i className="bi bi-instagram me-2 fs-3"></i></span>
                            <span><i className="bi bi-twitter-x me-2 fs-3"></i></span>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
};