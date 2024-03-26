import AppBar from "../components/AppBar"
import Editor from "../editor/editor"

const Publish = () => {
  return (
    <div className="">
      <div>
        <AppBar />
        <div className=" flex flex-col p-4 ml-[15rem] mt-7">
          <span className=" font-bold text-3xl">Create Your Blog</span>
        </div>
        <div className="flex justify-center  mt-[2.5rem] relative max-w-screen-lg m-auto p-2 top-0">
            <Editor />
        </div>
      </div>
    </div>
  )
}

export default Publish