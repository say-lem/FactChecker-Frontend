import HeroSection from "./Components/FactCheck/Factcheck";
import { Navbar } from "./Components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> 
       <HeroSection />
      </div>
    </div>
  );
}

export default App;
