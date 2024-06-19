import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MainDishes from "./components/MainDishes";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Menu/MainDishes" element={<MainDishes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
