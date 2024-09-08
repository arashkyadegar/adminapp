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
import { useEffect, useRef } from "react";
import { getDefaultImageAvator } from "../../utility/imageUtility";
import ResponseStatus from "../../utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import { FileService } from "../../services/fileService";
import LgSubmitbtnComponent from "../share/btn/lg-submit-btn";
import { submitAddProductAction } from "../../redux/store/product/product-action";
import Loading from "../share/loading";
import { getCategoriesAction } from "../../redux/store/category/category-action";

export default function ProductAddComponent() {
     const formdata2 = new FormData();
     const strongPointsRef = useRef<any>();
     const weakPointsRef = useRef<any>();
     const subCategoriesRef = useRef<any>();
     const colorsRef = useRef<any>();
     const tagsRef = useRef<any>();
     const KeywordsRef = useRef<any>();
     const editorRef = useRef<SunEditorCore>();
     // The sunEditor parameter will be set to the core suneditor instance when this function is called
     const getSunEditorInstance = (sunEditor: SunEditorCore) => {
          editorRef.current = sunEditor;
     };
     const dispatch = useAppDispatch();
     const productFormState = useAppSelector((state) => state.entities.productForm);
     const categoriesState = useAppSelector((state) => state.entities.categories);

     useEffect(() => {
          dispatch(getCategoriesAction());
     }, []);

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
                    colorsRef.current.value = "";
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
                    tagsRef.current.value = "";
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
                    KeywordsRef.current.value = "";
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
                    weakPointsRef.current.value = "";
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
                    strongPointsRef.current.value = "";
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
                    subCategoriesRef.current.value = "";
               }
          }
     }


     function fillProductPageTitle(event: any) {
          let text: string = event.target.value;
          if (validator.matches(text, rgx_insecure)) {
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
          if (validator.matches(text, rgx_insecure)) {
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
          if (validator.matches(text, rgx_insecure)) {
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
          if (validator.matches(text, rgx_insecure)) {
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
          if (validator.isNumeric(text)) {
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
          if (validator.isNumeric(text)) {
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
     function fillProductWeight(event: any) {
          let text: string = event.target.value;
          if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         weightErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         weight: text,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         weightErr: "",
                         weight: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillProductStock(event: any) {
          let text: string = event.target.value;
          if (validator.matches(text, rgx_insecure)) {
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
          if (validator.matches(text, rgx_insecure)) {
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
     function selectProductCategoryId(event: any) {
          const text = event.target.value
          if (text == 11) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         categoryIdErr: "لطفا زیر مجموعه اصلی کالا را انتخاب کنید",
                         formIsValid: false,
                         categoryId: text,
                    })
               );


          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         categoryIdErr: "",
                         categoryId: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function selectProductStatus(event: any) {
          const text = event.target.value
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    statusErr: "",
                    status: text,
                    formIsValid: true,
               })
          );

     }
     function selectProductBrand(event: any) {
          const text = event.target.value
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    brandErr: "",
                    brand: text,
                    formIsValid: true,
               })
          );

     }
     async function fillProductImages(event: any) {
          let count = event.target.files.length;
          if (count <= 3) {
               formdata2.append("files", event.target.files[0]);
               formdata2.append("files", event.target.files[1]);
               formdata2.append("files", event.target.files[2]);
               const uploader = new FileService();
               // try {
               const response = await uploader.upload(formdata2);
               switch (response.status) {
                    case ResponseStatus.OK: {
                         const repo = await response.json();
                         dispatch(
                              productFormFilled({
                                   ...productFormState.data,
                                   imagesError: "",
                                   images: repo.files,
                                   formIsValid: true,
                              })
                         );
                         ToastSuccess();
                         break;
                    }
                    case ResponseStatus.BAD_REQUEST: {
                         ToastFail();
                         break;
                    }
                    case ResponseStatus.UNAUTHORIZED: {
                         ToastAuthFail();
                    }
               }
          } else {
               ToastFail("تنها میتوانید ۳ تصویر انتخاب کنید")
          }
     }
     function submit(event: any) {
          //alert(editorRef.current?.getContents(true))
          if (productFormState.data.formIsValid) {
               const entity = {
                    _id: "",

                    name: productFormState.data.name,
                    subCategories: productFormState.data.subCategories,
                    categoryId: productFormState.data.categoryId,
                    brand: productFormState.data.brand,
                    images: productFormState.data.images,
                    shortDesc: productFormState.data.shortDesc,
                    longdesc: editorRef.current?.getContents(true),
                    weakPoints: productFormState.data.weakPoints,
                    strongPoints: productFormState.data.strongPoints,

                    pageTitle: productFormState.data.pageTitle,
                    pageLink: productFormState.data.pageLink,
                    desc: productFormState.data.desc,
                    keywords: productFormState.data.keywords,
                    tags: productFormState.data.tags,

                    status: productFormState.data.status,
                    size: productFormState.data.size,
                    price: productFormState.data.price,
                    purchasePrice: productFormState.data.purchasePrice,
                    weight: productFormState.data.weight,
                    stock: productFormState.data.stock,
                    colors: productFormState.data.colors,

                    createdAt: "",
               };
               try {
                    editorRef.current?.setContents("");
                    dispatch(submitAddProductAction(entity));
               } catch (err) {
                    console.log("rrrr");
               }
          } else {
               ToastFail("لطفا مقادیر فیلدهای الزامی را با دقت وارد کنید");
          }
     }
     return (
          <div className="w-full sm:w-11/12 mr-0 sm:mr-16">
               {productFormState.isLoading && (
                    <Loading />
               )}
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
                                             <LabelComponent title="زیر مجموعه" required="true" />

                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" ref={subCategoriesRef} onKeyDown={onSubCategoriesKeyDown} className=" w-full  bg-gray-100  text-gray-900 text-sm  block  p-2.5     outline-none" />
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
                                                       w-full    outline-non" onChange={selectProductCategoryId}>

                                                       <option value="11"> انتخاب کنید</option>
                                                       {categoriesState.list.map((item: any) => (
                                                            <option value={item._id}>{item.name}</option>
                                                       ))}
                                                  </select>

                                             </div>
                                             <ErrComponent text={productFormState.data.categoryIdErr} />
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="برند" />
                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100  
                                              text-gray-900 text-sm rounded-lg  px-1">
                                                  <select id="brand" name="brand" className="bg-gray-100 border
                                              border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                              w-full    outline-non"   onChange={selectProductBrand}>
                                                       <option value="11">همه دسته ها</option>
                                                       <option value="66ca18cb8e6d2287688b9f28">الکترونیک</option>
                                                       <option value="66ca18cb8e6d2287688b9f28">لباس</option>
                                                       <option value="66ca18cb8e6d2287688b9f28">خودرو</option>
                                                  </select>
                                             </div>

                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="تصاویر محصول" />

                                             <div className="flex flex-col gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input
                                                       id="files2"
                                                       name="files2"
                                                       type="file"
                                                       accept=".png,.jpg"
                                                       multiple
                                                       onChange={fillProductImages}
                                                  />
                                                  <div className="flex flex-row gap-2 m-2">
                                                       {productFormState.data.images.map((item: any) => (
                                                            <img
                                                                 src={getDefaultImageAvator(
                                                                      item
                                                                 )}
                                                                 className="w-full h-20"
                                                                 alt="store logo"
                                                                 crossOrigin="anonymous"
                                                            />

                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="توضیح کوتاه" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <textarea name="desc" rows={5} id="desc"
                                                       onChange={fillProductShortDesc}
                                                       value={productFormState.data.shortDesc}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                             </div>
                                             <ErrComponent text={productFormState.data.shortDescErr} />

                                        </div>
                                        {/* <div className="mb-4">
                                             <LabelComponent title="نقاط قوت" required="true" />

                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" ref={strongPointsRef} onKeyDown={onStrongPointsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
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
                                                       <input type="text" ref={weakPointsRef} onKeyDown={onWeakPointsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.weakPoints.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div> */}
                                        <div className="mb-4">
                                             <LabelComponent title="توضیحات محصول" />
                                             <SunEditor getSunEditorInstance={getSunEditorInstance} />
                                        </div>
                                   </div>
                              </div>

                         </div>
                         <div className="flex w-full sm:w-3/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="Seo" />
                                   <div className="p-4">
                                        <div className="mb-4">
                                             <LabelComponent title="عنوان در صفحه" />
                                             <InputBox1Component
                                                  name="pageTitle"
                                                  value={productFormState.data.pageTitle}
                                                  onchangeFunc={fillProductPageTitle}
                                             />
                                             <ErrComponent text={productFormState.data.pageTitleErr} />
                                        </div>


                                        <div className="mb-4">
                                             <LabelComponent title="عنوان لینک" />
                                             <InputBox1Component
                                                  name="pageLink"
                                                  value={productFormState.data.pageLink}
                                                  onchangeFunc={fillProductPageLink}
                                             />
                                             <ErrComponent text={productFormState.data.pageLinkErr} />
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="توضیحات" />
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
                                                       <input type="text" ref={KeywordsRef} onKeyDown={onKeywordsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {productFormState.data.keywords.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="وضعیت" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <select id="countries" className="bg-gray-100 border
                                                       border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                                       w-full    outline-non" onChange={selectProductStatus}>
                                                       <option value="11">انتخاب کنید...</option>
                                                       <option value="1">فعال</option>
                                                       <option value="2">غیرفعال</option>
                                                       <option value="3">بایگانی شده</option>

                                                  </select>

                                             </div>
                                             <ErrComponent text={productFormState.data.statusErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="برچسب ها" />
                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <div className="w-full">
                                                       <input type="text" ref={tagsRef} onKeyDown={onTagsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
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
                                             <LabelComponent title="قیمت" />
                                             <InputBox1Component
                                                  name="price"
                                                  value={productFormState.data.price}
                                                  onchangeFunc={fillProductPrice}
                                             />
                                             <ErrComponent text={productFormState.data.priceErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="قیمت فروش" />
                                             <InputBox1Component
                                                  name="purchasePrice"
                                                  value={productFormState.data.purchasePrice}
                                                  onchangeFunc={fillProductPurchasePrice}
                                             />
                                             <ErrComponent text={productFormState.data.purchasePriceErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="سایز" />
                                             <InputBox1Component
                                                  name="size"
                                                  value={productFormState.data.size}
                                                  onchangeFunc={fillProductSize}
                                             />
                                             <ErrComponent text={productFormState.data.sizeErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="وزن" />
                                             <InputBox1Component
                                                  name="weight"
                                                  value={productFormState.data.weight}
                                                  onchangeFunc={fillProductWeight}
                                             />
                                             <ErrComponent text={productFormState.data.weightErr} /> </div>
                                        <div className="mb-4">
                                             <LabelComponent title="موجودی" />
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
                                                       <input type="text" ref={colorsRef} onKeyDown={onColorsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
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
                         <LgSubmitbtnComponent title="ثبت  محصول" onClickFunc={submit}>
                         </LgSubmitbtnComponent>
                    </div>
               </div>
          </div >
     )
}