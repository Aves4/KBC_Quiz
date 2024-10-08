import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QRcodeComp from "./component/QRcodeComp.jsx";

import MainScreen from "./component/MainScreen.jsx";
import MobileScreen from "./component/MobileScreen.jsx";
import { GameContextProvider } from "./store/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <QRcodeComp />,
      },
      {
        path: "mainscreen",
        element: <MainScreen />,
      },
      {
        path: "mobilescreen",
        element: <MobileScreen />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <GameContextProvider>
    <RouterProvider router={router} />
  </GameContextProvider>
);
