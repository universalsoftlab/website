import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componenet/Layout";
import Home from "./componenet/Home";
import About from "./componenet/About";
import Services from "./componenet/Services";
import Products from "./componenet/Products";
import Team from "./componenet/Team";
import Gallery from "./componenet/Gallery";
import Contact from "./componenet/Contect";
import PrivacyPolicy from "./componenet/PrivacyPolicy";
import TermsConditions from "./componenet/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/products", element: <Products /> },
      { path: "/team", element: <Team /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/Contect", element: <Contact /> }, // Support misspelled link standard
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms", element: <TermsConditions /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
