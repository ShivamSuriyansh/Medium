export const Avatar = ({authorName} : {authorName: string}) => {
    return (<div>
        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-sm text-gray-600 dark:text-gray-300">{authorName[0]}</span>
        </div>
    </div>)
}