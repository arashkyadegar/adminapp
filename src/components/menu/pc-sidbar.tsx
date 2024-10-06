import React from "react";
import myAppContext from "../context/context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PcSidebarComponent() {
     const navigate = useNavigate();
     const { asideFaqsDrpToggle, setAsideFaqsDrpToggle } = React.useContext(myAppContext);
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
     function toggleFaqsMenu() {
          hideAll();
          setAsideFaqsDrpToggle(!asideFaqsDrpToggle);
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
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900 p-2 hover:bg-teal-300 hover:text-white  ">
                                   <button onClick={() => navigateToUrl("/brand/brand-list")}>لیست برند ها</button>
                              </li>
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white">
                                   <button onClick={() => navigateToUrl("/brand/brand-add")}>ثبت برند</button>

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
                    <svg onClick={toggleFinancialMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                         <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
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
               {/* سوالات متداول */}

               <div className="relative flex cursor-pointer rounded-md hover:text-white hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">

                    <svg onClick={toggleFaqsMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>

                    {asideFaqsDrpToggle && (
                         <ul className="absolute  rounded-md overflow-hidden  right-16 top-0 w-40 bg-white border border-gray-200  flex flex-col gap-2" >
                              <li className="cursor-pointer flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <button onClick={() => navigateToUrl("/faq/faq-add")}>ثبت سوال</button>
                              </li>
                              <li className="cursor-pointer rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <button onClick={() => navigateToUrl("/faq/faq-list")}>لیست سوالات</button>
                              </li>
                              <li className="cursor-pointer rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <button onClick={() => navigateToUrl("/faq-group/faq-group-add")}>ثبت گروهبندی</button>
                              </li>
                              <li className="cursor-pointer rounded-b-md flex items-center  w-full  text-gray-900  p-2 hover:bg-teal-300 hover:text-white  ">
                                   <button onClick={() => navigateToUrl("/faq-group/faq-group-list")}>لیست گروه بندی</button>
                              </li>
                         </ul>
                    )}

               </div>
               {/* تنظیمات */}
               <div className="relative flex cursor-pointer hover:text-white rounded-md hover:bg-gray-400 border border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                    <button onClick={() => navigateToUrl("/setting")}>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                              <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                         </svg>


                    </button>

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