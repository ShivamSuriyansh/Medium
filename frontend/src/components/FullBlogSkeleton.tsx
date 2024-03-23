import AppBar from "./AppBar"

const FullBlogSkeleton = () => {
  return (
    <div>
    <AppBar />
    <div className=" flex justify-center">
        <div className=" grid grid-cols-12 w-full px-10 pt-12 max-w-screen-xl animate-pulse">
            <div className=" col-span-8 ">
                <div className="w-[40rem] h-[2rem] bg-gray-200 rounded-full">  
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-4">
                    
                </div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
                <div className="w-[40rem] h-[0.5rem] mt-6 bg-gray-200 rounded-full"></div>
            </div>
            <div className=" col-span-4 ">
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                </div>
                <div className=" flex gap-4">
                    <div className=" flex justify-center items-center" >
                        <div className="h-10 bg-gray-300 rounded-full  w-10 mb-2.5 mt-4" ></div>
                    </div>
                    <div>
                        <div className="h-2.5 bg-gray-300 rounded-full w-[20rem] mt-4">
                            
                        </div>
                        <div className=" pt-2 text-slate-500">
                            <div className="h-2.5 bg-gray-300 rounded-full w-12 mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FullBlogSkeleton

{/* <div role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
<div> */}