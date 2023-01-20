import { Link, useParams } from "react-router-dom";

function ApartmentDetails(props) {

  console.log(props)
  const { apartmentId } = useParams();
  console.log(apartmentId)

  const details = props.apartmentsArr?.find((apartmentDetails) => {
    console.log(apartmentDetails)
    return apartmentDetails._id === apartmentId;
  });

  const renderDetails = () => {
    return (
      <div>
        <h1>{details.title} </h1>
        <img src={details.img} alt={details.title}/>
        Price: {details.pricePerDay} <br />
      </div>
    );
  };

  return (
    <div>
      {details && renderDetails()}

      <Link to="/">Back</Link>
    </div>
  );
}

export default ApartmentDetails;
