import { Link } from "react-router-dom";

// destrutturo l'oggetto props estraendo direttamente la proprietà movie dall'oggetto props


export default function MovieCard({ movie }) {

    return (
        <div className="col" >
            <div className="card">
                <Link to={`/movies/${movie.id}`}>
                    <img className="card-img-top" src={movie.image} alt={movie.title} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title"> {movie.title} </h5>
                    <div className="my-2"> {movie.director} </div>
                    <Link className="btn btn-dark" role="button" to={`/movies/${movie.id}`}> Vedi dettagli </Link>
                </div>
            </div>
        </div>
    )
};