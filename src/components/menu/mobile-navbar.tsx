import React from "react";
import myAppContext from "../context/context";
import PcSidebarComponent from "./pc-sidbar";

export default function MobileNavbarComponent() {
  const { asideToggle, setAsideToggle } = React.useContext(myAppContext);

  const { asideCellarDrpToggle, setAsideCellarDrpToggle } = React.useContext(myAppContext);
  const { asideFinancialDrpToggle, setAsideFinancialDrpToggle } = React.useContext(myAppContext);


  function togglePostMenu(event: any) {

    setAsideCellarDrpToggle(false);
    setAsideFinancialDrpToggle(false);

  }

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
            ? "z-10  sm:hidden absolute bg-white flex flex-col justify-end  m-1  top-0  right-0 transition-all "
            : "z-10 w-full h-0 flex  bg-white  flex-row  justify-end transition-all "
        }
      >

        <div
          className={
            asideToggle
              ? "border border-blue-400 w-full flex flex-col justify-center  bg-gray-50 sm:bg-transparent top-0"
              : "border border-blue-400 w-10 h-0 overflow-hidden flex-col bg-gray-50 sm:bg-transparent top-0"
          }
        >

          <ul className="space-y-2 font-medium w-full  pt-6 border border-red-400">
            <li className="">
              <button type="button" onClick={togglePostMenu} className="flex flex-row-reverse justify-between items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                <span className="flex-1 ms-3 mx-4 text-right rtl:text-right whitespace-nowrap">پست</span>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
              </button>

              <ul id="dropdown-example" className=" text-sm py-2 space-y-2">
                <li className="flex items-center justify-end w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                </li>
                <li className="flex items-center justify-end w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                </li>
                <li className="flex items-center justify-end w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                </li>
              </ul>



            </li>

            <li>
              <button type="button" onClick={toggleCellarMenu} className="flex flex-row-reverse justify-between items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                <span className="flex-1 ms-3 mx-4 text-right  whitespace-nowrap">کالا و انبار</span>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
              </button>
              {asideCellarDrpToggle && (
                <ul id="dropdown-example" className="text-sm  py-2 space-y-2 flex-col justify-end">
                  <li className="flex items-center  w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                    لیست دسته
                  </li>
                  <li className="flex items-center  w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                    ثبت دسته
                  </li>
                  <li className="flex items-center  w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                    لیست کالاها
                  </li>

                  <li className="flex items-center  w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                    ثبت کالا
                  </li>

                </ul>
              )}

            </li>


            <li>
              <button type="button" onClick={toggleFinancialMenu} className="flex flex-row-reverse justify-between items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                <span className="flex-1 ms-3 mx-4 text-right rtl:text-right whitespace-nowrap">مالی</span>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
              </button>
            </li>
            {asideFinancialDrpToggle && (
              <ul id="dropdown-example" className="text-sm  py-2 space-y-2 flex-col justify-end">
                <li className="flex items-center  w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                  شارژ کیف پول
                </li>
                <li className="flex items-center  w-full p-2 px-10 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-teal-200 dark:text-white dark:hover:bg-gray-700">

                  گزارش شارژ
                </li>

              </ul>
            )}


            <li>
              <a href="#" className="flex flex-row items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">مدیریت</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">صندوق ورودی</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-teal-200">3</span>
              </a>
            </li>

            <li className="flex flex-row items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">

              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>


              لیست فروشگاه ها


            </li>

            <li className="flex flex-row items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">

              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>


              لیست کاربران


            </li>
            <li>
              <a href="#" className="flex flex-row items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span className="flex-1 ms-3 mx-4 whitespace-nowrap">ورود</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-200 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
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