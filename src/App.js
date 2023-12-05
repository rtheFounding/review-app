/* eslint-disable no-lone-blocks */
import React from "react";
import {
  createBrowserRouter,
  Route,
  //NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
//import ResturantLayout from "./layouts/ResturantsLayout";
import RootLayout from "./layouts/RootLayout";
//import Resturants, { resturantLoader } from "./pages/resturants/Resturants";
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/*<Route path="resturants" element={<ResturantLayout />}>
        <Route index element={<Resturants />} loader={resturantLoader} />
  </Route> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
