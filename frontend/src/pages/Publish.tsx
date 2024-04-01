import { useEffect, useState } from "react";
import AppBar from "../components/AppBar"
import Editor from "../editor/editor"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Publish = () => {
  const [content,setContent] = useState<any>('');
  const [title,settitle] = useState<any>('');
  const navigate = useNavigate();

  const handlePublish =  async (editor: any) =>{
    const data = editor.getHTML();
    const newData=data;
    console.log(newData);
    const blog = await axios.post('https://backend.suriyansh-overhaul.workers.dev/api/v1/blog',{
      title: title,
      content : newData,
    },{
      headers : {
        Authorization : localStorage.getItem('token')
      }
    });
    console.log(blog);
    navigate(`/blog/${blog.data.id}`);
  }


  return (
    <div className="">
      <div>
        <AppBar handlePublish={handlePublish} />
        <div className=" flex flex-col p-4 ml-[4.5rem] mt-7">
          <span className=" font-extrabold text-3xl ">Create Your Blog</span>
        </div>
        <div className=" title h-[1rem] flex justify-center mt-[2.5rem] mx-[4.5em] p-2 w-[81rem]   ">
            <input type="text" placeholder="title..." value={title} onChange={(e)=>settitle(e.target.value)} className=" bg-slate-50 text-slate-900 h-[1rem] w-full border border-slate-200 outline-none rounded-lg px-4 py-8 text-3xl font-extrabold placeholder:text-lg placeholder:font-normal" required />
        </div>
        <div className="flex justify-center  mt-[2.5rem] relative max-w-screen-lg m-auto p-2 top-0 h-[20rem]">
            <Editor setContent={setContent} content={content} handlePublish={handlePublish}/>
        </div>
      </div>
    </div>
  )
}

export default Publish