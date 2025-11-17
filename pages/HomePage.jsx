import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const API_URL = "http://localhost:3000/movies"

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res);
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])


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
                        {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />
                        ))}

                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-dark btn-lg mt-5"> Carica altri film</button>
                </div>
            </div>
        </>
    )
}; 