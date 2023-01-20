import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [apartmentsArr, setapartmentsArr] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/apartments")
      .then((response) => {
        setapartmentsArr(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList apartmentsArr={apartmentsArr}/>} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails apartmentsArr={apartmentsArr} />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
