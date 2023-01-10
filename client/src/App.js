import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPages from "./pages/LandingPages";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPages />} />
    </Routes>
  );
}

export default App;
