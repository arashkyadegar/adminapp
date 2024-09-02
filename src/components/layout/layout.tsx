import { Outlet, Link } from "react-router-dom";
import MobileNavbarComponent from "../menu/mobile-navbar";
import LabtopNavbarComponent from "../menu/pc-navbar";


const Layout = () => {
     return (
          <>    {/* shown navbar in mobile view  */}
               <MobileNavbarComponent />
               {/* shown navbar in pc view  */}
               <LabtopNavbarComponent />
               <Outlet />
          </>
     )
};

export default Layout;