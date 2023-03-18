import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
// import NewsFeed from "./pages/NewsFeed/NewsFeed";
import RequiredAuth from "./components/authentication/RequiredAuth";
import Account from "./pages/Account/Account";

import EditProfile from "./pages/Account/EditProfile";
import Error404 from "./pages/Error404/Error404";
import CreateIdea from "./pages/SubmitIdea/CreateIdea";
import EventIdea from "./pages/SubmitIdea/eventIdea";
import UserProfile from "./pages/Account/UserProfile";
import { useEffect, useState } from "react";
import { apiProfile } from "./api/Api";

function App() {
  const [dataUser, setDataUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    fetch(apiProfile, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataUser(data);
      })
      .catch((err) => console.log("gg"));
  }, [token]);

  const handleSetToken = (data) => {
    setToken(data);
  };
  console.log(dataUser);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/Login"
          element={<Authentication handleSetToken={handleSetToken} />}
        />
        <Route
          path="/"
          element={
            <RequiredAuth dataUser={dataUser}>
              <Event />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/event"
          element={
            <RequiredAuth dataUser={dataUser}>
              <Event />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/accounts"
          element={
            <RequiredAuth dataUser={dataUser}>
              <Account />
            </RequiredAuth>
          }
        ></Route>{" "}
        <Route
          path="/profile"
          element={
            <RequiredAuth dataUser={dataUser}>
              <UserProfile
                dataUser={dataUser}
                setDataUser={() => {
                  setDataUser();
                }}
              />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/EditProfile"
          element={
            <RequiredAuth dataUser={dataUser}>
              <EditProfile
                dataUser={dataUser}
                setDataUser={() => {
                  setDataUser();
                }}
              />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/Category"
          element={
            <RequiredAuth dataUser={dataUser}>
              <Category />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/MyIdea"
          element={
            <RequiredAuth dataUser={dataUser}>
              <EventIdea />
            </RequiredAuth>
          }
        />
        <Route
          path="/createIdea"
          element={
            <RequiredAuth dataUser={dataUser}>
              <CreateIdea dataUser={dataUser} />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
