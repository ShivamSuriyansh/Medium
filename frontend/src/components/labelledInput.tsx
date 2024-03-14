import { ChangeEvent } from "react"

interface LabbledInputTypes{
    label : string,
    placeholder ?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void,
    type?: string
}


export const LabbledInput = ({label , placeholder , onChange ,type} : LabbledInputTypes)=>{
    return <div>
    
        <label className="block mt-3 text-sm font-bold text-gray-500">{label}</label>
        <input onChange={onChange} type={type || 'text'} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
    </div>
}