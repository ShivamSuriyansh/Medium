
import { BlogCard } from "../components/BlogCard"



export const Blogs = () =>{
    return <div className=" flex  justify-center">
        <div className=" p-2 max-w-xl">
            <BlogCard
            authorName = {"Shivam Suriyansh"}
            publishedDate = {"2024 MARCH 16"}
            title = {"How an ugly single page website makes 5000$ a month without affiliate marketing"}
            content = {"This is the content of the blog This is the content of the blog This is the content of the blog This is the content of the blog This is the content of the blog"}
            />
            <BlogCard
            authorName = {"Shivam Suriyansh"}
            publishedDate = {"2024 MARCH 16"}
            title = {"How an ugly single page website makes 5000$ a month without affiliate marketing"}
            content = {"This is the content of the blog This is the content of the blog This is the content of the blog This is the content of the blog This is the content of the blog"}
            />
            <BlogCard
            authorName = {"Shivam Suriyansh"}
            publishedDate = {"2024 MARCH 16"}
            title = {"How an ugly single page website makes 5000$ a month without affiliate marketing"}
            content = {"This is the content of the blog This is the content of the blog This is the content of the blog This is the content of the blog This is the content of the blog"}
            />
        </div> 
    </div>
}




    // const [dolove ,setDolove] = useState(true);
    // const love = dolove ? 'animate-heartbeat' : '';
    // const onclick = ()=> {
    //     setDolove(!dolove);
    // }
    // return <div>
    //     <main className="flex items-center justify-center h-screen bg-gray-100">
    //         <div className="flex justify-center items-center flex-col">
    //             <div className="animate-heartbeat9">I am Sorry</div>
    //             <div className="foryou">{ dolove ? "This is if you love me" : "and stopes if you wont"}</div>
    //             <div className={`text-red-500 ${love} text-9xl`}>❤️</div>
    //             <div className="animate-heartbeat8"> I LOVE YOU</div>
    //             <button onClick={onclick} type="button" className="py-2.5 px-5 w-fit me-2 mt-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-200 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
    //                 {dolove ? "Dont Love Me" :'love me'}
    //         </button>

    //         </div>
            
    //     </main>
    // </div>