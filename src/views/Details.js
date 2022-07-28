import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Countrys from "../components/Countrys";
// import Countrys from "../Component/Countrys";
// import CreateCards from "../CreateCards";
// import CreateCards from "../CreateCards";

function Details() {
  let { name } = useParams();
  // console.log("name: ", name);
  // console.log("useParams()>>>", useParams());
  // Second Fetch function with Name of the country
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const fecthDetails = async () => {
    try {
      // const response = await fetch("https://restcountries.com/v2/all");
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const results = await response.json();
      console.log("results :>> ", results);
      setLoader(false);
      // console.log("results>>>", results);
      setDetails(results[0]);
    } catch (error) {
      console.log("error  :>>", error);
      setError(error.message);
    }
  };
  useEffect(() => {
    fecthDetails();
  }, []);

  return (
    <>
      <Link to="/countrys">
        {" "}
        <Button variant="primary">Go BACK</Button>
      </Link>
      {!loader && (
        <>
          <h2>{details.capital}</h2>
          {/* <p>{details.name.official} </p> */}

          <MapContainer
            center={[details.latlng[0], details.latlng[1]]}
            zoom={4}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "600px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                details.capitalInfo.latlng[0],
                details.capitalInfo.latlng[1],
              ]}
            >
              <Popup>
                you see the all location of this country
                <br /> the capital is {details.capital}
              </Popup>
            </Marker>
          </MapContainer>
        </>
      )}
    </>
  );
}

export default Details;
