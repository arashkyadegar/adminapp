export default function StatusComponent({ value }: any) {
     let result;
     switch (value) {
          case "1":
               result = <h1 className="font-bold  text-xs text-green-500 bg-green-100 px-2 py-1">فعال</h1>
               break;
          case "2":
               result = <h1 className="font-bold  text-xs text-red-500 bg-red-100  px-2 py-1">غیرفعال</h1>
               break;
          case "3":
               result = <h1 className="font-bold  text-xs text-yellow-500 bg-yellow-100  px-2 py-1">بایگانی شده</h1>
               break;
          default:
               result = <h1 className="font-bold  text-xs text-gray-500 bg-gray-100  px-2 py-1">نامشخص</h1>
               break;
     }
     return (
          result
     )
}