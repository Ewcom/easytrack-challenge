import "./App.css";
import Navbar from "./components/ui/navbar/Navbar";
import SearchBar from "./components/ui/searchBar/SearchBar";
import SortBar from "./components/ui/sortBar/SortBar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <SearchBar />
        <SortBar />
      </main>
    </div>
  );
}

export default App;
