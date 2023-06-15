import { Outlet } from "react-router-dom"

import FooterContainer from "../footer/FooterContainer";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <FooterContainer/>
    </div>
  )
}

export default Layout