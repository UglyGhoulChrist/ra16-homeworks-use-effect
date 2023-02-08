import React from "react";
import "./List.css";
import User from "./User";

function List({ users }) {
  return (
    <ul className="list">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
}

export default List;
