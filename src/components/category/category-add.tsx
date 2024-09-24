import BoxTitleUnderlineComponent from "../share/box-title-underline";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import 'suneditor/dist/css/suneditor.min.css'
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";

import LargSubmitbtnComponent from "../share/btn/lg-submit-btn";
import ErrComponent from "../share/err";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import InputBox1Component from "../share/inputBox1";
import validator from "validator";
import { categoryFormFilled } from "../../redux/store/category/category-form";
import { rgx_insecure } from "../../utility/regex";
import TagComponent from "../share/tag";
import { FileService } from "../../services/fileService";
import ResponseStatus from "../../utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import { getDefaultImageAvator } from "../../utility/imageUtility";
import { getCategoriesAction, getCategoriesTreeAction, submitAddCategoryAction } from "../../redux/store/category/category-action";
import TreeView from "../treeview/treeview";

export default function CategoryAddComponent() {
     const formdata2 = new FormData();
     const keywordsRef = useRef<any>();
     const editorRefDown = useRef<SunEditorCore>();
     const editorRefUp = useRef<SunEditorCore>();
     const dispatch = useAppDispatch();
     const categoryFormState = useAppSelector((state) => state.entities.categoryForm);
     const categoriesState = useAppSelector((state) => state.entities.categories);
     const categoriesTreeState = useAppSelector((state) => state.entities.categoriesTree);
     useEffect(() => {
          dispatch(getCategoriesAction());
          dispatch(getCategoriesTreeAction());
     }, []);
     // The sunEditor parameter will be set to the core suneditor instance when this function is called
     const getSunEditorInstanceDown = (sunEditor: SunEditorCore) => {
          editorRefDown.current = sunEditor;
     };

     const getSunEditorInstanceUp = (sunEditor: SunEditorCore) => {
          editorRefUp.current = sunEditor;
     };
     function selectCategoryParent(event: any) {
          const node = event.target as HTMLInputElement;
          const text = node.getAttribute('x-value') || 0;
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         parentErr: "",
                         formIsValid: false,
                         parent: text,
                    })
               );
     }
     function fillCategoryName(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         nameErr: "لطفا  عنوان در صفحه را وارد کنید",
                         formIsValid: false,
                         name: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         nameErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         name: text,
                    })
               );
          } else {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         nameErr: "",
                         name: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillCategoryDesc(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         descErr: "لطفا  توضیحات را وارد کنید",
                         formIsValid: false,
                         desc: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         descErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         desc: text,
                    })
               );
          } else {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         descErr: "",
                         desc: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillCategoryMenuTitle(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         menuTitleErr: "لطفا  عنوان در منو را وارد کنید",
                         formIsValid: false,
                         menuTitle: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         menuTitleErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         menuTitle: text,
                    })
               );
          } else {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         menuTitleErr: "",
                         menuTitle: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillCategoryPageTitle(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         pageTitleErr: "لطفا  عنوان در صفحه را وارد کنید",
                         formIsValid: false,
                         pageTitle: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         pageTitleErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         pageTitle: text,
                    })
               );
          } else {
               dispatch(
                    categoryFormFilled({
                         ...categoryFormState.data,
                         pageTitleErr: "",
                         pageTitle: text,
                         formIsValid: true,
                    })
               );
          }
     }

     function onKeywordsKeyDown(event: any) {
          let text: string = event.target.value;
          if (!validator.isEmpty(text.trim())) {
               if (event.key === "Tab") {
                    event.preventDefault();

                    dispatch(
                         categoryFormFilled({
                              ...categoryFormState.data,
                              keywords: [...categoryFormState.data.keywords, text]
                         }))
                    keywordsRef.current.value = "";
               }
          }
     }



     async function fillcategoryIcon(event: any) {
          let count = event.target.files.length;
          if (count == 1) {
               formdata2.append("files", event.target.files[0]);

               const uploader = new FileService();
               // try {
               const response = await uploader.uploadSingle(formdata2);
               switch (response.status) {
                    case ResponseStatus.OK: {
                         const repo = await response.json();
                         dispatch(
                              categoryFormFilled({
                                   ...categoryFormState.data,
                                   iconErr: "",
                                   icon: repo.files[0],
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
               ToastFail("تنها میتوانید 1 تصویر انتخاب کنید")
          }
     }
     async function fillCategoryImage(event: any) {
          let count = event.target.files.length;
          if (count == 1) {
               formdata2.append("files", event.target.files[0]);

               const uploader = new FileService();
               // try {
               const response = await uploader.uploadSingle(formdata2);
               switch (response.status) {
                    case ResponseStatus.OK: {
                         const repo = await response.json();
                         dispatch(
                              categoryFormFilled({
                                   ...categoryFormState.data,
                                   imageErr: "",
                                   image: repo.files[0],
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
               ToastFail("تنها میتوانید 1 تصویر انتخاب کنید")
          }
     }



     function submit(event: any) {
          //alert(editorRef.current?.getContents(true))
          if (categoryFormState.data.formIsValid) {
               const entity = {
                    _id: "",
                    name: categoryFormState.data.name,
                    pageTitle: categoryFormState.data.pageTitle,
                    menuTitle: categoryFormState.data.menuTitle,
                    parent: categoryFormState.data.parent,
                    desc: categoryFormState.data.desc,
                    keywords: categoryFormState.data.keywords,
                    upDesc: editorRefUp.current?.getContents(true),
                    downDesc: editorRefDown.current?.getContents(true),
                    icon: categoryFormState.data.icon,
                    image: categoryFormState.data.image,
                    children: [],
                    createdAt: "",
               };
               try {
                    editorRefDown.current?.setContents("");
                    editorRefUp.current?.setContents("");
                    dispatch(submitAddCategoryAction(entity));
               } catch (err) {
                    console.log("rrrr");
               }
          } else {
               ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
          }
     }
     return (
          <div className="w-full sm:w-11/12 mr-0 sm:mr-16">
               <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
                    <BoxTitleLgComponent title="دسته بندی جدید" />


                    <div className="flex flex-col sm:flex-row w-full gap-4 ">

                         <div className="flex w-full sm:w-2/4 flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">
                                   <BoxTitleUnderlineComponent title="پایه" />
                                   <div className="p-4">
                                        <div className="mb-4">
                                             <LabelComponent title="عنوان" />
                                             <InputBox1Component
                                                  name="name"
                                                  value={categoryFormState.data.name}
                                                  onchangeFunc={fillCategoryName}
                                             />
                                             <ErrComponent text={categoryFormState.data.nameErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="عنوان در صفحه" />
                                             <InputBox1Component
                                                  name="pageTitle"
                                                  value={categoryFormState.data.pageTitle}
                                                  onchangeFunc={fillCategoryPageTitle}
                                             />
                                             <ErrComponent text={categoryFormState.data.pageTitleErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="عنوان در منو" />
                                             <InputBox1Component
                                                  name="menuTitle"
                                                  value={categoryFormState.data.menuTitle}
                                                  onchangeFunc={fillCategoryMenuTitle}
                                             />
                                             <ErrComponent text={categoryFormState.data.menuTitleErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="زیر مجموعه" required="true" />
                                             <div className="flex flex-row gap-2 justify-start items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">


                                                  <TreeView treeData={categoriesTreeState.list} onclickFunc={selectCategoryParent} />
                                                  {/* <select id="countries" className="bg-gray-100 border
                                                       border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                                       w-full    outline-non" onChange={selectCategoryParent}>
                                                       <option value="11">انتخاب کنید...</option>

                                                       {categoriesState.list.map((item: any) => (
                                                            <option value={item._id}>{item.name}</option>
                                                       ))}
                                                  </select> */}
                                             </div>
                                             <ErrComponent text={categoryFormState.data.parentErr} />
                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="توضیحات" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <textarea name="desc" rows={5} id="desc"
                                                       onChange={fillCategoryDesc}
                                                       value={categoryFormState.data.desc}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>

                                             </div>
                                             <ErrComponent text={categoryFormState.data.descErr} />

                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="کلمات کلیدی" />
                                             <div className="flex flex-col gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <div className="w-full">
                                                       <input type="text" ref={keywordsRef} onKeyDown={onKeywordsKeyDown} className="w-full  bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none" />
                                                  </div>
                                                  <div className="grid grid-cols-4 justify-start items-start w-full">
                                                       {categoryFormState.data.keywords.map((item: any) => (
                                                            <TagComponent title={item} />
                                                       ))}
                                                  </div>
                                             </div>
                                        </div>
                                        <LabelComponent title="متن پایین صفحه" />
                                        <SunEditor getSunEditorInstance={getSunEditorInstanceDown} />



                                   </div>

                              </div>
                         </div>

                         <div className="flex flex-col   w-full sm:w-2/4 gap-4">
                              <div className="flex  w-full  flex-col  gap-4  border border-gray-200">
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        <BoxTitleUnderlineComponent title="رسانه ها" />
                                        <div className="p-4">
                                             <LabelComponent title=" تصویر صفحه" />
                                             <div className="flex flex-col gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input
                                                       id="files2"
                                                       name="files2"
                                                       type="file"
                                                       accept=".png,.jpg"
                                                       onChange={fillCategoryImage}
                                                  />
                                                  <div className="flex flex-row gap-2 m-2">
                                                       <img
                                                            src={getDefaultImageAvator(
                                                                 categoryFormState.data.image)
                                                            }
                                                            className="w-full h-20"
                                                            alt="store logo"

                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="flex w-full flex-col  gap-4  border border-gray-200">
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">
                                        <BoxTitleUnderlineComponent title="رسانه ها" />
                                        <div className="p-4">
                                             <LabelComponent title="ایکن منو" />
                                             <div className="flex flex-col gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input
                                                       id="files2"
                                                       name="files2"
                                                       type="file"
                                                       accept=".png,.jpg"
                                                       onChange={fillcategoryIcon}
                                                  />
                                                  <div className="flex flex-row gap-2 m-2">
                                                       <img
                                                            src={getDefaultImageAvator(
                                                                 categoryFormState.data.icon
                                                            )}
                                                            className="w-full h-20"
                                                            alt="store logo"

                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="flex w-full flex-col  gap-4  border border-gray-200">
                                   <div className="flex flex-col w-full bg-white  border border-gray-200">

                                        <div className="p-4">
                                             <LabelComponent title="متن بالای صفحه" />
                                             <SunEditor getSunEditorInstance={getSunEditorInstanceUp} />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         T</div>
                    <div className="flex flex-col justify-start items-end">
                         <LargSubmitbtnComponent onClickFunc={submit} title="ثبت دسته بندی" />

                    </div>

               </div>
          </div>
     )
}