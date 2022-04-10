import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
