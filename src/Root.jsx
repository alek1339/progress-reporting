import Navigation from "./components/navigation/Navigation";

import "./App.css";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Root;
