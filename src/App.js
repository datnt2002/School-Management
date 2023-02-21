import Header from "./components/header/Header";
import SubNavAdmin from "./components/subNav/SubNavAdmin";
import CreateNewCategory from "./pages/Category/CreateNewCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <SubNavAdmin/>
      <CreateNewCategory/>
    </div>
  );
}

export default App;