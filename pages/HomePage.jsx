import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">Scopri la nostra lista film </h1>
                    <p className="col-md-8 fs-4">
                        Qui puoi trovare tutti i film recensiti dalla nostra community. Sfoglia la lista per scoprire nuovi titoli, leggere le recensioni degli utenti e aggiungere le tue opinioni sui film che hai visto.
                    </p>
                </div>
            </div>

            <div className="section mb-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <Link to="/movies/:id">
                                    <img className="card-img-top" src="" alt="img" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title"> Title </h5>
                                    <div className="my-2"> Author Name</div>
                                    <Link className="btn btn-dark" role="button" to="/movies/:id"> Vedi dettagli </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-dark btn-lg mt-5"> Carica altri film</button>
                </div>
            </div>
        </>
    )
}; 