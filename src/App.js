import Header from "./components/header/Header";
import SubNavAdmin from "./components/subNav/SubNavAdmin";
import Authentication from "./pages/Authentication/Authentication";
import CreateNewEvent from "./pages/Event/CreateNewEvent";
import CreateIdea from "./pages/NewsFeed/CreateIdea";

function App() {
  return (
    <div className="App">
      <Header />
      <SubNavAdmin />
      {/* <Authentication/> */}
      {/* <CreateIdea/> */}
      {/* <CreateNewEvent/> */}
    </div>
  );
}

export default App;
