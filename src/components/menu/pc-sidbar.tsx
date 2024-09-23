import React from "react";
import myAppContext from "../context/context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PcSidebarComponent() {
     const navigate = useNavigate();
     const { asideOrderDrpToggle, setAsideOrderDrpToggle } = React.useContext(myAppContext);
     const { asideUserDrpToggle, setAsideUserDrpToggle } = React.useContext(myAppContext);
     const { asideCellarDrpToggle, setAsideCellarDrpToggle } = React.useContext(myAppContext);
     const { asideFinancialDrpToggle, setAsideFinancialDrpToggle } = React.useContext(myAppContext);
     function hideAll() {
          setAsideFinancialDrpToggle(false);
          setAsideCellarDrpToggle(false);
          setAsideUserDrpToggle(false);
          setAsideOrderDrpToggle(false);
     }
     function toggleOrderMenu(event: any) {
          hideAll();
          setAsideOrderDrpToggle(!asideOrderDrpToggle);

     }
     function toggleUserMenu(event: any) {
          hideAll();
          setAsideUserDrpToggle(!asideUserDrpToggle);
     }
     function toggleCellarMenu(event: any) {
          hideAll();
          setAsideCellarDrpToggle(!asideCellarDrpToggle);
     }

     function toggleFinancialMenu(event: any) {
          hideAll();
          setAsideFinancialDrpToggle(!asideFinancialDrpToggle);
     }

     function navigateToUrl(link: string) {
          hideAll();
          navigate(link);
     }
     return (
          <div className="border-gray-200 border text-sm  z-40 w-16 absolute h-screen hidden sm:inline-block bg-white  flex-col justify-start  m-1 right-0 ">
               <img src="/imgs/brands/brand-1.jpg" />
               {/* صفحه اصلی */}
               <div className="relative flex cursor-pointer hover:text-white rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <Link to="/dashboard">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                         </svg>
                    </Link>
               </div>

               {/* کالا و انبار */}
               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 hover:text-white border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">

                    <svg onClick={toggleCellarMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>

                    {asideCellarDrpToggle && (
                         <ul className="absolute rounded-md overflow-hidden right-16 top-0 w-40 bg-white border border-gray-200 flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 p-2 hover:bg-teal-300 hover:text-white  ">
                                   <button onClick={() => navigateToUrl("/category/category-list")}>لیست دسته ها</button>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white">
                                   <button onClick={() => navigateToUrl("/category/category-add")}>ثبت دسته</button>

                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white">
                                   <button onClick={() => navigateToUrl("/product/product-list")}>لیست کالاها</button>
                              </li>
                              <li className="cursor-pointer  rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white">
                                   <button onClick={() => navigateToUrl("/product/product-add")}>ثبت کالا</button>
                              </li>
                         </ul>
                    )}

               </div>

               {/* سفارشات */}
               <div className="relative flex cursor-pointer rounded-md hover:text-white hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg onClick={toggleOrderMenu} className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                         <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    {asideOrderDrpToggle && (
                         <ul className="absolute rounded-md overflow-hidden right-16 top-0 w-40 bg-white border border-gray-200 flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <Link to="/order/order-list">لیست سفارشات</Link>
                              </li>
                              <li className="cursor-pointer rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <a href="#"> گزارشات</a>
                              </li>
                         </ul>
                    )}

               </div>

               {/* کاربران */}
               <div className="relative flex cursor-pointer rounded-md hover:text-white hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">

                    <svg onClick={toggleUserMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>

                    {asideUserDrpToggle && (
                         <ul className="absolute rounded-md overflow-hidden right-16 top-0 w-40 bg-white border border-gray-200 flex flex-col gap-2" >

                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <a href="#">ثبت کاربر</a>

                              </li>
                              <li className="cursor-pointer rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <a href="#">لیست کاربران</a>

                              </li>
                         </ul>
                    )}

               </div>

               {/* مالی */}

               <div className="relative flex cursor-pointer rounded-md hover:text-white hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg onClick={toggleFinancialMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {asideFinancialDrpToggle && (
                         <ul className="absolute  rounded-md overflow-hidden  right-16 top-0 w-40 bg-white border border-gray-200  flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <a href="#">شارژ کیف پول</a>
                              </li>
                              <li className="cursor-pointer rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <a href="#">گزارش شارژ</a>

                              </li>
                         </ul>
                    )}

               </div>

               {/* تنظیمات */}
               <div className="relative flex cursor-pointer hover:text-white rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
               <button onClick={() => navigateToUrl("/setting")}>111</button>

               </div>


               {/* خروج */}
               <div className="relative flex cursor-pointer hover:text-white rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>

               </div>
          </div>
     );
}