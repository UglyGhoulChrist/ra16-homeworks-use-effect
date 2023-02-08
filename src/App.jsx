import { useState, useEffect } from "react";
import "./App.css";

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

  return <div className="App">Use Effect</div>;
}

export default App;
