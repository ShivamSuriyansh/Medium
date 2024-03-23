import axios from "axios";
import { useEffect, useState } from "react"
import { DATABASE_URL } from "../config";

export interface Blog {
    id:string,
    content : string,
    author : {
        name: string
    }
    title: string,

}


export const useBlog=({id} : {id : string}) => {
    const [loading , setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | ''>();

    useEffect(()=>{
        axios.get(`${DATABASE_URL}/api/v1/blog/${id}`, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(response => {
            setBlog(response.data.blog || 'Anonymous');
            setLoading(false);
            // console.log(blog);
        })
    },[id]);

    return { loading , blog};
}


export const useBlogs = ()=>{
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${DATABASE_URL}/api/v1/blog/bulk`, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(response => {
            setBlogs(response.data.blog);
            setLoading(false);
            console.log(blogs);
        })
    },[]);

    return { loading , blogs};
}