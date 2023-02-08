import React from "react";
import "./User.css";

function User({ id, name }) {
  return (
    <li className="user">
      <span>id:{id}</span> - {name}
    </li>
  );
}

export default User;
