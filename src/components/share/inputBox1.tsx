export default function InputBox1Component({ name, value, onchangeFunc }: any) {

     return (
          <div className="flex w-full flex-row gap-2 justify-end items-center bg-gray-100   text-gray-900 text-sm rounded-lg  px-1">
               <input type="text"
                    name={name}
                    onChange={onchangeFunc}
                    value={value}
                    className="w-full bg-gray-100  text-gray-900 text-sm rounded-lg  p-2.5     outline-none" />
          </div>

     )
}