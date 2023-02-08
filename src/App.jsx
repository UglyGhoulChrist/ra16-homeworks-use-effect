import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const URL_USERS =
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch(URL_USERS)
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => {})
      .finally(() => {});
  }, []);

  return (
    <div className="App">
      <List users={users} />
    </div>
  );
}

export default App;
