import React from "react";
import "./Details.css";

function Details({ id, name, avatar, details }) {
  return (
    <div className="details">
      <img src={avatar} alt="avatar" />
      <h2>{name}</h2>
      <div>City: {details?.city}</div>
      <div>Company: {details?.company}</div>
      <div>Position: {details?.position}</div>
    </div>
  );
}

export default Details;
