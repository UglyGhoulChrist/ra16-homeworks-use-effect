import { useState, useEffect } from "react";
import "./App.css";
import Details from "./components/Details";
import List from "./components/List";

function App() {
  const URL_PATH =
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";
  // Все Юзеры
  const [users, setUsers] = useState([]);
  // Путь до Юзера по которому кликнули
  const [pathUser, setPathUser] = useState(null);
  // Детали Юзера по которому кликнули
  const [detailsUser, setDetailsUser] = useState({});
  // Загружаем ?
  const [isLoading, setIsLoading] = useState(false);

  function getUsers(url, fun) {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => fun(json))
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    // Загрузка всех Юзеров
    !users.length && getUsers(URL_PATH + "users.json", setUsers);
    // Загрузка Юзера по ИД
    pathUser && getUsers(pathUser, setDetailsUser);
  }, [pathUser]);

  const handleUser = (id) => {
    setPathUser(URL_PATH + id + ".json");
  };

  return (
    <div className="App">
      <List handleUser={handleUser} users={users} />
      {pathUser &&
        ((isLoading && "Loading ...") || <Details {...detailsUser} />)}
    </div>
  );
}

export default App;
