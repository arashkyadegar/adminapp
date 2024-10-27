import { useEffect } from "react";
import { brandFormCleared, brandFormFilled } from "../../redux/store/brand/brand-form";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { getBrandsAction, submitAddBrandAction } from "../../redux/store/brand/brand-action";
import validator from "validator";
import { rgx_insecure } from "../../utility/regex";
import { FileService } from "../../services/fileService";
import ResponseStatus from "../../utility/responseStatus";
import { ToastAuthFail, ToastFail, ToastSuccess } from "../../utility/tostify";
import Loading from "../share/loading";
import BoxTitleLgComponent from "../share/lg-box-title";
import LgSubmitbtnComponent from "../share/btn/lg-submit-btn";
import LabelComponent from "../share/label";
import ErrComponent from "../share/err";
import { getDefaultImageAvator } from "../../utility/imageUtility";


export default function BrandAddComponent() {
  const formdata2 = new FormData();

  const dispatch = useAppDispatch();
  const brandFormState = useAppSelector((state) => state.entities.brandForm);

  useEffect(() => {
    dispatch(brandFormCleared());
    dispatch(getBrandsAction());
  }, []);

  function fillBrandName(event: any) {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        brandFormFilled({
          ...brandFormState.data,
          nameErr: "لطفا نام برند را وارد کنید",
          formIsValid: false,
          name: text,
        })
      );
    } else if (validator.matches(text, rgx_insecure)) {
      dispatch(
        brandFormFilled({
          ...brandFormState.data,
          nameErr: "لطفا کارکترهای غیرمجاز وارد نکنید",
          formIsValid: false,
          name: text,
        })
      );
    } else {
      dispatch(
        brandFormFilled({
          ...brandFormState.data,
          nameErr: "",
          name: text,
          formIsValid: true,
        })
      );
    }
  }


  async function fillBrandImage(event: any) {
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
            brandFormFilled({
              ...brandFormState.data,
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
      ToastFail("تنها میتوانید 1  تصویر انتخاب کنید")
    }
  }
  function submit(event: any) {
    //alert(editorRef.current?.getContents(true))
    if (brandFormState.data.formIsValid) {
      const entity = {
        _id: "",
        name: brandFormState.data.name,
        image: brandFormState.data.image,
        createdAt: "",
      };
      try {
        dispatch(submitAddBrandAction(entity));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلدهای الزامی را با دقت وارد کنید");
    }
  }



  return (
    <div className="w-full sm:w-10/12 mr-0 sm:mr-16">
      {brandFormState.isLoading && (
        <Loading />
      )}

      <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">

        <BoxTitleLgComponent title="برند جدید" />
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-col w-full bg-white  border border-gray-200">
            <div className="p-4">
              <div className="mb-4">
                <LabelComponent name="name" title="عنوان برند" required="true" />
                <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input type="text"
                    name="name"
                    id="name"
                    value={brandFormState.data.name}
                    onChange={fillBrandName}
                    className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
                </div>
                <ErrComponent text={brandFormState.data.nameErr} />
              </div>

              <div className="mb-4">
                <LabelComponent title="تصویر برند" name="images" />
                <div className="flex flex-col gap-2 justify-start items-start bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                  <input
                    id="files2"
                    name="files2"
                    type="file"
                    accept=".png,.jpg,.svg"
                    multiple
                    onChange={fillBrandImage}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 m-2">
                    <div className="flex flex-col justify-start items-start">
                      <img key={brandFormState.data.image}
                        src={getDefaultImageAvator(
                          brandFormState.data.image
                        )}
                        className="w-full h-20"
                        crossOrigin="anonymous"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col justify-start items-end">
        <LgSubmitbtnComponent title="ثبت  برند" onClickFunc={submit}>
        </LgSubmitbtnComponent>
      </div>

    </div >



  )
}