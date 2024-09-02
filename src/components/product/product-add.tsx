import BoxTitleUnderlineComponent from "../share/box-title-underline";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";

export default function ProductAddComponent() {
     return (
          <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
               <BoxTitleLgComponent title="محصول جدید" />
               <div className="flex flex-col sm:flex-row w-full gap-4 ">

                    <div className="flex w-full sm:w-2/4 flex-col  gap-4  border border-gray-200">
                         <div className="flex flex-col w-full bg-white  border border-gray-200">
                              <BoxTitleUnderlineComponent title="پایه" />
                              <div className="p-4">
                                   <LabelComponent title="شماره سفارش" />
                                   <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                   </div>
                                   <LabelComponent title="مشتری" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                                   <LabelComponent title="وضعیت سفارش" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                                   <LabelComponent title="تاریخ اضافه شده" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>

                                   <LabelComponent title="تاریخ اصلاح شده" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>

                                   <LabelComponent title="مشتری" />

                                   <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                        <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                   </div>
                              </div>

                         </div>
                    </div>

                    <div className="flex flex-col   w-full sm:w-1/4 gap-4">
                         <div className="flex w-full flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="رسانه ها" />
                                   <div className="p-4">
                                        <LabelComponent title="شماره سفارش" />
                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="flex  w-full  flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="دسته بندی" />
                                   <div className="p-4">
                                        <LabelComponent title="شماره سفارش" />
                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     )
}