import { Link } from "react-router-dom";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";

export default function OrderListComponent() {
     return (
          <div className="w-full sm:w-10/12 mr-0 sm:mr-16">
               <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
                    <BoxTitleLgComponent title="لیست سفارشات" />
                    <div className="flex flex-col sm:flex-row gap-4">
                         <div className="flex sm:w-3/4 flex-col gap-4 border border-gray-200">
                              <div className="flex flex-col w-full bg-white">
                                   <div className="flex flex-col sm:flex-row gap-2 justify-between p-4">
                                        <div className="flex flex-row gap-2">
                                             <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-300">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                  </svg>

                                             </div>
                                             {/* refresh button  */}
                                             <button id="countries" onClick={() => { }} className="flex bg-gray-50 border border-gray-300 text-gray-300 items-center justify-center hover:text-gray-700 text-sm rounded-lg w-fit  p-2.5 ">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                  </svg>

                                             </button>
                                             {/* add new button  */}
                                             <button id="countries" className="flex bg-gray-50 border border-gray-300 text-gray-300 items-center justify-center hover:text-gray-700 text-sm rounded-lg w-fit  p-2.5 ">
                                                  <Link
                                                       to={`/order/order-add`}
                                                  >
                                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                       </svg>
                                                  </Link>
                                             </button>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                             <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                  <option value="">نمایش ۲۰</option>
                                                  <option value="">نمایش ۳۰</option>
                                                  <option value="">نمایش ۴۰</option>
                                             </select>

                                             <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                  <option value="">وضعیت</option>
                                                  <option value="">فعال</option>
                                                  <option value="">غیرفعال</option>
                                             </select>
                                        </div>

                                   </div>

                                   <div className="relative  overflow-x-auto shadow-md border border-gray-200 p-4" >
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                                  <tr className="flex flex-row">
                                                       <th scope="col" className="flex w-4 px-4 h-10 items-center justify-center">
                                                            <div className="flex items-center">
                                                                 <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                 <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                                            </div>
                                                       </th>
                                                       <th scope="col" className="  w-10 flex justify-center items-center">
                                                            #
                                                       </th>
                                                       {/* <th scope="col" className="flex items-center justify-center w-16">
                                        تصویر اصلی
                                   </th> */}
                                                       <th scope="col" className="text-xs  w-40 flex justify-center items-center">
                                                            نام مشتری
                                                       </th>
                                                       <th scope="col" className="text-xs   w-40 flex justify-center items-center">
                                                            قیمت                                             </th>

                                                       <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                                                            تاریخ
                                                       </th>
                                                       <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                                                            وضعیت پرداخت
                                                       </th>

                                                       <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                                                            اقدام
                                                       </th>
                                                  </tr>
                                             </thead>
                                             <tbody>

                                                  <tr className="flex flex-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                       <td className="w-4 p-4  ">
                                                            <div className="flex items-center justify-center">
                                                                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                 <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                            </div>
                                                       </td>
                                                       <td className="  w-10 flex justify-center items-center">
                                                            20
                                                       </td>
                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-40">
                                                            #SK2540
                                                       </td>
                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-40">
                                                            تومان948.55
                                                       </td>


                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                                                            ۱۳۹۲/۰۱/۰۱
                                                       </td>

                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                                                            <a className="bg-red-200 text-red-500 text-xs font-bold px-1 py-1 rounded-md" >انصراف</a>
                                                       </td>


                                                       <td className="text-xs   w-24 flex justify-center items-center">
                                                            <a className="font-medium text-blue-600  hover:border-blue-600 border"

                                                            >
                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                 </svg>
                                                            </a>

                                                            <a className="font-medium text-red-600 dark:text-red-500 hover:border-red-600 ms-3 border cursor-pointer">

                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                 </svg>
                                                            </a>
                                                       </td>

                                                  </tr>

                                                  <tr className="flex flex-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                       <td className="w-4 p-4  ">
                                                            <div className="flex items-center justify-center">
                                                                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                 <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                            </div>
                                                       </td>
                                                       <td className="  w-10 flex justify-center items-center">
                                                            20
                                                       </td>
                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-40">
                                                            #SK2540
                                                       </td>
                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-40">
                                                            نیل متیوز
                                                       </td>


                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                                                            ۲۰ تومان
                                                       </td>

                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                                                            <a className="bg-green-200 text-green-500 text-xs font-bold px-1 py-1 rounded-md" >دریافت شد</a>
                                                       </td>


                                                       <td className="text-xs   w-24 flex justify-center items-center">
                                                            <a className="font-medium text-blue-600  hover:border-blue-600 border"

                                                            >
                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                 </svg>
                                                            </a>

                                                            <a className="font-medium text-red-600 dark:text-red-500 hover:border-red-600 ms-3 border cursor-pointer">

                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                 </svg>
                                                            </a>
                                                       </td>

                                                  </tr>


                                                  <tr className="flex flex-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                       <td className="w-4 p-4  ">
                                                            <div className="flex items-center justify-center">
                                                                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                 <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                            </div>
                                                       </td>
                                                       <td className="  w-10 flex justify-center items-center">
                                                            20
                                                       </td>
                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-40">
                                                            #SK2540
                                                       </td>
                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-40">
                                                            نیل متیوز
                                                       </td>


                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                                                            ۲۰ تومان
                                                       </td>

                                                       <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                                                            <a className="bg-yellow-200 text-yellow-500 text-xs font-bold px-1 py-1 rounded-md" >در انتظار</a>
                                                       </td>


                                                       <td className="text-xs   w-24 flex justify-center items-center">
                                                            <a className="font-medium text-blue-600  hover:border-blue-600 border"

                                                            >
                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                 </svg>
                                                            </a>

                                                            <a className="font-medium text-red-600 dark:text-red-500 hover:border-red-600 ms-3 border cursor-pointer">

                                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                 </svg>
                                                            </a>
                                                       </td>

                                                  </tr>
                                             </tbody>
                                        </table>
                                        <div className="flex flex-row-reverse justify-end gap-2 p-2">
                                             <div className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-md">
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                       <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                                                  </svg>

                                             </div>
                                             <div className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white rounded-md">
                                                  <a>۰۱</a>
                                             </div>

                                             <div className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-500 rounded-md">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                  </svg>

                                             </div>

                                             <div className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-500 rounded-md">
                                                  <a>۰۲</a>
                                             </div>

                                             <div className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-500 rounded-md">
                                                  <a>۰۳</a>
                                             </div>

                                        </div>
                                   </div>


                              </div>
                         </div>
                         <div className="flex sm:w-1/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200 p-4">
                                   <LabelComponent title="شماره سفارش" />
                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-50   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                                   <LabelComponent title="مشتری" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-50   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                                   <LabelComponent title="وضعیت سفارش" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-50   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                                   <LabelComponent title="تاریخ اضافه شده" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-50   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>

                                   <LabelComponent title="تاریخ اصلاح شده" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-50   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>

                                   <LabelComponent title="مشتری" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-50   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w:4/5 bg-gray-50  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     );
}