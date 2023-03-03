import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";
import Event from "./pages/Event/Event";
import CreateNewEvent from "./pages/Event/CreateNewEvent";
import CreateNewCategory from "./pages/Category/CreateNewCategory";
import NewsFeed from "./pages/NewsFeed/NewsFeed";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Authentication />}></Route>
        <Route path="/Category/*" element={<Category />}></Route>
        <Route path="/Event/*" element={<Event />} />
        <Route
          path="/Event/CreateNewEvent"
          element={<CreateNewEvent />}
        ></Route>
        <Route
          path="/Category/CreateNewCategory"
          element={<CreateNewCategory />}
        ></Route>
        <Route path="/NewsFeed" element={<NewsFeed />} />
      </Routes> */}
      <Category />
    </div>
  );
}

export default App;
