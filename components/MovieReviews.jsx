export default function MovieReviews({ review }) {

    return (
        <div className="list-group mb-2" key={review.id}>
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{review.name}</h5>
                </div>
                <p className="mb-1">{review.text}</p>
                <small className="bi-star-fill me-2">{review.vote}</small>
            </a>
        </div>
    )
}