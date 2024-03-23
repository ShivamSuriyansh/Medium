import { Blog } from "../hooks"
import AppBar from "./AppBar"
import { Avatar } from "./Avatar"

const FullBlog = ({ blog } : { blog : Blog }) => {
    return ( 
    <div>
        <AppBar />
        <div className=" flex justify-center">
            <div className=" grid grid-cols-12 w-full px-10 pt-12 max-w-screen-xl">
                <div className=" col-span-8 ">
                    <div className="title text-5xl font-extrabold">
                            {blog.title}
                    </div>
                    <div className="publishedDate text-sm text-slate-500 pt-2">
                        Posted On 2nd Feb 2024
                    </div>
                    <div className="content pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className=" col-span-4 ">
                    <div className="author font-bold text-slate-500">
                        Author
                    </div>
                    <div className=" flex gap-4">
                        <div className=" flex justify-center items-center" >
                            <Avatar authorName={blog.author.name || "Anonymous"} size={"big"} />
                        </div>
                        <div>
                            <div className="name text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className=" pt-2 text-slate-500">
                                A random catch phrase to catch user's attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default FullBlog