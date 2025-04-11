import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { CheckDetail, FactCheck, Login, Signup } from "./Pages";
import FactCheckDatabase from "./Pages/FactcheckDatabase";


function App() {
  return (
    <div>
     
      <div className="pt-16"> 
      <Navbar />
      <Routes>
          <Route path="/" element={<div> <FactCheck/></div>} />
          <Route path="/checkdetail" element={<div> <CheckDetail/></div>} />
          <Route
            path="/factcheck-database"
            element={
              <div>
                <FactCheckDatabase />
              </div>
            }
          />
          <Route path="/signup" element={<div> <Signup/></div>} />
          <Route path="/login" element={<div> <Login/></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
