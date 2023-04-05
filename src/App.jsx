import Navbar from "./components/Navbar";
import Random from "./components/Random";
export default function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-10 h-screen background">
          <Navbar/>
          <div className="items-center w-full flex flex-col">
            <Random/>
          </div>
          
      </div>
    </>
    
  );
}
