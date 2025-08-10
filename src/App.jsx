import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Import pages
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Accomodation from "./pages/Accomodation"; 
import Restaurant from "./pages/Restaurant";
import Layout from "./Layout/Layout";
import Events from "./pages/Events"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>

        <Route index element={<Homepage />} />
        <Route path="aboutus" element={<Aboutus />} />

        
        <Route path="accommodation" element={<Accomodation />} />
        <Route path="restaurants" element={< Restaurant/> } />
        <Route path="contact" element={<Contact />} />
        <Route path="events" element={<Events />} />
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;