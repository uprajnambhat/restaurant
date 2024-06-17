import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
      </Routes>
    </div>
  );
}

export default App;
