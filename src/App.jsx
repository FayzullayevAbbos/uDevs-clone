import {
  createBrowserRouter,

  RouterProvider,

} from "react-router-dom";
import "./App.css";

import Direction from "./pages/Direction";
import Home from "./pages/Home";
import Command from "./pages/Command";
import Services from "./pages/Services";
import Tools from "./pages/Tools";
import Clients from "./pages/Clients";
import Portifolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";

function App() {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Direction />,
      path: "/direction",
    },
    {
      element: <Command />,
      path: "/command",
    },
    {
      element: <Services />,
      path: "/services",
    },
    {
      element: <Tools />,
      path: "/cleints",
    },
    {
      element: <Clients />,
      path: "/clients",
    },
    {
      element: <Portifolio />,
      path: "/portfolio",
    },
    {
      element: <Contacts />,
      path: "/contact",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
