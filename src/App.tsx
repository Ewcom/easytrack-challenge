import "./App.css";
import ShipmentCard from "./components/shipments/ShipmentCard";
import Navbar from "./components/ui/navbar/Navbar";
import SearchBar from "./components/ui/searchBar/SearchBar";
import SortBar from "./components/ui/sortBar/SortBar";
import { truckInfoArray } from "./dummyData";

const truckData = truckInfoArray;

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <SearchBar />
        <SortBar />
        <div className="cardContainer">
          {truckData.map((truck) => {
            return <ShipmentCard truckData={truck} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
