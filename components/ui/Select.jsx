import React from 'react';

const Select = ({border,text,options}) => {
    return (
        <div>
            <select defaultValue="Pick a language"
             className={`select ${border} bg-white text-gray-800`}>
                <option>{text}</option>
                {options.map((o,index)=>(
                    <option key={index}>{o}</option>
                ))}
             
            </select>
        </div>
    );
}

export default Select;
