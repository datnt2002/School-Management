import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import RequiredAuth from "./components/authentication/RequiredAuth";
import Account from "./pages/Account/Account";

import EditProfile from "./pages/Account/EditProfile";
import Error404 from "./pages/Error404/Error404";
import CreateIdea from "./pages/SubmitIdea/CreateIdea";
import EventIdea from "./pages/SubmitIdea/EventIdea";
import UserProfile from "./pages/Account/UserProfile";
import { useEffect, useState } from "react";
import { apiProfile } from "./api/Api";
import DetailIdea from "./pages/NewsFeed/DetailIdea";
import ListIdea from "./pages/Event/ListIdea";
import DashBoard from "./pages/DashBoardMain/DashBoard";
import Home from "./pages/LandingPage/Home";

function App() {
  const [dataUser, setDataUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(apiProfile, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch(() => console.log("fetch api profile in App.js"));
  }, [token]);

  useEffect(() => {
    setDataUser(apiData);
  }, [apiData]);

  const handleSetToken = (data) => {
    setToken(data);
  };

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
              <Home />
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
        ></Route>
        <Route
          path="/profile"
          element={
            <RequiredAuth dataUser={dataUser}>
              <UserProfile
                dataUser={dataUser}
                setDataUser={(newUser) => {
                  setApiData(newUser);
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
          path="/AllEvent"
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
        <Route
          path="/NewsFeed"
          element={
            <RequiredAuth dataUser={dataUser}>
              <NewsFeed dataUser={dataUser} />
            </RequiredAuth>
          }
        />
        <Route
          path="/DetailIdea"
          element={
            <RequiredAuth dataUser={dataUser}>
              <DetailIdea
                dataUser={dataUser}
                setDataUser={(newUser) => {
                  setApiData(newUser);
                }}
              />
            </RequiredAuth>
          }
        />
        <Route
          path="/editProfile"
          element={
            <RequiredAuth dataUser={dataUser}>
              <EditProfile
                dataUser={dataUser}
                setDataUser={(newUser) => {
                  setApiData(newUser);
                }}
              />
            </RequiredAuth>
          }
        />
        <Route
          path="/ListIdea"
          element={
            <RequiredAuth dataUser={dataUser}>
              <ListIdea dataUser={dataUser} />
            </RequiredAuth>
          }
        />
        <Route
          path="/DashBoard"
          element={
            <RequiredAuth dataUser={dataUser}>
              <DashBoard />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
