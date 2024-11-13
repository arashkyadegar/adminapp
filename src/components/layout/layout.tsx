import { Outlet, Link, Navigate } from "react-router-dom";
import MobileNavbarComponent from "../menu/mobile-navbar";
import LabtopNavbarComponent from "../menu/pc-navbar";
import { useAuth } from "../hooks/AuthProvider";


const Layout = () => {

     const auth = useAuth()
     if (auth.token === "") return <Navigate to="/" />

     return (
          <div className="bg-[#f8f9fa]">    
          {/* shown navbar in mobile view  */}
               <MobileNavbarComponent />
               {/* shown navbar in pc view  */}
               <LabtopNavbarComponent />
               <Outlet />
          </div>
     )
};

export default Layout;