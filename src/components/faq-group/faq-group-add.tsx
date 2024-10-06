
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";


import LargSubmitbtnComponent from "../share/btn/lg-submit-btn";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";

import { categoryFormCleared, categoryFormFilled } from "../../redux/store/category/category-form";


import { ToastFail } from "../../utility/tostify";

import { getCategoriesAction, getCategoriesTreeAction, submitAddCategoryAction } from "../../redux/store/category/category-action";
import { faqFormCleared } from "../../redux/store/faq/faq-form";
import { submitAddFaqGroupAction } from "../../redux/store/faqgroup/faq-group-action";
import { faqGroupFormFilled } from "../../redux/store/faqgroup/faq-group-form";
import validator from "validator";
import { rgx_insecure } from "../../utility/regex";
import ErrComponent from "../share/err";


export default function FaqGroupAddComponent() {

     const dispatch = useAppDispatch();
     const faqGroupFormState = useAppSelector((state) => state.entities.faqGroupForm);

     useEffect(() => {
          dispatch(faqFormCleared())
     }, []);


     function fillFaqGroupName(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    faqGroupFormFilled({
                         ...faqGroupFormState.data,
                         nameErr: "لطفا نام گروه را وارد کنید",
                         formIsValid: false,
                         name: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    faqGroupFormFilled({
                         ...faqGroupFormState.data,
                         nameErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         name: text,
                    })
               );
          } else {
               dispatch(
                    faqGroupFormFilled({
                         ...faqGroupFormState.data,
                         nameErr: "",
                         name: text,
                         formIsValid: true,
                    })
               );
          }

     }

     function selectFaqGroupDisplay(event: any) {
          const text = event.target.value
          dispatch(
               faqGroupFormFilled({
                    ...faqGroupFormState.data,
                    displayErr: "",
                    display: text,
                    formIsValid: true,
               })
          );
     }

     function fillFaqGroupPriority(event: any) {
          const text = event.target.value
          dispatch(
               faqGroupFormFilled({
                    ...faqGroupFormState.data,
                    priorityErr: "",
                    priority: text,
                    formIsValid: true,
               })
          );
     }
     function fillFaqGroupQuestion(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    faqGroupFormFilled({
                         ...faqGroupFormState.data,
                         questionErr: "لطفا سوال را وارد کنید",
                         formIsValid: false,
                         question: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    faqGroupFormFilled({
                         ...faqGroupFormState.data,
                         questionErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         question: text,
                    })
               );
          } else {
               dispatch(
                    faqGroupFormFilled({
                         ...faqGroupFormState.data,
                         questionErr: "",
                         question: text,
                         formIsValid: true,
                    })
               );
          }
     }

     function submit(event: any) {
          //alert(editorRef.current?.getContents(true))
          if (faqGroupFormState.data.formIsValid) {
               const entity = {
                    _id: "",
                    name: faqGroupFormState.data.name,
                    display: (faqGroupFormState.data.display === "1" ? true : false),
                    priority: faqGroupFormState.data.priority,
                    createdAt: "",
               };
               try {
                    dispatch(submitAddFaqGroupAction(entity));
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
                    <BoxTitleLgComponent title="گروهبندی جدید" />

                    <div className="flex flex-col sm:flex-row w-full gap-4 ">

                         <div className="flex w-full flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">

                                   <div className="p-4">

                                        <div className="mb-4">
                                             <LabelComponent name="name" title="نام" required="true" />
                                             <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="text"
                                                       name="name"
                                                       id="name"
                                                       value={faqGroupFormState.data.name}
                                                       onChange={fillFaqGroupName}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                             </div>
                                             <ErrComponent text={faqGroupFormState.data.nameErr} />
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="وضعیت نمایش" name="display" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <select id="display"
                                                       name="display"
                                                       value={faqGroupFormState.data.display}
                                                       onChange={selectFaqGroupDisplay}
                                                       className="bg-gray-100 border
                                  border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                  w-full    outline-non" >

                                                       <option value="1">نمایش</option>
                                                       <option value="0">پنهان</option>
                                                  </select>

                                             </div>
                                             {/* <ErrComponent text={faqGroupFormState.data.displayErr} /> */}
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent name="name" title="مرتبه نمایش" />
                                             <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="number"
                                                       name="name"
                                                       id="name"
                                                       defaultValue={1}
                                                       value={faqGroupFormState.data.priority}
                                                       onChange={fillFaqGroupPriority}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                             </div>
                                             {/* <ErrComponent text={productFormState.data.nameErr} /> */}
                                        </div>
                                   </div>

                              </div>
                         </div>


                    </div>
                    <div className="flex flex-col justify-start items-end">
                         <LargSubmitbtnComponent onClickFunc={submit} title="ثبت گروهبندی سوال" />

                    </div>

               </div>
          </div>
     )
}