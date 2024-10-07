import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">QUIZ GAME</h1>

      <Outlet />
    </>
  );
}

export default App;
