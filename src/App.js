import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MainDishes from "./components/MainDishes";
import BreakFastItems from "./components/BreakFastItems";
import Dessert from "./components/Dessert";
import BrowseAll from "./components/BrowseAll";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Menu/MainDishes" element={<MainDishes />}></Route>
        <Route path="/Menu/BreakFastItems" element={<BreakFastItems />}></Route>
        <Route path="/Menu/DessertMenu" element={<Dessert />}></Route>
        <Route path="/Menu/BrowseAll" element={<BrowseAll />}></Route>
      </Routes>
    </div>
  );
}

export default App;
