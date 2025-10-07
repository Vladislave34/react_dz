const Card = ({
    title,
    description,
    image,
    year,
    producer
              }) => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={image} alt="Example" />
                </div>
                <div className="card-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{year}</p>
                    <p>{producer}</p>

                </div>
            </div>
        </>
    )
}
export default Card;