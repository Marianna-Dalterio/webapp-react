import { Link } from "react-router-dom";

export default function Welcome() {

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">Benvenuto sul nostro sito di recensioni per film!</h1>
                    <p className="col-md-8 fs-4">
                        Qui puoi trovare recensioni dettagliate sui tuoi film preferiti, scritte da appassionati come te. Aggiungi le tue recensioni e condividi le tue opinioni con la nostra comunità di amanti del cinema.
                        Dai uno sguardo alle recensioni esistenti per scoprire nuovi film da guardare o per vedere cosa ne pensano gli altri!
                    </p>
                    <Link className="btn btn-primary btn-lg" to="/movies" role="button">
                        Scopri di più
                    </Link>
                </div>
            </div>

        </>
    )
}