import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import RequiredAuth from "./components/authentication/RequiredAuth";
import Account from "./pages/Account/Account";
import UserProfile from "./pages/Account/UserProfile";
import { useEffect, useState } from "react";
import useDecodedToken from "./hooks/useDecodedToken";

function App() {
  const [token, setToken] = useState(null);
  const decodedToken = useDecodedToken(token);

  useEffect(() => {
    const getToken = async () => {
      await setToken(localStorage.getItem("token"));
      // console.log("re-render" + token);
    };
    getToken();
  }, [token]);

  // console.log("render");
  // console.log(token);
  return (
    <div className="App">
      <Routes>
        <Route path="/"></Route>
        <Route
          path="/Category/*"
          element={
            <RequiredAuth>
              <Category />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/Event"
          element={
            <RequiredAuth>
              <Event />
            </RequiredAuth>
          }
        />
        <Route
          path="/NewsFeed"
          element={
            <RequiredAuth>
              <NewsFeed />
            </RequiredAuth>
          }
        />
        <Route path="*" element="404" />
      </Routes>
    </div>
  );
}

export default App;
