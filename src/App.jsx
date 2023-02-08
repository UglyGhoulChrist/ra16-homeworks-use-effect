import { useState, useEffect } from "react";
import "./App.css";
import Details from "./components/Details";
import List from "./components/List";

function App() {
  const URL_USERS =
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  const [users, setUsers] = useState([]);
  const [detailsUser, setDetailsUser] = useState({});
  console.log(users);

  useEffect(() => {
    fetch(URL_USERS)
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => {})
      .finally(() => {});
  }, []);

  const handleUser = (id) => {
    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    )
      .then((response) => response.json())
      .then((json) => setDetailsUser(json))
      .catch(() => {})
      .finally(() => {});
  };

  return (
    <div className="App">
      <List handleUser={handleUser} users={users} />
      <Details {...detailsUser} />
    </div>
  );
}

export default App;
