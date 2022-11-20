import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import MainShoes from "./components/MainShoes";
import Shoes from "./components/Shoes";
import "./images/pexels-photo-609771.jpeg";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const [ShoesData, setShoesData] = useState({});

  return (
    <div className="App">
      <Nav />
      {isLoading && <h2 className="spinner">loading....</h2>}
      <Routes>
        <Route path="/" element={<main />} />
        <Route
          path="/shoes"
          element={<MainShoes setIsLoading={setIsLoading} />}
        />
        <Route
          path="/shoes/:id"
          element={<Shoes setIsLoading={setIsLoading} />}
        />

        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}
export default App;
