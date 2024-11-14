import { Link } from "react-router-dom";

export default function NotAllowedComponent() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="bg-red-600 text-white p-4">
        not allowed to see this
      </h1>
      <h1 className="text-blue-600">
        <Link to="/">Login</Link>
      </h1>
      <h1>
        or call manager
      </h1>
    </div>
  )
}