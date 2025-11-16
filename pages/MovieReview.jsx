import { useParams } from "react-router-dom";

export default function MovieReview() {
    const { id } = useParams();

    return (
        <>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid d-flex gap-4 py-5">
                    <div className="cover col-12 col-sm-5 col-md-4">
                        <img className="img-fluid " src="https://mr.comingsoon.it/imgdb/locandine/big/47397.jpg" alt="img" />
                    </div>
                    <div className="details">
                        <h1 className="display-5 fw-bold">Titolo</h1>
                        <p className="lead">
                            Abstract: a jaded superhero (Ryan Reynolds) decides to embrace his
                            supervillain side after a near-death experience and reunites with an old
                            enemy (T.J. Miller) to form a team of ruthless mercenaries. But when
                            the emergence of a new foe (Zazie Beetz) threatens to destroy
                            everything, Deadpool must don his suit once again and save the world.
                        </p>
                        <span className="director d-block bi-person-circle"> Christopher Nolan </span>
                        <span className="genre d-block bi-tag-fill"> Science Fiction </span>
                        <span className="release_year d-block bi-calendar-fill"> 2010 </span>
                    </div>


                </div>
            </div>

            <section className="reviews">
                <div className="container mb-4">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Name</h5>
                            </div>
                            <p className="mb-1">Some placeholder content in a paragraph.</p>
                            <small className="bi-star-fill">Vote</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Name</h5>
                            </div>
                            <p className="mb-1">Some placeholder content in a paragraph.</p>
                            <small className="bi-star-fill">Vote</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Name</h5>
                            </div>
                            <p className="mb-1">Some placeholder content in a paragraph.</p>
                            <small className="bi-star-fill">Vote</small>
                        </a>

                    </div>
                </div>
            </section>

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