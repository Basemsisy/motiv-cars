import "./App.css";
import Sidebar from "src/components/molecules/Sidebar";
import Navbar from "src/components/molecules/Navbar";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-side md:ml-[248px]">
        <Navbar />
        <main className="main-content px-8 py-7">
          <RouterProvider router={routes} />
        </main>
      </div>
    </div>
  );
}

export default App;
