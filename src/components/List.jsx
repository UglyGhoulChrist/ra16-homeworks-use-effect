import React from "react";
import "./List.css";
import User from "./User";

function List({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
}

export default List;
