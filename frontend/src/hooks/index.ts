import axios from "axios";
import { useEffect, useState } from "react"
import { DATABASE_URL } from "../config";

export const useBlogs = ()=>{
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState([]);

    useEffect(()=>{
        axios.get(`${DATABASE_URL}/api/v1/blog/bulk`, {
            headers : {
                Authorization : localStorage.getItem('token')
            }
        }).then(response => {
            setBlogs(response.data);
            setLoading(false);
        })
    },[]);

    return { loading , blogs};
}