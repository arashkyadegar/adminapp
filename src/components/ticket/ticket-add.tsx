import { useForm } from "react-hook-form";
import BoxTitleLgComponent from "../share/lg-box-title";
import LabelComponent from "../share/label";
import ErrComponent from "../share/err";

export default function TicketAddComponent() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (<>
    <div className="w-full sm:w-10/12 mr-0 sm:mr-16">


      <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">
        <div className="w-full flex flex-col p-4 bg-[#f8f9fa]">

          <BoxTitleLgComponent title="برند جدید" />
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex flex-col w-full bg-white  border border-gray-200">
              <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <LabelComponent name="name" title="عنوان برند" required="true" />
                    <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                      <input
                        className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none"
                        defaultValue="test" {...register("firstName", { required: true, maxLength: 20 })} />
                    </div>
                    <ErrComponent text={errors.firstName && "firstName is required"} />

                  </div>


                  <div className="mb-4">
                    <LabelComponent name="name" title="عنوان برند" required="true" />
                    <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
                      <input
                        className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none"
                        defaultValue="test" {...register("lastName", { required: true, maxLength: 20 })} />
                    </div>
                  </div>
                  <input type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div >
  </>)
}