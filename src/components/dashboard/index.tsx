import BoxTitleComponent from "../share/box-title";
import SmTitleComponent from "../share/sm-title";

export default function DashboardComponent() {
  //bg-[#f8f9fa]
  const x = localStorage.getItem('user')
  console.log(x)

  return (
    <div className="w-full sm:w-10/12 mr-0 sm:mr-16">
      <div className="w-full flex flex-col p-4 ">
        <div className="flex flex-col w-full gap-4 ">

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-between overflow-hidden">
            <div className="flex flex-col sm:flex-row w-full bg-white  border border-gray-200 gap-4 p-4 rounded-xl">
              <div className="w-12 h-10  flex justify-center items-center rounded-full bg-lime-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-600">
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-bold">سفارش</h6>
                <h4 className="text-xl">53.668</h4>
                <h1 className="text-xs text-gray-500">به استثنای سفارشات در ترانزیت</h1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full bg-white  border border-gray-200 gap-4 p-4 rounded-xl">
              <div className="w-12 h-10  flex justify-center items-center rounded-full bg-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-600">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                </svg>

              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-bold">محصولات</h6>
                <h4 className="text-xl">9.856</h4>
                <h1 className="text-xs text-gray-500">در 19 دسته</h1>
              </div>
            </div>
            <div className="flex flex-row w-full bg-white  border border-gray-200 gap-4 p-4 rounded-xl">
              <div className="w-12 h-10  flex justify-center items-center rounded-full bg-pink-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-purple-300">
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                </svg>



              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-bold">درآمد</h6>
                <h4 className="text-xl">تومان6,982</h4>
                <h1 className="text-xs text-gray-500">هزینه حمل و نقل گنجانده نشده است</h1>
              </div>
            </div>
            <div className="flex flex-row w-full bg-white  border border-gray-200 gap-4 p-4 rounded-xl">
              <div className="w-12 h-10  flex justify-center items-center rounded-full bg-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-300">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                </svg>

              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-bold">درآمد ماهانه</h6>
                <h4 className="text-xl">تومان6,982</h4>
                <h1 className="text-xs text-gray-500">در وقت محلی خود مستقر است.</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex flex-col w-full sm:w-2/5 bg-white  border border-gray-200 gap-4 p-2 rounded-xl">
              <BoxTitleComponent title="اعضای جدید" />
              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <div className="w-full flex flex-row">
                    <div className="w-full items-center justify-center flex">
                      <img src="/imgs/people/avatar1.jpg" className="w-9 h-9 rounded-full overflow-hidden " />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h6 className="text-sm font-bold">پاتریک آدامز</h6>
                      <h1 className="text-xs text-gray-500">سانفرانسیسکو</h1>
                    </div>
                  </div>
                  <div className="w-full text-xs justify-center items-center flex">
                    <button className="flex flex-row justify-center items-center bg-teal-600 text-gray-100 px-2 py-2 rounded-lg">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>

                      </span>
                      <a>اضافه کردن</a></button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <div className="w-full flex flex-row">
                    <div className="w-full items-center justify-center flex">
                      <img src="/imgs/people/avatar1.jpg" className="w-9 h-9 rounded-full overflow-hidden " />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h6 className="text-sm font-bold">پاتریک آدامز</h6>
                      <h1 className="text-xs text-gray-500">سانفرانسیسکو</h1>
                    </div>
                  </div>
                  <div className="w-full text-xs justify-center items-center flex">
                    <button className="flex flex-row justify-center items-center bg-teal-600 text-gray-100 px-2 py-2 rounded-lg">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>

                      </span>
                      <a>اضافه کردن</a></button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row ">
                  <div className="w-full flex flex-row">
                    <div className="w-full items-center justify-center flex">
                      <img src="/imgs/people/avatar1.jpg" className="w-9 h-9 rounded-full overflow-hidden " />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h6 className="text-sm font-bold">پاتریک آدامز</h6>
                      <h1 className="text-xs text-gray-500">سانفرانسیسکو</h1>
                    </div>
                  </div>
                  <div className="w-full text-xs justify-center items-center flex">
                    <button className="flex flex-row justify-center items-center bg-teal-600 text-gray-100 px-2 py-2 rounded-lg">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>

                      </span>
                      <a>اضافه کردن</a></button>
                  </div>
                </div>
              </div>
            </div>

            {/* timeline */}
            <div className="flex flex-col w-full bg-white  border border-gray-200 p-4 rounded-xl">
              <BoxTitleComponent title="فعالیت های اخیر" />
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-4 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> ۱۷ آبان</time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">لورم ایپسوم متن ساختگی</h3>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>

                </li>
                <li className="mb-4 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">۱۳ آبان</time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">لورم ایپسوم متن ساختگی</h3>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>
                </li>
                <li className="mb-4 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">۰۵ آذر</time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">لورم ایپسوم متن ساختگی</h3>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                  </p>
                </li>
              </ol>


            </div>


          </div>
          <div className="flex flex-col w-full bg-white  border border-gray-200 gap-4 p-4 rounded-xl">
            <BoxTitleComponent title="آخرین سفارشات" />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border border-gray-200" >
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                      شناسه سفارش
                    </th>
                    <th scope="col" className="text-xs   w-40 flex justify-center items-center">
                      نام صورتحساب
                    </th>
                    <th scope="col" className="text-xs   w-16 flex justify-center items-center">
                      تاریخ
                    </th>
                    <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                      مجموع
                    </th>
                    <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                      وضعیت پرداخت
                    </th>
                    <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                      روش پرداخت
                    </th>


                    <th scope="col" className="text-xs   w-24 flex justify-center items-center">
                      Action
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
                      نیل متیوز
                    </td>
                    <td scope="row" className="flex items-center justify-center text-right px-2    w-16">
                      ۱۳۹۲/۰۱/۰۱
                    </td>

                    <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                      ۲۰ تومان
                    </td>

                    <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                      <a className="bg-red-200 text-red-500 text-xs font-bold px-1 py-1 rounded-md" >بازپرداخت</a>
                    </td>

                    <td scope="row" className="flex items-center justify-center text-xs text-right px-2 gap-1   w-24">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                      <a>مسترکارت</a>
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
                    <td className="text-xs   w-24 flex justify-center items-center">
                      <button className="flex flex-row justify-center items-center bg-teal-600 text-gray-100 px-2 py-1 rounded-md">

                        <a>جزییات</a></button>
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
                    <td scope="row" className="flex items-center justify-center text-right px-2    w-16">
                      ۱۳۹۲/۰۱/۰۱
                    </td>

                    <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                      ۲۰ تومان
                    </td>

                    <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                      <a className="bg-yellow-200 text-yellow-500 text-xs font-bold px-1 py-1 rounded-md" >بازپرداخت</a>
                    </td>

                    <td scope="row" className="flex items-center justify-center text-xs text-right px-2 gap-1   w-24">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                      <a>مسترکارت</a>
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
                    <td className="text-xs   w-24 flex justify-center items-center">
                      <button className="flex flex-row justify-center items-center bg-teal-600 text-gray-100 px-2 py-1 rounded-md">

                        <a>جزییات</a></button>
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
                    <td scope="row" className="flex items-center justify-center text-right px-2    w-16">
                      ۱۳۹۲/۰۱/۰۱
                    </td>

                    <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                      ۲۰ تومان
                    </td>

                    <td scope="row" className="flex items-center justify-center text-right px-2    w-24">
                      <a className="bg-green-200 text-green-500 text-xs font-bold px-1 py-1 rounded-md" >بازپرداخت</a>
                    </td>

                    <td scope="row" className="flex items-center justify-center text-xs text-right px-2 gap-1   w-24">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
                      <a>مسترکارت</a>
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
                    <td className="text-xs   w-24 flex justify-center items-center">
                      <button className="flex flex-row justify-center items-center bg-teal-600 text-gray-100 px-2 py-1 rounded-md">

                        <a>جزییات</a></button>
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

          {/* adver */}
          <div className="flex flex-col w-full bg-white  border border-gray-200 gap-4 p-4 rounded-xl">
            <BoxTitleComponent title="شنل بازاریابی" />
            <div className="px-4">
              <SmTitleComponent title="فیسبوک" />
              <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                <div className=" w-2/3 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>35%</a></div>
              </div>

              <SmTitleComponent title="اینستاگرام" />
              <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                <div className=" w-1/3 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>35%</a></div>
              </div>

              <SmTitleComponent title="Google" />
              <div className="flex w-full bg-gray-200 h-4 rounded-sm overflow-hidden">
                <div className=" w-2/5 h-full bg-teal-600 text-white text-center items-center justify-center text-xs "><a>35%</a></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>);
}
