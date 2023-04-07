import Navbar from "./components/Navbar";
import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-4 h-screen background">
          <Navbar/>
          <div className="items-center w-full flex flex-col gap-8">
            <Random/>
            <Tag/>
          </div>
      </div>
    </>
    
  );
}
