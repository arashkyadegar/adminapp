import { useNavigate } from "react-router-dom";
export default function PcSidebarComponent() {
     const navigate = useNavigate();

     return (
          <div className="border-gray-100 border-l text-sm  z-40 w-16 absolute h-screen hidden sm:inline-block bg-white  flex-col justify-start  right-0 ">
               <img src="/imgs/brands/brand-1.jpg" />
               <ul className=" px-2">
                    {/* خانه */}
                    <li onClick={() => navigate("/dashboard")} className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-cente">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                   <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                   <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                              </svg>


                         </button>

                    </li>
                    {/* دسته بندی ها */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                                   </svg>
                              </span>

                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
                         >
                              <li
                                   onClick={() => navigate("/category/category-add")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">دسته بندی جدید</li>
                              <li
                                   onClick={() => navigate("/category/category-list")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">لیست دسته بندی ها</li>
                         </ul>
                    </li>
                    {/* محصولات */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                                        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                                   </svg>


                              </span>

                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
                         >
                              <li onClick={() => navigate("/product/product-add")} className="px-3 py-1 hover:bg-gray-100 cursor-pointer"> کالا جدید</li>
                              <li onClick={() => navigate("/product/product-list")} className="px-3 py-1 hover:bg-gray-100 cursor-pointer">لیست کالا ها</li>
                         </ul>
                    </li>

                    {/* برندها */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-center">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75V3.744Zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25h4.125Zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6h-4.5Z" clipRule="evenodd" />
                                   </svg>

                              </span>

                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
                         >
                              <li onClick={() => navigate("/brand/brand-add")} className="px-3 py-1 hover:bg-gray-100 cursor-pointer"> برند جدید</li>
                              <li onClick={() => navigate("/brand/brand-list")} className="px-3 py-1 hover:bg-gray-100 cursor-pointer">لیست برند ها</li>
                         </ul>
                    </li>

                    {/* کیف پول */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-cente">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">

                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                                   </svg>
                              </span>

                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
                         >
                              <li
                                   onClick={() => navigate("/wallet/wallet-recharge")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">شارژ کیف پول</li>
                              <li
                                   onClick={() => navigate("/wallet/wallet-list")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">گزارش شارژ</li>
                         </ul>
                    </li>
                    {/* کاربران */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-cente">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                   </svg>
                              </span>
                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
                                        transition duration-200 ease-in-out origin-top-left
                                        min-w-32">
                              <li
                                   onClick={() => navigate("/user/user-add")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">کاربر جدید</li>
                              <li
                                   onClick={() => navigate("/user/user-list")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">لیست کاربران</li>
                         </ul>
                    </li>
                    {/* سفارشات */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-cente">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">

                                   <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                   </svg>
                              </span>

                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
                         >
                              <li
                                   onClick={() => navigate("/order/order-add")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">سفارش جدید</li>
                              <li
                                   onClick={() => navigate("/order/order-list")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">گزارشات</li>
                         </ul>
                    </li>

                    {/* سوالات متداول */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-cente">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">

                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                   </svg>

                              </span>

                         </button>
                         <ul
                              id="menu-lang"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-52
  transition duration-200 ease-in-out origin-top-left
  min-w-32
  "
                         >
                              <li
                                   onClick={() => navigate("/faq/faq-add")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">سوال جدید</li>
                              <li
                                   onClick={() => navigate("/faq/faq-list")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">لیست سولات</li>
                              <li
                                   onClick={() => navigate("/faq-group/faq-group-add")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">گروهبندی سوال جدید</li>
                              <li
                                   onClick={() => navigate("/faq-group/faq-group-list")}
                                   className="px-3 py-1 hover:bg-gray-100 cursor-pointer">لیست گروه ها</li>
                         </ul>
                    </li>
                    {/* خروج */}
                    <li className=" relative mx-auto rounded-md  hover:border  border-gray-200  text-gray-500 duration-150 flex-col  m-2 h-10 items-center justify-cente">
                         <button
                              aria-haspopup="true"
                              aria-controls="menu-lang"
                              className="w-full items-center justify-center py-2 flex flex-col  outline-none focus:outline-none"
                         >
                              <span className="">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                   </svg>
                              </span>

                         </button>

                    </li>
               </ul>




          </div>
     );
}