import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/layout";
import { Children, lazy } from "react";
const Home = lazy(() => import("./Pages/Home/Home"));
const MainMenu = lazy(() => import("./Pages/MainMenu"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/menu", element: <MainMenu /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
