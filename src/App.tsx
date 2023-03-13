import "./App.css";
import TruckCard from "./components/shipments/TruckCard";
import Navbar from "./components/ui/navbar/Navbar";
import SearchBar from "./components/ui/searchBar/SearchBar";
import SortBar from "./components/ui/sortBar/SortBar";
import { truckInfoArray } from "./dummyData";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TruckMenu from "./components/TruckMenu/TruckMenu";
import { ITruckInfo } from "./interfaces/index";

const truckData = truckInfoArray;

interface IMainContainerStylesProps {
  isOpen?: boolean;
}

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);
  const [nav, setNav] = useState<"shipments" | "editTruck">("shipments");
  const [selectedTruck, setSelectedTruck] = useState<ITruckInfo | null>(null);

  useEffect(() => {
    if (selectedTruck) {
      setNav("editTruck");
    }
  }, [selectedTruck]);

  return (
    <div className="App">
      <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
      <MainContainer isOpen={isNavbarOpen}>
        {nav === "shipments" ? (
          <>
            <SearchBar />
            <SortBar />
            <div className="cardContainer">
              {truckData.map((truck) => {
                return (
                  <TruckCard
                    onClick={() => {
                      setSelectedTruck(truck);
                    }}
                    truckData={truck}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <TruckMenu truck={selectedTruck!} />
        )}
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.main<IMainContainerStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 300px)" : "100%")};
  margin-left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  transition: all 0.3s ease-in-out;

  .cardContainer {
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export default App;
