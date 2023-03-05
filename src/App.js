import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
import CreateNewEvent from "./pages/Event/CreateNewEvent";
import CreateNewCategory from "./pages/Category/CreateNewCategory";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import RequiredAuth from "./components/authentication/RequiredAuth";
import Account from "./pages/Account/Account";
import UserProfile from "./pages/Account/UserProfile";
import CreateIdea from "./pages/NewsFeed/CreateIdea";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/Login" element={<Authentication />}></Route>
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
          path="/Event/*"
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
      </Routes> */}
      {/* <Authentication/> */}
      <Category />
      {/* <Event /> */}
      {/* <CreateIdea/> */}
    </div>
  );
}

export default App;
