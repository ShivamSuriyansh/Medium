import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

const AppBar = () => {
  return (
    <div className=" flex justify-between px-10 py-3 border-b" >
        <div className="right text-2xl font-semibold flex items-center">
          <Link to={'/blogs'}> Medium </Link>
        </div>

        <div className="left flex">
            <Link to={'/publish'}>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
            </Link>
            <Avatar authorName={"Shivam Suriyansh"} size={'big'}/>
        </div>
    </div>
  )
}

export default AppBar