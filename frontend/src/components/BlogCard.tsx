import { Avatar } from "./Avatar"

interface BlogCardProps {
    authorName : string
    publishedDate : string,
    title : string,
    content: string
}

export const BlogCard = ({authorName, publishedDate,title,content} : BlogCardProps) =>{
    return <div className=" border-b border-slate-200 p-4">
        <div className=" header flex justify-start gap-2">
            <Avatar authorName = {authorName} size={'small'}/>
            <div className="name flex justify-center flex-col text-sm">{authorName}</div>
            <div className=" flex justify-center items-center">
                <div className="flex justify-end flex-col bg-slate-800 h-[5px] w-[5px] rounded-full">  </div>
            </div>
            <div className="date text-slate-400 font-thin text-sm flex justify-center flex-col">{publishedDate}</div>
            <div className="member flex justify-center flex-col text-sm">Member Only</div>
        </div>
        <div className="content flex flex-col">
            <div className="title  font-bold">{title}</div>
            <div className="content text-md font-thin">{content.slice(0,100) + '...'}</div>
        </div>
        <div className="footer text-sm text-slate-400 pt-5">
            {`${Math.ceil(content.length)/100} minutes read`} 
        </div>
    </div>
}