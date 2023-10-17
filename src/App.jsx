import { Route, Routes } from "react-router-dom";
import { Vehicle } from "./Vehicle";
import "./Vehicle.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Vehicle />} />
      <Route path="/EMI" element={<Vehicle/>} />
    </Routes>
  );
}

export default App;
