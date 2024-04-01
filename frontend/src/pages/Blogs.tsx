
import AppBar from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks"




export const Blogs = () =>{

    function getText(html :string){
        var divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent || divContainer.innerText || "";
    }

    const {loading , blogs}  = useBlogs();

    if(loading) {
        return <div >
            <BlogsSkeleton/>
        </div>
    }
    console.log('blogs: ',blogs)
    return <div>
        <AppBar handlePublish={()=>{}}/>
        <div className=" flex justify-center">
            <div className="">
                {blogs.map(blog=> <BlogCard
                id={blog.id}
                authorName={blog.author.name || 'Anyonymous'}
                title = {blog.title}
                content= {getText(blog.content)}
                publishedDate="2nd feb 2024"
                 /> )}
            </div> 
        </div>
    </div>
}
