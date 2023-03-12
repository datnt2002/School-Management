import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import RequiredAuth from "./components/authentication/RequiredAuth";
import Account from "./pages/Account/Account";
import UserProfile from "./pages/Account/UserProfile";
import EditEvent from "./pages/Event/EditEvent";
import Error404 from "./pages/Error404/Error404";
import CreateIdea from "./pages/NewsFeed/CreateIdea";
import EventIdea from "./pages/NewsFeed/eventIdea";

function App() {
  return (
    <div className="App">
      <Routes>
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
        ></Route>{" "}
        <Route
          path="/profile"
          element={
            <RequiredAuth>
              <UserProfile />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/Category"
          element={
            <RequiredAuth>
              <Category />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/MyIdea"
          element={
            <RequiredAuth>
              <EventIdea />
            </RequiredAuth>
          }
        />
        <Route
          path="/createIdea"
          element={
            <RequiredAuth>
              <CreateIdea />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
