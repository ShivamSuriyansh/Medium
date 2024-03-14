import { Link } from "react-router-dom"
import { LabbledInput } from "./labelledInput"
import { useState } from "react"
import { SignUpInput } from "@100xshiv/medium-common"

export const Auth = ({type}:{type : "signup" | "signin"})=>{


    const [postInput ,setPostInput] = useState<SignUpInput>({
        name : '',
        email: '',
        password : ''
    })

    return (
        <div className="container flex justify-center items-center h-screen ">
            <div className=" flex flex-col px-4">
                <div className=" px-10 mb-8">
                    <div className=" text-3xl font-extrabold max-w-[18rem]">
                        {type==='signin' ? "Log In your Account" : "Create an Account"}
                    </div>
                    <div className=" text-slate-400">
                        {type==='signin' ? "Dont have an Account ?" : "Already have an Account ?"}
                        <Link to={type==='signin' ? '/signup' : '/signin'} className=" underline pl-2" > { type ==='signin' ? "Sign Up": "login"} </Link>
                    </div>
                </div>
                <LabbledInput label="Name" placeholder="Shivam Suriyansh" onChange={(e)=>setPostInput(prev=> ({...prev , name : e.target.value}))} />
                <LabbledInput label="Email" placeholder="surya@gmai.com" onChange={(e)=>setPostInput(prev=> ({...prev , email : e.target.value}))} />
                <LabbledInput label="Password" placeholder="12345" type={"password"} onChange={(e)=>setPostInput(prev=> ({...prev , password : e.target.value}))} />


                <button type="button" className="py-2.5 px-5 w-full me-2 mt-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    {type === 'signup' ? 'signup' : 'signin'}
                    </button>

            </div>
        </div>
    )
}