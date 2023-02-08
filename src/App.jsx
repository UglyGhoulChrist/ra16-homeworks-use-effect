import { useState, useEffect } from "react";
import "./App.css";
import Details from "./components/Details";
import List from "./components/List";

function App() {
  const URL_USERS =
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  const [users, setUsers] = useState([]);
  console.log(users);

  const devUser = {
    id: 1,
    name: "Dorthy McClure Sr.",
    avatar: "https://i.pravatar.cc/300",
    details: {
      city: "Sipesfort",
      company: "Hilll LLC",
      position: "Regional Identity Supervisor",
    },
  };

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
      <Details {...devUser} />
    </div>
  );
}

export default App;
