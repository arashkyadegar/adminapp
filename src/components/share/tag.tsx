export default function TagComponent({ title, onclickFunc }: any) {

     return (
          <div onClick={onclickFunc} className=" flex flex-row items-center justify-center border min-w-10  border-gray-500 rounded-lg px-2 py-1 text-xs">
               <a className="w-full overflow-hidden">{title}</a>
               <div className="w-fit flex justify-end border  hover:border-red-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                         <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
               </div>

          </div>
     )
}