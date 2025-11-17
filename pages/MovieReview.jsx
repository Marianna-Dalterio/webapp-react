import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:3000/movies"
import MovieReviews from "../components/MovieReviews";


export default function MovieReview() {
    const { id } = useParams();
    const [movieReview, setMovieReview] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                console.log(res);
                setMovieReview(res.data);
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [id])

    return (
        <>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid d-flex gap-4 py-5">
                    <div className="cover col-12 col-sm-5 col-md-4">
                        <img className="img-fluid " src={movieReview?.image} alt={movieReview?.title} />
                    </div>
                    <div className="details">
                        <h1 className="display-5 fw-bold">{movieReview?.title}</h1>
                        <p className="lead">
                            {movieReview?.abstract}
                        </p>
                        <span className="director d-block bi-person-circle"> {movieReview?.director} </span>
                        <span className="genre d-block bi-tag-fill"> {movieReview?.genre} </span>
                        <span className="release_year d-block bi-calendar-fill"> {movieReview?.release_year} </span>
                    </div>


                </div>
            </div>

            {/* reviews list */}
            <section className="reviews">

                <div className="container mb-4">
                    {movieReview?.reviews?.map(review => (
                        <MovieReviews key={review.id} review={review} />
                    )

                    )}

                </div>
            </section>

            {/* review form */}
            <div className="container">
                <section className="write_review mb-4">
                    <h3>Lascia la tua recensione</h3>
                    <form>
                        <div className="mb-3">
                            <input type="text" name="name" className="form-control mb-3" id="name" placeholder="Il tuo nome" />
                            <textarea name="review" id="review" className="form-control mb-3" rows="3" placeholder="Scrivi qui"></textarea>
                            <select name="rating" id="rating" className="form-select mb-3">
                                <option value="1">1 Pessimo</option>
                                <option value="2">2 Scarso</option>
                                <option value="3">3 Discreto</option>
                                <option value="4">4 Buono</option>
                                <option value="5">5 Eccellente</option>
                            </select>
                            <button className="btn btn-dark mt-3">Invia</button>
                        </div>
                    </form>
                </section>
            </div>

        </>
    )
};