import React from "react";
import myAppContext from "../context/context";
import { Link } from "react-router-dom";

export default function PcSidebarComponent() {
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
     return (
          <div className="border-gray-200 border text-sm pt-12 z-40 w-16 absolute h-screen hidden sm:inline-block bg-white  flex-col justify-start  m-1 right-0 ">
               {/* صفحه اصلی */}
               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <Link to="/dashboard">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                         </svg>
                    </Link>
               </div>

               {/* کالا و انبار */}
               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg onClick={toggleCellarMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    {asideCellarDrpToggle && (
                         <ul className="absolute  right-16 top-0 w-40 bg-white border border-gray-400 rounded-lg p-4 flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <Link to="/category/category-list">لیست دسته ها</Link>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <Link to="/category/category-add">ثبت دسته</Link>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <Link to="/product/product-list">لیست کالاها</Link>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <Link to="/product/product-add"> ثبت کالا</Link>
                              </li>
                         </ul>
                    )}

               </div>

               {/* سفارشات */}
               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg onClick={toggleOrderMenu} className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                         <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    {asideOrderDrpToggle && (
                         <ul className="absolute  right-16 top-0 w-40 bg-white border border-gray-400 rounded-lg p-4 flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <Link to="/order/order-list">لیست سفارشات</Link>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <a href="#"> گزارشات</a>
                              </li>
                         </ul>
                    )}

               </div>

               {/* کاربران */}
               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg onClick={toggleUserMenu} className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                         <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    {asideUserDrpToggle && (
                         <ul className="absolute  right-16 top-0 w-40 bg-white border border-gray-400 rounded-lg p-4 flex flex-col gap-2" >

                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <a href="#">ثبت کاربر</a>

                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <a href="#">لیست کاربران</a>

                              </li>
                         </ul>
                    )}

               </div>

               {/* مالی */}

               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg onClick={toggleFinancialMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {asideFinancialDrpToggle && (
                         <ul className="absolute  right-16 top-0 w-40 bg-white border border-gray-400 rounded-lg p-4 flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <a href="#">شارژ کیف پول</a>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 ">
                                   <a href="#">گزارش شارژ</a>

                              </li>
                         </ul>
                    )}

               </div>


               {/* خروج */}
               <div className="relative flex cursor-pointer rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>

               </div>



          </div>
     );
}