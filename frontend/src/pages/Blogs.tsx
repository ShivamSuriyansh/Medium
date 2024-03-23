
import AppBar from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks"



export const Blogs = () =>{

    const {loading , blogs}  = useBlogs();

    if(loading) {
        return <div >
            <BlogsSkeleton/>
        </div>
    }
    console.log('blogs: ',blogs)
    return <div>
        <AppBar />
        <div className=" flex justify-center">
            <div className="">
                {blogs.map(blog=> <BlogCard
                id={blog.id}
                authorName={blog.author.name || 'Anyonymous'}
                title = {blog.title}
                content= {blog.content}
                publishedDate="2nd feb 2024"
                 /> )}
            </div> 
        </div>
    </div>
}
