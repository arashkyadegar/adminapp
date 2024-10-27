import { Outlet, Link } from "react-router-dom";
import MobileNavbarComponent from "../menu/mobile-navbar";
import LabtopNavbarComponent from "../menu/pc-navbar";


const Layout = () => {
     return (
          <div className="bg-[#f8f9fa]">    {/* shown navbar in mobile view  */}
               <MobileNavbarComponent />
               {/* shown navbar in pc view  */}
               <LabtopNavbarComponent />
               <Outlet />
          </div>
     )
};

export default Layout;