import { Avatar } from "./Avatar";

const AppBar = () => {
  return (
    <div className=" flex justify-between px-10 py-3 border-b" >
        <div className="right text-2xl font-semibold flex items-center">Medium</div>
        <div className="left">
            <Avatar authorName={"Shivam Suriyansh"} size={'big'}/>
        </div>
    </div>
  )
}

export default AppBar