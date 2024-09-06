import BoxTitleUnderlineComponent from "../share/box-title-underline";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import 'suneditor/dist/css/suneditor.min.css'
import Editor from "../share/MyEditor";
import LargSubmitbtnComponent from "../share/btn/lg-submit-btn";
import TagComponent from "../share/tag";
import ErrComponent from "../share/err";
export default function ProductAddComponent() {
     function onKeyDown(e: any) {
          console.log(e.key)
          if (e.key === "Tab") {
               e.preventDefault();
               console.log("Tab");
          }
     }
     return (
          <div className="w-full sm:w-11/12 mr-0 sm:mr-16">
               <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
                    <BoxTitleLgComponent title="محصول جدید" />
                    <div className="flex flex-col sm:flex-row w-full gap-4 ">
                         <div className="flex w-full sm:w-3/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="اطلاعات اصلی" />
                                   <div className="p-4">
                                        <LabelComponent title="عنوان محصول" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="زیر مجموعه" />

                                        <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <div className="w-full">
                                                  <input type="text" onKeyDown={onKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                             <div className="grid grid-cols-4 justify-start items-start">
                                                  <TagComponent title="متن نمونه" />
                                                  <TagComponent title="متن نمونه خیلی خیلی زیاد نمونه" />
                                             </div>


                                        </div>
                                        <LabelComponent title="زیر مجموعه اصلی" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="برند" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="تصاویر محصول" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="توضیح کوتاه" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <textarea name="desc" rows={5} id="desc"
                                                  // onChange={fillProductDesc}
                                                  // value={productFormState.data.desc}
                                                  className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                        </div>

                                        <LabelComponent title="نقاط قوت" />

                                        <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <div className="w-full">
                                                  <input type="text" className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                             <div className="grid grid-cols-2 justify-start items-start w-full">
                                                  <TagComponent title="متن نمونه" />
                                                  <TagComponent title="متن نمونه خیلی خیلی زیاد نمونه" />
                                             </div>
                                        </div>

                                        <LabelComponent title="نقاط ضعف" />

                                        <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <div className="w-full">
                                                  <input type="text" className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                             <div className="grid grid-cols-2 justify-start items-start w-full">
                                                  <TagComponent title="متن نمونه" />
                                                  <TagComponent title="متن نمونه خیلی خیلی زیاد نمونه" />
                                             </div>
                                        </div>

                                        <LabelComponent title="توضیحات محصول" />
                                        <Editor onSave={() => { }} />
                                   </div>
                                   <div className="flex w-full flex-col  gap-4  border border-gray-200">

                                   </div>

                              </div>

                         </div>
                         <div className="flex w-full sm:w-3/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="Seo" />
                                   <div className="p-4">
                                        <LabelComponent title="عنوان در صفحه" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="عنوان لینک" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>
                                        <ErrComponent text="توضیحات" />
                                        <LabelComponent title="توضیحات" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <textarea name="desc" rows={5} id="desc"
                                                  // onChange={fillProductDesc}
                                                  // value={productFormState.data.desc}
                                                  className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                        </div>

                                        <LabelComponent title="کلمات کلیدی" />

                                        <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="برچسب ها" />

                                        <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <div className="w-full">
                                                  <input type="text" className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                             <div className="grid grid-cols-4 justify-start items-start">
                                                  <TagComponent title="متن نمونه" />
                                                  <TagComponent title="متن نمونه خیلی خیلی زیاد نمونه" />
                                             </div>


                                        </div>
                                   </div>
                              </div>

                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="فروش" />
                                   <div className="p-4">
                                        <LabelComponent title="قیمت" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="قیمت فروش" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>
                                        <LabelComponent title="سایز" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="موجودی" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                        </div>

                                        <LabelComponent title="رنگ" />
                                        <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                             <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
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