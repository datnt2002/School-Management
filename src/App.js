import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import RequiredAuth from "./components/authentication/RequiredAuth";
import Account from "./pages/Account/Account";
import UserProfile from "./pages/Account/UserProfile";
import EditEvent from "./pages/Event/EditEvent";
import CreateIdea from "./pages/NewsFeed/CreateIdea";
import Error404 from "./pages/Error404/Error404";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/Login" element={<Authentication />} />
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Event />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/event"
          element={
            <RequiredAuth>
              <Event />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/accounts"
          element={
            <RequiredAuth>
              <Account />
            </RequiredAuth>
          }
        ></Route> */}
        {/* <Route
          path="/Category/*"
          element={
            <RequiredAuth>
              <Category />
            </RequiredAuth>
          }
        ></Route>
        {/* <Route path="/Event" element={<Event />} /> */}
        {/* <Route
          path="/NewsFeed"
          element={
            <RequiredAuth>
              <NewsFeed />
            </RequiredAuth>
          }
        />  */}
        {/* <Route path="*" element="404" /> */}
      {/* </Routes> */}
      <Header/>
    </div>
  );
}

export default App;
