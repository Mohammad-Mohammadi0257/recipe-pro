

const Textarea = ({title,name,placeholder}) => {

    return (
            <div className="">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium
                text-gray-900  ">{title}</label>
                <textarea
                name={name}
                placeholder={placeholder}
                id="large-input" 
                className="block text-xl w-full p-3 placeholder:text-gray-400
                text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                    focus:ring-blue-500 focus:border-blue-500 "/>
            </div>
    );
}

export default Textarea;
