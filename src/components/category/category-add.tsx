'use client'

import BoxTitleUnderlineComponent from "../share/box-title-underline";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import 'suneditor/dist/css/suneditor.min.css'
import Editor from "../share/MyEditor";
import LargSubmitbtnComponent from "../share/btn/lg-submit-btn";

export default function CategoryAddComponent() {
     return (
          <div className="w-full sm:w-11/12 mr-0 sm:mr-16">
               <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
                    <BoxTitleLgComponent title="دسته بندی جدید" />
                    <div className="flex flex-col sm:flex-row w-full gap-4 ">

                         <div className="flex w-full sm:w-2/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="پایه" />
                                   <div className="p-4">
                                        <LabelComponent title="عنوان" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="عنوان در صفحه" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="عنوان در منو" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="زیر مجموعه" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="توضیحات" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <textarea name="desc" rows={5} id="desc"
                                                  // onChange={fillProductDesc}
                                                  // value={productFormState.data.desc}
                                                  className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>

                                        </div>
                                        <p className="text-red-400 text-xs  text-right  h-4">توضیحات را وارد کنید</p>

                                        <LabelComponent title="کلمات کلیدی" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>


                                        <LabelComponent title="متن پایین صفحه" />
                                        <Editor onSave={() => { }} />


                                   </div>

                              </div>
                         </div>

                         <div className="flex flex-col   w-full sm:w-2/4 gap-4">
                              <div className="flex  w-full  flex-col  gap-4  border border-gray-200">
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        <BoxTitleUnderlineComponent title="رسانه ها" />
                                        <div className="p-4">
                                             <LabelComponent title=" تصویر صفحه" />
                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="flex w-full flex-col  gap-4  border border-gray-200">
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        <BoxTitleUnderlineComponent title="رسانه ها" />
                                        <div className="p-4">
                                             <LabelComponent title="ایکن منو" />
                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="flex w-full flex-col  gap-4  border border-gray-200">
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">

                                        <div className="p-4">
                                             <LabelComponent title="متن بالای صفحه" />
                                             <Editor onSave={() => { }} />

                                        </div>
                                   </div>
                              </div>



                         </div>
                    </div>
                    <div className="flex flex-col justify-start items-end">
                         <LargSubmitbtnComponent title="ثبت دسته بندی" />
                    </div>

               </div>
          </div>
     )
}