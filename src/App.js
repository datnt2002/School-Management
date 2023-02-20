import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Header from "./components/header/Header";
import Category from "./pages/Category/Category";
import SubNavAdmin from "./components/subNav/SubNavAdmin";

function App() {
  return (
    <div className="App">
      {/* <Authentication /> */}
      <Header />
      <SubNavAdmin/>
      {/* <NewsFeed /> */}
    </div>
  );
}

export default App;
