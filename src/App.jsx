import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">KBC Quiz...</h1>

      <Outlet />
    </>
  );
}

export default App;
