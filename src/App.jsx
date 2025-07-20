import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Layout from "./Components/layout";
import { Children, lazy } from "react";
import SignInPage from "./Components/SignInPage";
import NotFound from "./Components/NotFound";
import SignUpPage from "./Components/SignUpPage";
const Home = lazy(() => import("./Pages/Home/Home"));
const MainMenu = lazy(() => import("./Pages/MainMenu"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const App = () => {
  const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/menu", element: <MainMenu /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
         { path: "*", element: <NotFound /> },
    ],
  },
 
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
 
]);
  return <RouterProvider router={routes} />;
};

export default App;
