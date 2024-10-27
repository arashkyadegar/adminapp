import BoxTitleUnderlineComponent from "../share/box-title-underline";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import 'suneditor/dist/css/suneditor.min.css'
import validator from "validator";
import TagComponent from "../share/tag";
import ErrComponent from "../share/err";
import { produce } from "immer";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { rgx_insecure } from "../../utility/regex";
import { productFormCleared, productFormFilled, productFormImagesAdded } from "../../redux/store/product/product-form";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';
import { useEffect, useRef, useState } from "react";
import { getDefaultImageAvator } from "../../utility/imageUtility";
import ResponseStatus from "../../utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import { FileService } from "../../services/fileService";
import LgSubmitbtnComponent from "../share/btn/lg-submit-btn";
import { getProductAction, submitAddProductAction, submitEditProductAction } from "../../redux/store/product/product-action";
import Loading from "../share/loading";
import { getCategoriesAction } from "../../redux/store/category/category-action";

import React, { createContext, useContext } from 'react';
import { addTabToggle } from "../../redux/store/productTab/productAddTab";
import { getBrandsAction } from "../../redux/store/brand/brand-action";
import { useParams } from "react-router-dom";


export default function ProductEditComponent() {
     const { id } = useParams();
     const formdata2 = new FormData();

     const exterasNameRef = useRef<any>();
     const exterasValueRef = useRef<any>();

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
     const brandsState = useAppSelector((state) => state.entities.brands);
     const productAddTabState = useAppSelector((state) => state.entities.addTab);
     useEffect(() => {
          dispatch(productFormCleared());
          dispatch(getCategoriesAction());
          dispatch(getBrandsAction());
          dispatch(getProductAction(id));
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
     function fillProductDiscount(event: any) {
          let text: string = event.target.value;
          if (validator.isNumeric(text)) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         discountErr: "",
                         discount: text,
                         formIsValid: true,
                    })
               );
          } else {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         discountErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         discount: text,
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
                    _id: id,
                    name: productFormState.data.name,
                    subCategories: productFormState.data.subCategories,
                    categoryId: productFormState.data.categoryId,
                    brand: productFormState.data.brand,
                    images: productFormState.data.images,
                    shortDesc: productFormState.data.shortDesc,
                    longdesc: editorRef.current?.getContents(true),
                    weakPoints: productFormState.data.weakPoints,
                    strongPoints: productFormState.data.strongPoints,
                    extras: productFormState.data.exteras,
                    pageTitle: productFormState.data.pageTitle,
                    pageLink: productFormState.data.pageLink,
                    desc: productFormState.data.desc,
                    keywords: productFormState.data.keywords,
                    tags: productFormState.data.tags,

                    status: productFormState.data.status,
                    size: productFormState.data.size,
                    price: productFormState.data.price,
                    discount: productFormState.data.discount,
                    purchasePrice: productFormState.data.purchasePrice,
                    weight: productFormState.data.weight,
                    stock: productFormState.data.stock,
                    colors: productFormState.data.colors,

                    updatedAt: "",
               };
               try {
                    editorRef.current?.setContents("");
                    dispatch(submitEditProductAction(entity));
               } catch (err) {
                    console.log("rrrr");
               }
          } else {
               ToastFail("لطفا مقادیر فیلدهای الزامی را با دقت وارد کنید");
          }
     }

     function toggleGeneralTab(event: any): void {
          dispatch(
               addTabToggle({
                    ...productAddTabState.data,
                    generalTabToggle: true,
                    seoTabToggle: false,
                    sellTabToggle: false,
               })
          );
     }

     function toggleSeoTab(event: any): void {
          dispatch(
               addTabToggle({
                    ...productAddTabState.data,
                    generalTabToggle: false,
                    seoTabToggle: true,
                    sellTabToggle: false,
               })
          );
     }
     function toggleSellTab(event: any) {
          dispatch(
               addTabToggle({
                    ...productAddTabState.data,
                    generalTabToggle: false,
                    seoTabToggle: false,
                    sellTabToggle: true,
               })
          );
     }
     function onAddExtrasClick(event: any) {
          const name = exterasNameRef.current.value;
          const value = exterasValueRef.current.value;
          if ((!validator.isEmpty(name.trim())) && (!validator.isEmpty(value.trim()))) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         exteras: [...productFormState.data.exteras, { name, value }]
                    }))

               exterasNameRef.current.value = "";
               exterasValueRef.current.value = "";
          }

     }
     function removeProductExtra(value: any) {
          const list = productFormState.data.exteras.filter((item: any) => item.name != value);
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    exteras: list
               }))
     }
     function removeProductSubCategories(value: any) {
          const list = productFormState.data.subCategories.filter((item: any) => item != value);
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    subCategories: list
               }))
     }

     function removeProductKeywords(value: any) {
          const list = productFormState.data.keywords.filter((item: any) => item != value);
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    keywords: list
               }))
     }
     function removeProductTags(value: any) {
          const list = productFormState.data.tags.filter((item: any) => item != value);
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    tags: list
               }))
     }
     function removeProductColors(value: any) {
          const list = productFormState.data.colors.filter((item: any) => item != value);
          dispatch(
               productFormFilled({
                    ...productFormState.data,
                    colors: list
               }))
     }
     function fillImageStatus(event: any): void {
          let name = event.target.value;
          let obj = productFormState.data.images.find((x: any) => x.name == name);
          if (obj != undefined) {
               const nextState = produce(productFormState, (draftState) => {
                    draftState.data.images.map((i: any) => {
                         if (i.name == name) {
                              i.status = true;
                         } else {
                              i.status = false;
                         }
                    });
               });
               dispatch(productFormImagesAdded(nextState.data.images));
          }
     }

     function fillImageAlt(event: any): void {
          let element = event.target as HTMLInputElement;
          let text = element.value;
          let id = element.getAttribute('id');
          let obj = productFormState.data.images.find((x: any) => x.name == id);
          if (obj != undefined) {
               const nextState = produce(productFormState, (draftState) => {
                    draftState.data.images.map((i: any) => {
                         if (i.name == id) {
                              i.alt = text;
                         }
                    });
               });
               dispatch(productFormImagesAdded(nextState.data.images));
          }
     }
     function onColorsAddClick(event: any) {
          let text: string = colorsRef.current.value;
          if (!validator.isEmpty(text.trim())) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         colors: [...productFormState.data.colors, text]
                    }))
               colorsRef.current.value = "";
          }
     }

     function onSubCategoriesAddClick(event: any) {
          let text: string = subCategoriesRef.current.value;
          if (!validator.isEmpty(text.trim())) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         subCategories: [...productFormState.data.subCategories, text]
                    }))
               subCategoriesRef.current.value = "";
          }
     }

     function onKeywordsAddClick(event: any) {
          let text: string = KeywordsRef.current.value;

          if (!validator.isEmpty(text.trim())) {


               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         keywords: [...productFormState.data.keywords, text]
                    }))
               KeywordsRef.current.value = "";
          }

     }
     function onTagsAddClick(event: any) {
          let text: string = tagsRef.current.value;
          if (!validator.isEmpty(text.trim())) {
               dispatch(
                    productFormFilled({
                         ...productFormState.data,
                         tags: [...productFormState.data.tags, text]
                    }))
               tagsRef.current.value = "";
          }

     }


     return (
          <div className="w-full sm:w-10/12 mr-0 sm:mr-16">
               {productFormState.isLoading && (
                    <Loading />
               )}
               <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
                    <BoxTitleLgComponent title="محصول جدید" />
                    <div className="flex flex-col sm:flex-row gap-2">
                         <ul className="w-1/4 flex flex-row sm:flex-col bg-transparent text-gray-500 h-fit rounded-md">
                              <li onClick={toggleGeneralTab}
                                   className={
                                        productAddTabState.data.generalTabToggle ? "bg-teal-300 text-teal-900 p-2 rounded-md cursor-pointer font-bold" :
                                             "p-2 rounded-md cursor-pointer hover:font-bold"} >عمومی</li>
                              <li onClick={toggleSeoTab} className={
                                   productAddTabState.data.seoTabToggle ? "bg-teal-300 text-teal-900 p-2 rounded-md cursor-pointer font-bold" :
                                        "p-2 rounded-md cursor-pointer hover:font-bold"}>Seo</li>
                              <li onClick={toggleSellTab} className={
                                   productAddTabState.data.sellTabToggle ? "bg-teal-300 text-teal-900 p-2 rounded-md cursor-pointer font-bold" :
                                        "p-2 rounded-md cursor-pointer hover:font-bold"}>فروش</li>
                         </ul>

                         <div className="flex flex-col w-full gap-4 ">
                              {/* general info */}

                              {productAddTabState.data.generalTabToggle && (
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        {/* <div className="flex flex-col w-full bg-white  border border-gray-200"> */}
                                        <BoxTitleUnderlineComponent title="اطلاعات اصلی" />
                                        <div className="p-4">
                                             <div className="mb-4">
                                                  <LabelComponent name="name" title="عنوان محصول" required="true" />
                                                  <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <input type="text"
                                                            name="name"
                                                            id="name"
                                                            value={productFormState.data.name}
                                                            onChange={fillProductName}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                                  </div>
                                                  <ErrComponent text={productFormState.data.nameErr} />
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent name="subCategories" title="زیر مجموعه" required="true" />
                                                  <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <div className="w-full flex flex-row">
                                                            <input type="text" id="subCategories" name="subCategories" ref={subCategoriesRef} onKeyDown={onSubCategoriesKeyDown} className=" w-full  bg-gray-100  text-gray-900 text-sm  block  p-2.5     outline-none" />
                                                            {/* add new button  */}
                                                            <button id="countries" onClick={onSubCategoriesAddClick} className="flex m-1 sm:hidden bg-gray-50 border border-gray-300 text-gray-300 items-center justify-center hover:text-gray-700 text-sm rounded-lg w-fit  p-2.5 ">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                       {productFormState.data.subCategories !== undefined && (
                                                            <div className="grid grid-cols-4 w-full justify-start items-start">
                                                                 {productFormState.data.subCategories.map((item: any) => (
                                                                      <TagComponent title={item} onclickFunc={() => { removeProductSubCategories(item) }} />
                                                                 ))}
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>

                                             <div className="mb-4">
                                                  <LabelComponent name="subCategories" title="جزییات اضافی" required="true" />
                                                  <div className="flex flex-col gap-2 justify-between">
                                                       <div className="flex flex-row justify-between gap-2">
                                                            <div className="w-full   bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                                 <input type="text" name="subCategories" placeholder="نام" ref={exterasNameRef} onKeyDown={onSubCategoriesKeyDown} className=" w-full  bg-gray-100  text-gray-900 text-sm  block  p-2.5     outline-none" />
                                                            </div>
                                                            <div className="w-full   bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                                 <input type="text" name="subCategories" placeholder="مقدار" ref={exterasValueRef} onKeyDown={onSubCategoriesKeyDown} className=" w-full  bg-gray-100  text-gray-900 text-sm  block  p-2.5     outline-none" />
                                                            </div>
                                                            <div className="w-1/4 flex flex-row items-center">
                                                                 <a className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer" onClick={onAddExtrasClick}>
                                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                      </svg>
                                                                 </a>

                                                            </div>
                                                       </div>
                                                       {productFormState.data.exteras !== undefined && (

                                                            productFormState.data.exteras.map((item: any) => (
                                                                 <div className="flex flex-row justify-between gap-2">
                                                                      <div className="w-full   bg-white   text-gray-900 text-sm   px-1  border">
                                                                           {item.name}
                                                                      </div>
                                                                      <div className="w-full   bg-white  text-gray-900 text-sm   px-1  border">
                                                                           {item.value}
                                                                      </div>
                                                                      <div className="w-1/4 flex flex-row items-center" onClick={() => { removeProductExtra(item.name) }} >

                                                                           <a className="font-medium text-red-600 dark:text-red-500 cursor-pointer border">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                                </svg>
                                                                           </a>
                                                                      </div>
                                                                 </div>
                                                            ))

                                                       )}


                                                  </div>
                                             </div>


                                             <div className="mb-4">
                                                  <LabelComponent title="زیر مجموعه اصلی" name="CategoryId" required="true" />

                                                  <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                       <select id="CategoryId"
                                                            name="CategoryId"
                                                            value={productFormState.data.categoryId}
                                                            onChange={selectProductCategoryId}
                                                            className="bg-gray-100 border
                                  border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                  w-full    outline-non" >

                                                            <option value="11"> انتخاب کنید</option>
                                                            {categoriesState.list.map((item: any) => (
                                                                 <option key={item._id} value={item._id}>{item.name}</option>
                                                            ))}
                                                       </select>

                                                  </div>
                                                  {/* <ErrComponent text={productFormState.data.categoryIdErr} /> */}
                                             </div>

                                             <div className="mb-4">
                                                  <LabelComponent title="برند" name="brand" />
                                                  <div className="flex flex-row gap-2 justify-end items-center bg-gray-100  
                    text-gray-900 text-sm rounded-lg  px-1">
                                                       <select
                                                            id="brand"
                                                            name="brand"
                                                            value={productFormState.data.brand}
                                                            onChange={selectProductBrand}
                                                            className="bg-gray-100 border
                        border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                        w-full    outline-non"   >
                                                            <option value="11">انتخاب کنید</option>
                                                            {brandsState.list.map((item: any) => (
                                                                 <option key={item._id} value={item._id}>{item.name}</option>
                                                            ))}
                                                       </select>
                                                  </div>

                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="تصاویر محصول" name="images" />

                                                  <div className="flex flex-col gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <input
                                                            id="files2"
                                                            name="files2"
                                                            type="file"
                                                            accept=".png,.jpg"
                                                            multiple
                                                            onChange={fillProductImages}
                                                       />
                                                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 m-2">
                                                            {productFormState.data.images.map((item: any, index: number) => (

                                                                 <div className="flex flex-col justify-start items-start">
                                                                      <input type="text" onChange={fillImageAlt} id={item.name} value={item.alt} className=" w-full  bg-white  text-gray-900 text-sm  block  p-2.5     outline-none" />
                                                                      <input type="radio" name="status" checked={item.status} value={item.name} onChange={fillImageStatus} />
                                                                      <img key={item.name}
                                                                           src={getDefaultImageAvator(
                                                                                item.name
                                                                           )}
                                                                           className="w-full h-20"
                                                                           alt="store logo"
                                                                      // crossOrigin="anonymous"
                                                                      />

                                                                 </div>

                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="توضیح کوتاه" name="desc" />

                                                  <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <textarea
                                                            name="shortDesc"
                                                            id="shortDesc"
                                                            value={productFormState.data.shortDesc}
                                                            onChange={fillProductShortDesc}
                                                            rows={5}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                                  </div>
                                                  {/* <ErrComponent text={productFormState.data.shortDescErr} /> */}

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
                                                  <LabelComponent name="SunEditor" title="توضیحات محصول" />
                                                  <SunEditor getSunEditorInstance={getSunEditorInstance} />
                                             </div>
                                        </div>
                                        {/* </div> */}

                                   </div>
                              )}



                              {/* seo */}
                              {productAddTabState.data.seoTabToggle && (
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        <BoxTitleUnderlineComponent title="Seo" />
                                        <div className="p-4">
                                             <div className="mb-4">
                                                  <LabelComponent title="عنوان در صفحه" />
                                                  <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <input type="text"
                                                            name="pageTitle"
                                                            id="pageTitle"
                                                            value={productFormState.data.pageTitle}
                                                            onChange={fillProductPageTitle}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                                  </div>
                                                  {/* <ErrComponent text={productFormState.data.pageTitleErr} /> */}
                                             </div>


                                             <div className="mb-4">
                                                  <LabelComponent title="عنوان لینک" />
                                                  <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <input type="text"
                                                            name="pageLink"
                                                            id="pageLink"
                                                            value={productFormState.data.pageLink}
                                                            onChange={fillProductPageLink}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                                  </div>
                                                  <ErrComponent text={productFormState.data.pageLinkErr} />
                                             </div>

                                             <div className="mb-4">
                                                  <LabelComponent title="توضیحات" />
                                                  <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <textarea name="desc" rows={5} id="desc"
                                                            value={productFormState.data.desc}
                                                            onChange={fillProductDesc}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>
                                                  </div>
                                                  <ErrComponent text={productFormState.data.descErr} />
                                             </div>

                                             <div className="mb-4">
                                                  <LabelComponent title="کلمات کلیدی" />
                                                  <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                       <div className="w-full flex flex-row">
                                                            <input type="text" ref={KeywordsRef} onKeyDown={onKeywordsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                            {/* add new button  */}
                                                            <button id="countries" onClick={onKeywordsAddClick} className="flex m-1 sm:hidden bg-gray-50 border border-gray-300 text-gray-300 items-center justify-center hover:text-gray-700 text-sm rounded-lg w-fit  p-2.5 ">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                       <div className="grid grid-cols-4 justify-start items-start w-full">
                                                            {productFormState.data.keywords.map((item: any) => (
                                                                 <TagComponent title={item} onclickFunc={() => { removeProductKeywords(item) }} />
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="وضعیت" />

                                                  <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                       <select id="status"
                                                            name="status"
                                                            value={productFormState.data.status}
                                                            onChange={selectProductStatus}
                                                            className="bg-gray-100 border
                                                       border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                                       w-full outline-non" >
                                                            <option value="11">انتخاب کنید...</option>
                                                            <option value="1">فعال</option>
                                                            <option value="2">غیرفعال</option>
                                                            <option value="3">بایگانی شده</option>

                                                       </select>

                                                  </div>

                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="برچسب ها" />
                                                  <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <div className="w-full flex flex-row">
                                                            <input type="text" id="tags" name="tags" ref={tagsRef} onKeyDown={onTagsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                            {/* add new button  */}
                                                            <button id="countries" onClick={onTagsAddClick} className="flex m-1 sm:hidden bg-gray-50 border border-gray-300 text-gray-300 items-center justify-center hover:text-gray-700 text-sm rounded-lg w-fit  p-2.5 ">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                       <div className="grid grid-cols-4 justify-start items-start w-full">
                                                            {productFormState.data.tags.map((item: any) => (
                                                                 <TagComponent title={item} onclickFunc={() => { removeProductTags(item) }} />
                                                            ))}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )}

                              {/* فروش */}
                              {productAddTabState.data.sellTabToggle && (
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        <BoxTitleUnderlineComponent title="فروش" />
                                        <div className="p-4">
                                             <div className="mb-4">
                                                  <LabelComponent title="قیمت" />

                                                  <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <input type="text"
                                                            name="price"
                                                            id="price"
                                                            value={productFormState.data.price}
                                                            onChange={fillProductPrice}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                                  </div>
                                                  <ErrComponent text={productFormState.data.priceErr} />
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="قیمت فروش" />
                                                  <input type="text"
                                                       name="purchasePrice"
                                                       id="purchasePrice"
                                                       value={productFormState.data.purchasePrice}
                                                       onChange={fillProductPurchasePrice}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                                  <ErrComponent text={productFormState.data.purchasePriceErr} />
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="تخفیف (٪)" />

                                                  <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <input type="text"
                                                            name="discount"
                                                            id="discount"
                                                            value={productFormState.data.discount}
                                                            onChange={fillProductDiscount}
                                                            className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                                  </div>
                                                  <ErrComponent text={productFormState.data.discountErr} />

                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="سایز" />
                                                  <input type="text"
                                                       name="size"
                                                       id="size"
                                                       value={productFormState.data.size}
                                                       onChange={fillProductSize}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="وزن" />
                                                  <input type="text"
                                                       name="weight"
                                                       id="weight"
                                                       value={productFormState.data.weight}
                                                       onChange={fillProductWeight}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="موجودی" />
                                                  <input type="text"
                                                       name="stock"
                                                       id="stock"
                                                       value={productFormState.data.stock}
                                                       onChange={fillProductStock}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                             </div>
                                             <div className="mb-4">
                                                  <LabelComponent title="رنگ" />
                                                  <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                       <div className="w-full flex flex-row">
                                                            <input type="text" name="colors"
                                                                 id="colors" ref={colorsRef} onKeyDown={onColorsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                            {/* add new button  */}
                                                            <button id="countries" onClick={onColorsAddClick} className="flex m-1 sm:hidden bg-gray-50 border border-gray-300 text-gray-300 items-center justify-center hover:text-gray-700 text-sm rounded-lg w-fit  p-2.5 ">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                                      <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                       <div className="grid grid-cols-4 justify-start items-start w-full">
                                                            {productFormState.data.colors.map((item: any) => (
                                                                 <TagComponent title={item} onclickFunc={() => { removeProductColors(item) }} />
                                                            ))}
                                                       </div>
                                                  </div>    </div>
                                        </div>
                                   </div>
                              )}
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