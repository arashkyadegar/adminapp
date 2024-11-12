import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import imageForm, { imageFormCleared, imageFormFilled, imageFormImagesAdded } from "../../redux/store/image/image-form";
import BoxTitleLgComponent from "../share/lg-box-title";
import Loading from "../share/loading";
import LabelComponent from "../share/label";
import { getDefaultImageAvator } from "../../utility/imageUtility";
import LgSubmitbtnComponent from "../share/btn/lg-submit-btn";
import BoxTitleUnderlineComponent from "../share/box-title-underline";
import { produce } from "immer";
import { submitAddImageAction, submitAddImagesAction } from "../../redux/store/image/image-action";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import ResponseStatus from "../../utility/responseStatus";
import { FileService } from "../../services/fileService";

export default function ImageAddComponent() {
  const formdata2 = new FormData();

  const dispatch = useAppDispatch();
  const imageFormState = useAppSelector((state) => state.entities.imageForm);

  useEffect(() => {
    dispatch(imageFormCleared());
  }, []);

  async function fillProductImages(event: any) {
    const files = event.target.files;
    let count = files.length;
    for (var i = 0; i < count; i++) {
      formdata2.append("files", files[i]);
    }
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
  }

  function submit(event: any) {
    //alert(editorRef.current?.getContents(true))
    if (imageFormState.data.formIsValid) {
      const entity = {
        _id: "",
        images: imageFormState.data.images,
        createdAt: "",
      };
      try {
        dispatch(submitAddImagesAction(entity));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلدهای الزامی را با دقت وارد کنید");
    }
  }

  function fillImageTitle(event: any): void {
    let element = event.target as HTMLInputElement;
    let text = element.value;
    let id = element.getAttribute('id');
    let obj = imageFormState.data.images.find((x: any) => x.name == id);
    if (obj != undefined) {
      const nextState = produce(imageFormState, (draftState) => {
        draftState.data.images.map((i: any) => {
          if (i.name == id) {
            i.title = text;
          }
        });
      });
      dispatch(imageFormImagesAdded(nextState.data.images));
    }
  }


  function fillImageAlt(event: any): void {
    let element = event.target as HTMLInputElement;
    let text = element.value;
    let id = element.getAttribute('id');
    let obj = imageFormState.data.images.find((x: any) => x.name == id);
    if (obj != undefined) {
      const nextState = produce(imageFormState, (draftState) => {
        draftState.data.images.map((i: any) => {
          if (i.name == id) {
            i.alt = text;
          }
        });
      });
      dispatch(imageFormImagesAdded(nextState.data.images));
    }
  }

  function removeImage(value: any) {
    const list = imageFormState.data.images.filter((item: any) => item.name != value);
    dispatch(
      imageFormFilled({
        ...imageFormState.data,
        images: list
      }))
  }
  return (
    <div className="w-full sm:w-10/12 mr-0 sm:mr-16">
      {imageFormState.isLoading && (
        <Loading />
      )}
      <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
        <BoxTitleLgComponent title="آپلود تصویر" />
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-col w-full gap-4 ">
            <div className="flex flex-col w-full bg-white  border border-gray-200">
              {/* <div className="flex flex-col w-full bg-white  border border-gray-200"> */}
              <BoxTitleUnderlineComponent title="اطلاعات اصلی" />
              <div className="p-4">

                <div className="mb-4">
                  <LabelComponent title="تصاویر محصول" name="images" />

                  <div className="flex flex-col gap-2 justify-start items-start bg-white   text-gray-900 text-sm rounded-lg  px-1">
                    <input
                      id="files2"
                      name="files2"
                      type="file"
                      accept=".png,.jpg"
                      multiple
                      onChange={fillProductImages}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 m-2">
                      {imageFormState.data.images.map((item: any, index: number) => (
                        <div key={item.name} className="flex flex-col gap-1 w-full justify-start items-center border rounded-lg overflow-hidden p-2">
                          <div className="flex w-full justify-end">
                            <div onClick={() => { removeImage(item.name) }} className="w-fit  border hover:border-red-500 cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
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
                          <div className="my-4 flex w-full flex-col items-start">
                            <LabelComponent name="title" title="عنوان" required="true" />
                            <div className="flex w-full flex-row-reverse gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">

                              <input type="text"
                                name="title"
                                id={item.name}
                                value={item.title}
                                onChange={fillImageTitle}
                                className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                            </div>

                            <LabelComponent name="alt" title="alt" required="true" />
                            <div className="flex w-full flex-row-reverse gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                              <input type="text"
                                name="alt"
                                id={item.name}
                                value={item.alt}
                                onChange={fillImageAlt}
                                className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-start items-end">
          <LgSubmitbtnComponent title="ثبت  تصویر" onClickFunc={submit}>
          </LgSubmitbtnComponent>
        </div>
      </div>

    </div >

  )
}