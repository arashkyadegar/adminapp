export default function LabelComponent({ name, title, required }: any) {

     return (
          <label htmlFor={name}
               className=" mb-2 text-xs text-gray-500  text-right ">
               {required && (<span className="text-red-600 text-lg">*</span>)}
               {title}</label>

     )
}