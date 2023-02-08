import React from "react";
import "./List.css";
import User from "./User";

function List({ users, handleUser }) {
  return (
    <ul className="list">
      {users.map((user) => (
        <User key={user.id} {...user} handleUser={handleUser} />
      ))}
    </ul>
  );
}

export default List;
