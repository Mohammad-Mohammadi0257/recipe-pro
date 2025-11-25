

const Select = ({border,text,options}) => {
    return (
        <div>
            <select defaultValue="Pick a language placeholder:text-gray-400"
             className={`select ${border} bg-white text-gray-600`}>
                <option>{text}</option>
                {options.map((o,index)=>(
                    <option key={index}>{o}</option>
                ))}
             
            </select>
        </div>
    );
}

export default Select;
