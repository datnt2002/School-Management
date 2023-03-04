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
        >
        <Route
          path="/Category/CreateNewCategory"
          element={
            <RequiredAuth>
              <CreateNewCategory />
            </RequiredAuth>
          }
        ></Route>
        </Route>
        <Route
          path="/Event/*"
          element={
            <RequiredAuth>
              <Event />
            </RequiredAuth>
          }
        />
        <Route
          path="/Event/CreateNewEvent"
          element={
            <RequiredAuth>
              <CreateNewEvent />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/Category/CreateNewCategory"
          element={
            <RequiredAuth>
              <CreateNewCategory />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/NewsFeed"
          element={
            <RequiredAuth>
              <NewsFeed />{" "}
            </RequiredAuth>
          }
        />
      </Routes> */}
      {/* <Account /> */}
      {/* <Event /> */}
      {/* <Category /> */}
      <UserProfile/>
    </div>
  );
}

export default App;
