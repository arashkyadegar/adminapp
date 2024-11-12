import { useForm } from "react-hook-form";
import BoxTitleLgComponent from "../share/lg-box-title";
import LabelComponent from "../share/label";
import ErrComponent from "../share/err";
import { FileService } from "../../services/fileService";
import ResponseStatus from "../../utility/responseStatus";
import { imageFormCleared, imageFormFilled } from "../../redux/store/image/image-form";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import { getDefaultImageAvator } from "../../utility/imageUtility";
import { submitAddTicketAction } from "../../redux/store/ticket/ticket-action";


export default function TicketAddComponent() {
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
  const formdata2 = new FormData();

  const dispatch = useAppDispatch();
  const imageFormState = useAppSelector((state) => state.entities.imageForm);
  function removeImage(value: any) {
    const list = imageFormState.data.images.filter((item: any) => item.name != value);
    dispatch(
      imageFormFilled({
        ...imageFormState.data,
        images: list
      }))
  }

  async function fillTicketAttachments(event: any) {
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
            imageFormFilled({
              ...imageFormState.data,
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



  const onSubmit = (data: any) => {
    const entity = {
      _id: "",
      subject: data.subject,
      body: data.body,
      attachments: imageFormState.data.images,
      categoryId: data.categoryId,
      priority: data.priority,
      status: "OPEN",
      createdAt: "",
    };
    try {
      dispatch(submitAddTicketAction(entity));
      reset();
      dispatch(
        imageFormCleared()
      );
    } catch (err) {
      console.log("rrrr");
    }
  }

  return (<>
    <div className="w-full sm:w-10/12 mr-0 sm:mr-16">


      <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
        <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">

          <BoxTitleLgComponent title="تیکت جدید" />
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex flex-col w-full bg-white  border border-gray-200">
              <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4 flex flex-col sm:flex-row justify-between gap-4 w-full sm:w-1/2">
                    <div className="w-full">
                      <LabelComponent name="category" title="بخش" required="true" />
                      <select defaultValue={0} {...register("categoryId", { required: true })} id="categoryId" className="bg-gray-100 border
                                  border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                 w-full    outline-non" >
                        <option value="sales">بخش فروش</option>
                        <option value="backup">بخش پشتیبانی</option>
                        <option value="accounting">بخش حسابداری</option>
                      </select>
                    </div>

                    <div className="w-full">
                      <LabelComponent name="priority" title="اولویت" required="true" />
                      <select defaultValue={0} {...register("priority", { required: true })} id="priority" className="bg-gray-100 border
                                  border-gray-100 text-gray-900 text-sm rounded-lg  block  p-2.5
                                  w-full    outline-non" >
                        <option value="MEDIUM">متوسط</option>
                        <option value="HIGH">بالا</option>
                        <option value="CRITICAL">بحرانی</option>
                      </select>
                    </div>


                  </div>


                  <div className="mb-4">
                    <LabelComponent name="subject" title="موضوع" required="true" />
                    <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                      <input
                        className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none"
                        {...register("subject", { required: true, maxLength: 20 })} />
                    </div>
                    <ErrComponent text={errors.subject && "subject is required"} />

                  </div>


                  <div className="mb-4">
                    <LabelComponent name="body" title="متن" required="true" />
                    <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">


                      <textarea rows={5} id="body"   {...register("body", { required: true, maxLength: 20 })}
                        className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  
                        block  p-2.5     outline-none"></textarea>

                    </div>
                    <ErrComponent text={errors.body && "body is required"} />
                  </div>



                  <div className="mb-4">
                    <LabelComponent title="فایل" name="images" />

                    <div className="flex flex-col gap-2 justify-start items-start bg-white   text-gray-900 text-sm rounded-lg  px-1">
                      <input
                        id="files2"
                        name="files2"
                        type="file"
                        accept=".png,.jpg"
                        multiple
                        onChange={fillTicketAttachments}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 m-2">
                        {imageFormState.data.images.map((item: any, index: number) => (
                          <div key={item.name} className="flex flex-col gap-1 w-full justify-start items-center border rounded-lg overflow-hidden p-2">
                            <div className="flex w-full justify-end">
                              <div onClick={() => { removeImage(item.name) }} className="w-fit  border hover:border-red-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="border-2 border-dashed w-20 h-20 flex items-center justify-center">
                              <img
                                src={getDefaultImageAvator(
                                  item.name
                                )}
                                width="50rem" height="50rem"
                                loading="lazy"
                                alt="store logo"
                              />
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>
                  </div>





                  <div className="flex flex-col justify-start items-end">
                    <input type="submit" className="mt-4 font-bold bg-teal-500 hover:bg-teal-600 text-sm text-gray-100 p-2 rounded-lg" value="ثبت تیکت" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  </>)
}