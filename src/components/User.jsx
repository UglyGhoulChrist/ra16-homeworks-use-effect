import React from "react";
import "./User.css";

function User({ id, name, handleUser }) {
  return (
    <li onClick={() => handleUser(id)} className="user">
      {name}
    </li>
  );
}

export default User;
