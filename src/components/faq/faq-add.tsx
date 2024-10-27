import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import LargSubmitbtnComponent from "../share/btn/lg-submit-btn";
import ErrComponent from "../share/err";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import validator from "validator";
import { categoryFormCleared } from "../../redux/store/category/category-form";
import { rgx_insecure } from "../../utility/regex";
import {  ToastFail } from "../../utility/tostify";
import { getCategoriesAction, getCategoriesTreeAction } from "../../redux/store/category/category-action";
import { faqFormFilled } from "../../redux/store/faq/faq-form";
import { submitAddFaqAction } from "../../redux/store/faq/faq-action";
import {  getFaqGroupsAction } from "../../redux/store/faqgroup/faq-group-action";
export default function FaqAddComponent() {
     const dispatch = useAppDispatch();
     const faqFormState = useAppSelector((state) => state.entities.faqForm);

     const faqGroupsState = useAppSelector((state) => state.entities.faqGroups);
     useEffect(() => {
          dispatch(categoryFormCleared())
          dispatch(getFaqGroupsAction());
          dispatch(getCategoriesTreeAction());
     }, []);

     function selectFaqGroupId(event: any) {
          const text = event.target.value
          dispatch(
               faqFormFilled({
                    ...faqFormState.data,
                    groupIdErr: "",
                    groupId: text,
                    formIsValid: true,
               })
          );
     }

     function selectFaqDisplay(event: any) {
          const text = event.target.value
          dispatch(
               faqFormFilled({
                    ...faqFormState.data,
                    displayErr: "",
                    display: text,
                    formIsValid: true,
               })
          );
     }

     function fillFaqPriority(event: any) {
          const text = event.target.value
          dispatch(
               faqFormFilled({
                    ...faqFormState.data,
                    priorityErr: "",
                    priority: text,
                    formIsValid: true,
               })
          );
     }
     function fillFaqQuestion(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    faqFormFilled({
                         ...faqFormState.data,
                         questionErr: "لطفا سوال را وارد کنید",
                         formIsValid: false,
                         question: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    faqFormFilled({
                         ...faqFormState.data,
                         questionErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         question: text,
                    })
               );
          } else {
               dispatch(
                    faqFormFilled({
                         ...faqFormState.data,
                         questionErr: "",
                         question: text,
                         formIsValid: true,
                    })
               );
          }
     }
     function fillFaqAnswer(event: any) {
          let text: string = event.target.value;
          if (validator.isEmpty(text)) {
               dispatch(
                    faqFormFilled({
                         ...faqFormState.data,
                         answerErr: "لطفا پاسخ را وارد کنید",
                         formIsValid: false,
                         answer: text,
                    })
               );
          } else if (validator.matches(text, rgx_insecure)) {
               dispatch(
                    faqFormFilled({
                         ...faqFormState.data,
                         answerErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
                         formIsValid: false,
                         answer: text,
                    })
               );
          } else {
               dispatch(
                    faqFormFilled({
                         ...faqFormState.data,
                         answerErr: "",
                         answer: text,
                         formIsValid: true,
                    })
               );
          }

     }

     function submit(event: any) {
          //alert(editorRef.current?.getContents(true))
          if (faqFormState.data.formIsValid) {
               const entity = {
                    _id: "",
                    groupId: faqFormState.data.groupId,
                    question: faqFormState.data.question,
                    answer: faqFormState.data.answer,
                    display: (faqFormState.data.display === "1" ? true : false),
                    priority: faqFormState.data.priority,
                    createdAt: "",
               };
               try {
                    dispatch(submitAddFaqAction(entity));
               } catch (err) {
                    console.log("rrrr");
               }
          } else {
               ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
          }
     }
     return (
          <div className="w-full sm:w-10/12 mr-0 sm:mr-16">
               <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
                    <BoxTitleLgComponent title=" سوال جدید" />

                    <div className="flex flex-col sm:flex-row w-full gap-4 ">

                         <div className="flex w-full flex-col  gap-4  border border-gray-200">
                              <div className="flex flex-col w-full bg-white  border border-gray-200">

                                   <div className="p-4">

                                        <div className="mb-4">
                                             <LabelComponent title="گروه" name="faqGroupId" required="true" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <select id="faqGroupId"
                                                       name="faqGroupId"
                                                       value={faqFormState.data.groupId}
                                                       onChange={selectFaqGroupId}
                                                       className="bg-gray-100 border
                                  border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                  w-full    outline-non" >
                                                       {faqGroupsState.list.map((item: any) => (
                                                            <option key={item._id} value={item._id}>{item.name}</option>
                                                       ))}
                                                  </select>

                                             </div>
                                             {/* <ErrComponent text={productFormState.data.categoryIdErr} /> */}
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="سوال" required="true" />
                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <textarea name="question" rows={5} id="question"
                                                       onChange={fillFaqQuestion}
                                                       value={faqFormState.data.question}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>

                                             </div>
                                             <ErrComponent text={faqFormState.data.questionErr} />
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent title="پاسخ" required="true" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <textarea name="answer" rows={5} id="answer"
                                                       onChange={fillFaqAnswer}
                                                       value={faqFormState.data.answer}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  block  p-2.5     outline-none"></textarea>

                                             </div>
                                             <ErrComponent text={faqFormState.data.answerErr} />

                                        </div>
                                        <div className="mb-4">
                                             <LabelComponent title="وضعیت نمایش" name="CategoryId" />

                                             <div className="flex flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                                                  <select id="CategoryId"
                                                       name="CategoryId"
                                                       value={faqFormState.data.display}
                                                       onChange={selectFaqDisplay}
                                                       className="bg-gray-100 border
                                  border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                  w-full    outline-non" >

                                                       <option value="1">نمایش</option>
                                                       <option value="0">پنهان</option>
                                                  </select>

                                             </div>
                                             {/* <ErrComponent text={productFormState.data.categoryIdErr} /> */}
                                        </div>

                                        <div className="mb-4">
                                             <LabelComponent name="name" title="مرتبه نمایش" />
                                             <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                                                  <input type="number"
                                                       name="priority"
                                                       id="priority"
                                                       defaultValue={1}
                                                       value={faqFormState.data.priority}
                                                       onChange={fillFaqPriority}
                                                       className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                                             </div>
                                             <ErrComponent text={faqFormState.data.priorityErr} />
                                        </div>
                                   </div>

                              </div>
                         </div>


                    </div>
                    <div className="flex flex-col justify-start items-end">
                         <LargSubmitbtnComponent onClickFunc={submit} title="ثبت  سوال" />

                    </div>

               </div>
          </div>
     )
}