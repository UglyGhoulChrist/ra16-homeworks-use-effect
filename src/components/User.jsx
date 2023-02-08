import React from "react";
import "./User.css";

function User({ id, name }) {
  return <li className="user">{name}</li>;
}

export default User;
