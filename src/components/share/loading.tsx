export default function Loading({ props }: any) {
     return (
          <div className="z-30 flex flex-col mx-auto my-auto w-28 h-28 items-center justify-center rounded-lg  bg-black-rgba fixed inset-0">
               <span className="left-0.5 z-40">
                    <img src="/loading.gif" />
               </span>
          </div>
     );
}
