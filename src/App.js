import Contact from "./componenet/Contect";
import Home from "./componenet/Home";
import About from "./componenet/About";
import Services from "./componenet/Services";
import Products from "./componenet/Products";
import Team from "./componenet/Team";
import Gallery from "./componenet/Gallery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./componenet/Navbar";
import Footer from "./componenet/Footer";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/products", element: <Products /> },
  { path: "/team", element: <Team /> },
  { path: "/gallery", element: <Gallery /> },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Contect",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ),
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
