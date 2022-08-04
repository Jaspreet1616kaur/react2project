import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Table from "react-bootstrap/Table";
import "./DetailsTable.css";
import Countrys from "../components/Countrys";
function Details() {
  let { name } = useParams();

  // Second Fetch function with Name of the country
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  const [currencyCode, setCurrencyCode] = useState(null);
  const fecthDetails = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const results = await response.json();
      console.log("results :>> ", results);
      setLoader(false);
      // console.log("results>>>", results);
      setDetails(results[0]);
      setCurrencyCode(Object.keys(results[0].currencies));
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
          <p>
            {" "}
            <h1>{details.name.official} </h1>
          </p>
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
          <Table striped bordered hover size="sm">
            <thead>
              <h1>About Country Data </h1>
              <tr>
                <th>
                  <h2>Population</h2>
                </th>
                <td>
                  {" "}
                  <h2>{details.population}</h2>{" "}
                </td>
              </tr>
              <tr>
                <th>
                  {" "}
                  <h2>Currencies</h2>
                </th>
                <td>
                  <h2>
                    {" "}
                    {console.log(
                      "object entries",
                      Object.entries(details.currencies)
                    )}
                    {/* for currencies */}
                    {details.currencies &&
                      Object.entries(details.currencies).map((element) => {
                        return (
                          <td>
                            {/* {element[0]} : {element[1].name} */}
                            {element[1].name}
                          </td>
                        );
                      })}
                  </h2>
                </td>
              </tr>
              <tr>
                <th>
                  <h2>Languages</h2>
                </th>
                <td>
                  <h2>
                    {" "}
                    {details.languages &&
                      Object.entries(details.languages).map((element) => {
                        return <td>{element[1]}</td>;
                      })}
                  </h2>
                </td>
              </tr>
              <tr>
                <th>
                  <h2>Flag</h2>
                </th>
                <td>
                  {" "}
                  <h2>{details.flag}</h2>{" "}
                </td>
              </tr>
              <tr>
                <th>
                  <h2>Capital</h2>
                </th>
                <td>
                  {" "}
                  <h2>{details.capital}</h2>{" "}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr> </tr>
            </tbody>
          </Table>
        </>
      )}

      {/* here i create a table for all countrys information */}
    </>
  );
}

export default Details;
