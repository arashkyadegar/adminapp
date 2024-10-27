"use client"
import React from "react";
import myAppContext from "../context/context";

export default function PcNavbarComponent() {
     const { asideToggle, setAsideToggle } = React.useContext(myAppContext);

     return (
          <div className="flex flex-row-reverse relative z-10 w-full bg-white">
               <div className="w-full  flex flex-col sm:flex-row bg-transparent px-4">
                    <div className="w-full    justify-start   text-black z-20 flex-row  py-3">
                         <ul className=" items-center text-sm py-1 gap-4 w-full flex justify-end flex-row h-10">

                              <li className="flex flex-row-reverse gap-1 justify-center items-center  text-gray-500  hover:text-primary-green">
                                   <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                             <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                                        </svg>
                                   </a>
                              </li>

                              <li className="flex flex-row-reverse gap-1 justify-center items-center  text-gray-500  hover:text-primary-green">
                                   <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                             <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                                        </svg>


                                   </a>
                              </li>

                              <li className="flex flex-row-reverse gap-1 justify-center items-center  text-gray-500  hover:text-primary-green">
                                   <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                             <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 0 1 .75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 0 1-.75-.75V4.5Zm0 6.75a.75.75 0 0 1 .75-.75h.75a8.25 8.25 0 0 1 8.25 8.25v.75a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-.75a6 6 0 0 0-6-6H4.5a.75.75 0 0 1-.75-.75v-.75Zm0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                                        </svg>

                                   </a>
                              </li>


                              <li className="navbar  flex relative flex-row-reverse gap-1 justify-center items-center text-gray-500  cursor-pointer">
                                <li className="navbar relative flex flex-row-reverse gap-1  justify-center items-center text-gray-500 cursor-pointer">
                                <span >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>

                                   </span>
                                   <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
                                   </svg>
                          
                                        <ul className="text-xs font-semibold text-gray-500 absolute top-8 right-10 w-40 bg-gray-50 border border-gray-300 transition-all duration-200">
                                        <li className="p-2 relative flex flex-row-reverse items-center justify-end gap-1">
                                                  <a>Turkiye</a>
                                                  <img src="/imgs/theme/flag-cn.png" className="w-5 h-5" />


                                             </li>

                                             <li className="p-2 relative flex flex-row-reverse items-center justify-end gap-1">
                                                  <a>French</a>

                                                  <img src="/imgs/theme/flag-fr.png" className="w-5 h-5" />


                                             </li>

                                             <li className="p-2 relative flex flex-row-reverse items-center justify-end gap-1">
                                                  <a>English</a>

                                                  <img src="/imgs/theme/flag-us.png" className="w-5 h-5" />

                                             </li>
                                        </ul>
                                

                              </li>


                              </li>



                              <li className="navbar relative flex flex-row-reverse gap-1  justify-center items-center text-gray-500 cursor-pointer">
                                   <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                   </span>
                                   <img src="/imgs/people/avatar1.jpg"  className="w-9 h-9 rounded-full overflow-hidden hover:ring-2 ring-primary-green" />
                          
                                        <ul className="text-xs font-semibold text-gray-500 absolute top-8 right-10 w-40 bg-gray-50 border border-gray-300  transition-all duration-200">
                                             <li className="p-2 flex flex-row-reverse items-center justify-end gap-1">
                                                  <a>ویرایش نمایه</a>
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                  </svg>

                                             </li>
                                             <li className="p-2 flex flex-row-reverse items-center justify-end gap-1"><a>تنظیمات حساب</a>
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                                  </svg>

                                             </li>
                                             <li className="p-2 flex flex-row-reverse items-center justify-end gap-1"><a>کیف پول</a>
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                                  </svg>

                                             </li>
                                             <li className="p-2 flex flex-row-reverse items-center justify-end gap-1"><a>صورتحساب</a>
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                                  </svg>

                                             </li>
                                             <li className="p-2 flex flex-row-reverse items-center justify-end gap-1 "><a>مرکز کمک</a>
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                                  </svg>

                                             </li>
                                             <li className="p-2 flex flex-row-reverse items-center justify-end gap-1 border-t border-red-500"><a className="text-red-600">خروج</a>
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                                  </svg>

                                             </li>
                                        </ul>
                                

                              </li>

                         </ul>

                    </div>

               </div>

               <button
                    onClick={() => {
                         setAsideToggle(!asideToggle);
                    }}
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="sm:hidden inline-flex m-1 border transition-all duration-300 items-center ml-2 w-8 h-8 p-1 justify-center  outline-none "
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
               >
                    <svg
                         className="size-5"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 17 14"
                    >
                         <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"
                         />
                    </svg>
               </button>


          </div>


     )
}