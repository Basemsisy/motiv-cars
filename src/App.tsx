import "./App.css";
import Sidebar from "src/components/molecules/Sidebar";
import Navbar from "src/components/molecules/Navbar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-side h-[3000px]  bg-gray-7 ml-[248px]">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
