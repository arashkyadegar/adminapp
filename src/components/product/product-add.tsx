import BoxTitleUnderlineComponent from "../share/box-title-underline";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import 'suneditor/dist/css/suneditor.min.css'
import Editor from "../share/MyEditor";
import validator from "validator";
import LargSubmitbtnComponent from "../share/btn/lg-submit-btn";
import TagComponent from "../share/tag";
import ErrComponent from "../share/err";
import InputBox1Component from "../share/inputBox1";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { rgx_insecure } from "../../utility/regex";
import { productFormFilled } from "../../redux/store/product/product-form";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';
import { useRef } from "react";

export default function ProductAddComponent() {
     const editorRef = useRef<SunEditorCore>();
     // The sunEditor parameter will be set to the core suneditor instance when this function is called
     const getSunEditorInstance = (sunEditor: SunEditorCore) => {
          editorRef.current = sunEditor;
     };
     const dispatch = useAppDispatch();
     const productFormState = useAppSelector((state) => state.entities.productForm);
     function onColorsKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();
                    dispatch(
                         productFormFilled({
                              ...productFormState.data,
                              colors: [...productFormState.data.colors, text]
                         }))
               }
          }
     }
     function onTagsKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();
                    dispatch(
                         productFormFilled({
                              ...productFormState.data,
                              tags: [...productFormState.data.tags, text]
                         }))
               }
          }
     }
     function onKeywordsKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();
                    dispatch(
                         productFormFilled({
                              ...productFormState.data,
                              keywords: [...productFormState.data.keywords, text]
                         }))
               }
          }
     }
     function onWeakPointsKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();
                    dispatch(
                         productFormFilled({
                              ...productFormState.data,
                              weakPoints: [...productFormState.data.weakPoints, text]
                         }))
               }
          }
     }
     function onStrongPointsKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();
                    dispatch(
                         productFormFilled({
                              ...productFormState.data,
                              strongPoints: [...productFormState.data.strongPoints, text]
                         }))
               }
          }
     }
     function onSubCategoriesKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();
                    console.log("Tab");
                    console.log(text);
                    dispatch(
                         productFormFilled({
                              ...productFormState.data,
                              subCategories: [...productFormState.data.subCategories, text]
                         }))
               }
          }
     }


     function fillProductPageTitle(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         pageTitleErr: "لطفا  عنوان در صفحه را وارد کنید",
                         formIsValid: false,
                         pageTitle: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         pageTitleErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         pageTitle: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         pageTitleErr: "",
                         pageTitle: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillProductName(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         nameErr: "لطفا نام محصول را وارد کنید",
                         formIsValid: false,
                         name: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         nameErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         name: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         nameErr: "",
                         name: text,
                         formIsValid: true,
                    })
               );
          }
     }

     function fillProductPageLink(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         pageLinkErr: "لطفا عنوان لینک را وارد کنید",
                         formIsValid: false,
                         pageLink: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         pageLinkErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         pageLink: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         pageLinkErr: "",
                         pageLink: text,
                         formIsValid: true,
                    })
               );
          }

     }
     function fillProductDesc(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         descErr: "لطفا توضیحات محصول را وارد کنید",
                         formIsValid: false,
                         desc: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         descErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         desc: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         descErr: "",
                         desc: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillProductShortDesc(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         shortDescErr: "لطفا توضیحات کوتاه محصول را وارد کنید",
                         formIsValid: false,
                         shortDesc: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         shortDescErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         shortDesc: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         shortDescErr: "",
                         shortDesc: text,
                         formIsValid: true,
                    })
               );
          }
     }

     function fillProductPrice(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         priceErr: "لطفا قیمت کالا را وارد کنید",
                         formIsValid: false,
                         price: text,
                    })
               );
          } else if (validator.isNumeric(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         priceErr: "",
                         price: text,
                         formIsValid: true,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         priceErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         price: text,
                    })
               );

          }
     }

     function fillProductPurchasePrice(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         purchasePriceErr: "لطفا قیمت فروش را وارد کنید",
                         formIsValid: false,
                         purchasePrice: text,
                    })
               );
          } else if (validator.isNumeric(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         purchasePriceErr: "",
                         purchasePrice: text,
                         formIsValid: true,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         purchasePriceErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         purchasePrice: text,
                    })
               );

          }
     }
     function fillProductStock(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         stockErr: "لطفا موجودی محصول را وارد کنید",
                         formIsValid: false,
                         stock: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         stockErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         stock: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         stockErr: "",
                         stock: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillProductSize(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         sizeErr: "لطفا سایز محصول را وارد کنید",
                         formIsValid: false,
                         size: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         sizeErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         size: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         sizeErr: "",
                         size: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function submit(event: any) {
          alert(editorRef.current?.getContents(true))
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
                                        <div className="mb-4">
                                             <LabelComponent name="name" title="عنوان محصول" required="true" />
                                             <InputBox1Component
                                                  name="name"
                                                  value={productFormState.data.name}
                                                  onchangeFunc={fillProductName}
                                             />
                                             <ErrComponent text={productFormState.data.nameErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="زیر مجموعه" />

                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" onKeyDown={onSubCategoriesKeyDown} className=" w-full  bg-gray-100  text-gray-900 text-sm  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 w-full justify-start items-start">
                                                       {productFormState.data.subCategories.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>

                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="زیر مجموعه اصلی" required="true" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <select id="countries" className="bg-gray-100 border
                                                       border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                                       w-full    outline-non">
                                                       <option value="0">همه دسته ها</option>
                                                       <option value="1">الکترونیک</option>
                                                       <option value="2">لباس</option>
                                                       <option value="3">خودرو</option>
                                                  </select>

                                             </div>      </div>

                                        <div className="mb-4">
                                             <LabelComponent title="برند" />
                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <select id="countries" className="bg-gray-100 border
                                              border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                              w-full    outline-non">
                                                       <option value="0">همه دسته ها</option>
                                                       <option value="1">الکترونیک</option>
                                                       <option value="2">لباس</option>
                                                       <option value="3">خودرو</option>
                                                  </select>

                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="تصاویر محصول" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="text" className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="توضیح کوتاه" required="true" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <textarea name="desc" rows={5} id="desc"
                                                       onChange={fillProductShortDesc}
                                                       value={productFormState.data.shortDesc}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                             </div>
                                             <ErrComponent text={productFormState.data.shortDescErr} />

                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="نقاط قوت" required="true" />

                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" onKeyDown={onStrongPointsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.strongPoints.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="نقاط ضعف" required="true" />

                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" onKeyDown={onWeakPointsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.weakPoints.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="توضیحات محصول" />
                                             <SunEditor getSunEditorInstance={getSunEditorInstance} />
                                        </div>
                                   </div>
                                   <div className="flex w-full flex-col  gap-4  border border-gray-200">

                                   </div>

                              </div>

                         </div>
                         <div className="flex w-full sm:w-3/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="Seo" />
                                   <div className="p-4">
                                        <div className="mb-4">
                                             <LabelComponent title="عنوان در صفحه" required="true" />
                                             <InputBox1Component
                                                  name="pageTitle"
                                                  value={productFormState.data.pageTitle}
                                                  onchangeFunc={fillProductPageTitle}
                                             />
                                             <ErrComponent text={productFormState.data.pageTitleErr} />
                                        </div>


                                        <div className="mb-4">
                                             <LabelComponent title="عنوان لینک" required="true" />
                                             <InputBox1Component
                                                  name="pageLink"
                                                  value={productFormState.data.pageLink}
                                                  onchangeFunc={fillProductPageLink}
                                             />
                                             <ErrComponent text={productFormState.data.pageLinkErr} />
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="توضیحات" required="true" />
                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <textarea name="desc" rows={5} id="desc"
                                                       onChange={fillProductDesc}
                                                       value={productFormState.data.desc}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                             </div>
                                             <ErrComponent text={productFormState.data.descErr} />
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="کلمات کلیدی" />
                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <div className="w-full">
                                                       <input type="text" onKeyDown={onKeywordsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.keywords.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="برچسب ها" />
                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" onKeyDown={onTagsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.tags.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="فروش" />
                                   <div className="p-4">
                                        <div className="mb-4">
                                             <LabelComponent title="قیمت" required="true" />
                                             <InputBox1Component
                                                  name="price"
                                                  value={productFormState.data.price}
                                                  onchangeFunc={fillProductPrice}
                                             />
                                             <ErrComponent text={productFormState.data.priceErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="قیمت فروش" required="true" />
                                             <InputBox1Component
                                                  name="purchasePrice"
                                                  value={productFormState.data.purchasePrice}
                                                  onchangeFunc={fillProductPurchasePrice}
                                             />
                                             <ErrComponent text={productFormState.data.purchasePriceErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="سایز" required="true" />
                                             <InputBox1Component
                                                  name="size"
                                                  value={productFormState.data.size}
                                                  onchangeFunc={fillProductSize}
                                             />
                                             <ErrComponent text={productFormState.data.sizeErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="موجودی" required="true" />
                                             <InputBox1Component
                                                  name="stock"
                                                  value={productFormState.data.stock}
                                                  onchangeFunc={fillProductStock}
                                             />
                                             <ErrComponent text={productFormState.data.stockErr} /> </div>
                                        <div className="mb-4">
                                             <LabelComponent title="رنگ" />
                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" onKeyDown={onColorsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.colors.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>    </div>
                                   </div>
                              </div>
                         </div>


                    </div>



                    <div className="flex flex-col justify-start items-end">
                         <button title="ثبت دسته بندی" onClick={submit}>vv</button>
                    </div>
               </div>
          </div >
     )
}