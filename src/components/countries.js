import React from "react";
import { Link } from "react-router-dom";
import "./country.scss";

import Country from "./country";

const Countries = (props) => (
  <div className="container-country">
    {props.countries.map((country) => (
      <Link exact="true" to="/country" className="country" key={country.alpha2Code}>
        <Country info={country} />  
      </Link>
    ))}
  </div>
);
export default Countries;