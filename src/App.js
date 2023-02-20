import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Header from "./components/header/Header";
import Category from "./pages/Category/Category";
import SemiHeader from "./components/SemiHeader/SemiHeader";

function App() {
  return (
    <div className="App">
      {/* <Authentication /> */}
      <Header />
      <SemiHeader />
      {/* <NewsFeed /> */}
      <Category />
    </div>
  );
}

export default App;
