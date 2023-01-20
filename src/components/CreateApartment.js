import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setpricePerDay] = useState("");

  const newApartment = {
    title: title,
    img: img,
    pricePerDay: pricePerDay,
  };

  const createNewApartment = (e) => {
    e.preventDefault();
    console.log(newApartment);
    axios
      .post(process.env.REACT_APP_API_URL + "/apartments", newApartment)
      .then((response) => {
        console.log(response);
        navigate('/apartments')
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h2>Create new apartment </h2>
      <form onSubmit={createNewApartment}>
        <label>
          Image URL:
          <input
            type="text"
            name="img"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Price per day:
          <input
            type="text"
            name="pricePerDay"
            onChange={(e) => {
              setpricePerDay(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CreateApartment;
