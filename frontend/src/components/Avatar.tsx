export const Avatar = ({authorName , size='small'} : {authorName: string ,size : 'small' | 'big'}) => {
    return (<div>
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === 'small' ? 'h-6 w-6' : 'h-10 w-10' }`}>
            <span className={`text-gray-600 dark:text-gray-300 ${size==='small' ? 'text-sm' : 'text-md'} `} >{authorName[0]}</span>
        </div>
    </div>)
}