const Pet = ({
    name,
    description,
    image
             }) => {
  return (
      <>
          <div className="card">
              <div className="card-image">
                  <img src={image} alt="Example" />
              </div>
              <div className="card-content">
                  <h2>{name}</h2>
                  <p>{description}</p>


              </div>
          </div>
      </>
  )
}
export default Pet