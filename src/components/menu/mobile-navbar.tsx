import React from "react";
import myAppContext from "../context/context";
import PcSidebarComponent from "./pc-sidbar";
import { useNavigate } from "react-router-dom";

export default function MobileNavbarComponent() {
  const navigate = useNavigate();
  const { asideToggle, setAsideToggle } = React.useContext(myAppContext);

  const { asideCellarDrpToggle, setAsideCellarDrpToggle } = React.useContext(myAppContext);
  const { asideFinancialDrpToggle, setAsideFinancialDrpToggle } = React.useContext(myAppContext);

  function toggleCellarMenu(event: any) {
    setAsideFinancialDrpToggle(false);
    setAsideCellarDrpToggle(!asideCellarDrpToggle);
  }

  function toggleFinancialMenu(event: any) {
    setAsideCellarDrpToggle(false);
    setAsideFinancialDrpToggle(!asideFinancialDrpToggle);
  }

  // function toggleAsideMenu(event: any) {
  //   setAsideToggle(true);
  // }
  return (
    <>
      {/* hambergur-button */}
      <div
        className={
          asideToggle
            ? "border-gray-200 border z-20 text-xs sm:hidden absolute bg-white flex flex-col justify-end  m-1  top-0  right-0 transition-all "
            : "border-gray-200 border z-20 text-xs w-full h-0 flex  bg-white  flex-row  justify-end transition-all "
        }
      >

        <div
          className={
            asideToggle
              ? " w-full flex flex-col justify-center bg-white  sm:bg-transparent top-0"
              : " w-10 h-0 overflow-hidden flex-col bg-white  sm:bg-transparent top-0"
          }
        >
          <img src="/imgs/brands/brand-1.jpg" />
          <ul className="space-y-2 font-medium w-full">
            <li>
              <a onClick={() => navigate("/category/category-list")} className="cursor-pointer flex flex-row items-center p-2 text-gray-900 rounded-lg  group">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="flex-shrink-0 size-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                </svg>

                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">دسته بندی ها</span>
              </a>
            </li>

            <li>
              <a onClick={() => navigate("/product/product-list")} className="cursor-pointer flex flex-row items-center p-2 text-gray-900 rounded-lg  group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 size-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap"> کالا ها</span>
              </a>
            </li>


            <li>
              <a className="cursor-pointer flex flex-row items-center p-2 text-gray-900 rounded-lg  group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 size-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap"> کیف پول</span>
              </a>
            </li>


            <li>
              <a onClick={() => navigate("/faq/faq-list")} className="cursor-pointer flex flex-row items-center p-2 text-gray-900 rounded-lg  group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 size-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                   </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">سوالات متداول</span>
              </a>
            </li>


            <li>
              <a onClick={() => navigate("/order/order-list")} className="cursor-pointer flex flex-row items-center p-2 text-gray-900 rounded-lg  group">
              <svg className="flex-shrink-0 size-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                   </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">سفارشات</span>
              </a>
            </li>


            <li>
              <a href="#" className="flex flex-row items-center p-2 text-gray-900 rounded-lg group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">صندوق ورودی</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-teal-200">3</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex flex-row items-center p-2 text-gray-900 rounded-lg  group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">خروج</span>
              </a>
            </li>

          </ul>
        </div>
      </div >
      <PcSidebarComponent />



    </>
  );
}