import Contact from "./componenet/Contect";
import Home from "./componenet/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./componenet/Navbar";
import Footer from "./componenet/Footer";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
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
