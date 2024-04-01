import { Link, useNavigate } from "react-router-dom"
import { LabbledInput } from "./labelledInput"
import { useState } from "react"
import { SignUpInput } from "@100xshiv/medium-common"
import { DATABASE_URL } from "../config"
import axios from "axios"

export const Auth = ({type}:{type : "signup" | "signin"})=>{

    const navigate = useNavigate();

    const [postInput ,setPostInput] = useState<SignUpInput>({
        name : '',
        email: '',
        password : ''
    })

    const sendRequest = async()=>{
        try {
            const response = await axios.post(`${DATABASE_URL}/api/v1/user/${type}`, postInput)// fix the signin and signup input validation (do not send name)
            const jwt  = response.data.jwt;
            localStorage.setItem('token',jwt)    
            navigate('/blogs')
        } catch (error) {
            console.error(error);
            alert('Check error');
        }
        
    }

    return (
        <div className="container flex justify-center items-center h-screen ">
            <div className=" flex flex-col px-4">
                <div className=" px-10 mb-8">
                    <div className=" text-3xl font-extrabold max-w-[18rem]">
                        {type==='signin' ? "Log in your Account" : "Create an Account"}
                    </div>
                    <div className=" text-slate-400">
                        {type==='signin' ? "Dont have an Account ?" : "Already have an Account ?"}
                        <Link to={type==='signin' ? '/' : '/signin'} className=" underline pl-2" > { type ==='signin' ? "Sign Up": "login"} </Link>
                    </div>
                </div>
                {type === 'signup' ? <LabbledInput label="Name" placeholder="Shivam Suriyansh" onChange={(e)=>setPostInput(prev=> ({...prev , name : e.target.value}))} /> : null}
                <LabbledInput label="Email" placeholder="surya@gmai.com" onChange={(e)=>setPostInput(prev=> ({...prev , email : e.target.value}))} />
                <LabbledInput label="Password" placeholder="12345" type={"password"} onChange={(e)=>setPostInput(prev=> ({...prev , password : e.target.value}))} />


                <button onClick={sendRequest} type="button" className="py-2.5 px-5 w-full me-2 mt-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    {type === 'signup' ? 'signup' : 'signin'}
                    </button>

            </div>
        </div>
    )
}