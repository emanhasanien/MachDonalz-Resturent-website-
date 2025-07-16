import { ProductsProvider } from "../Context/ProductsProvider";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </ProductsProvider>
    </>
  );
}

export default Layout;
