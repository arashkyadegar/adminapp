import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getSettingAction, submitEditSettingAction } from "../../redux/store/setting/setting-action";
import settingForm, { settingFormFilled, settingFormSlideImagesAdded } from "../../redux/store/setting/setting-form";
import { FileService } from "../../services/fileService";
import { getDefaultImageAvator } from "../../utility/imageUtility";
import ResponseStatus from "../../utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import LgSubmitbtnComponent from "../share/btn/lg-submit-btn";
import LabelComponent from "../share/label";
import BoxTitleLgComponent from "../share/lg-box-title";
import Loading from "../share/loading";
import { produce } from "immer";

export default function SettingComponent() {
  const formdata2 = new FormData();
  const dispatch = useAppDispatch();
  const settingFormState = useAppSelector((state) => state.entities.settingForm);

  useEffect(() => {
    dispatch(getSettingAction(1));
  }, []);


  function fillSlideImageAlt(event: any) {
    let element = event.target as HTMLInputElement;
    let text = element.value;
    let id = element.getAttribute('id');
    let obj = settingFormState.data.slideImages.find((x: any) => x.name == id);
    if (obj != undefined) {
      const nextState = produce(settingFormState, (draftState) => {
        draftState.data.slideImages.map((i: any) => {
          if (i.name == id) {
            i.alt = text;
          }
        });
      });
      dispatch(settingFormSlideImagesAdded(nextState.data.slideImages));
    }
  }

  function fillSlideImage(event: any) { }
  async function fillSlideImages(event: any) {
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
            settingFormFilled({
              ...settingFormState.data,
              slideImages: repo.files,
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
    if (settingFormState.data.formIsValid) {
      const entity = {
        _id: "",
        slideImages: settingFormState.data.slideImages,
        createdAt: "",
      };
      try {
        dispatch(submitEditSettingAction(entity));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلدهای الزامی را با دقت وارد کنید");
    }
  }
  return (<div className="w-full sm:w-11/12 mr-0 sm:mr-16">
    {settingFormState.isLoading && (
      <Loading />
    )}
    <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
      <BoxTitleLgComponent title="تنظیمات" />
      <div className="flex flex-col sm:flex-row w-full gap-4 ">
        <div className="mb-4">
          <LabelComponent title="تصاویر اسلاید" name="images" />

          <div className="flex flex-col gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
            <input
              id="files2"
              name="files2"
              type="file"
              accept=".png,.jpg"
              multiple
              onChange={fillSlideImages}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 m-2">
              {settingFormState.data.slideImages.map((item: any, index: number) => (

                <div key={item.name} className="flex flex-col justify-start items-start ">
                  <input type="text" onChange={fillSlideImageAlt} id={item.name} value={item.alt} className=" w-full  bg-white  text-gray-900 text-sm  block  p-2.5     outline-none" />
                  {/* <input type="radio" name="status" checked={item.status} value={item.name} onChange={fillSlideImageStatus} /> */}
                  <img key={item.name}
                    src={getDefaultImageAvator(
                      item.name
                    )}
                    className="w-full h-20"
                    alt="store logo"
                  />

                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-end">
      <LgSubmitbtnComponent title="ذخیره اطلاعات" onClickFunc={submit}>
      </LgSubmitbtnComponent>
    </div>
  </div>)
}
