export default function LabelComponent({ name, title, required }: any) {

     return (
          <label htmlFor={name}
               className=" text-sm   text-gray-500  text-left ">
               {title}
               {required && (<span className="text-red-600 text-lg">*</span>)}
               </label>
     )
}