import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { CheckDetail, FactCheck } from "./Pages";


function App() {
  return (
    <div>
     
      <div className="pt-16"> 
      <Navbar />
      <Routes>
          <Route path="/" element={<div> <FactCheck/></div>} />
          <Route path="/checkdetail" element={<div> <CheckDetail/></div>} />
        </Routes>
       
      </div>
    </div>
  );
}

export default App;
