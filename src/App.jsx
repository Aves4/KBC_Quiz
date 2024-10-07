import { Outlet } from "react-router-dom";
import "./App.css";

import { useMediaQuery } from "react-responsive";

function App() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <h1 className="title">KBC Quiz...</h1>

      <Outlet />
    </>
  );
}

export default App;
