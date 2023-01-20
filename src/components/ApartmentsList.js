import { Link } from "react-router-dom";

function ApartmentsList(props) {

  return (
    <div>
      <h1>All the Apartments</h1>

      {props.apartmentsArr === null
        ? "loading..."
        : props.apartmentsArr.map((apartmentObj) => {
            return (
              <div className="apartmentObj" key={apartmentObj._id}>
                <img src="{apartmentObj.img}" alt="apartment picture" />
                <h2>{apartmentObj.title}</h2>
                <p>Price /day: {apartmentObj.pricePerDay}</p>
                <Link to={"/apartments/" + apartmentObj._id}>More Details</Link>
              </div>
            );
          })}
    </div>
  );
}

export default ApartmentsList;
