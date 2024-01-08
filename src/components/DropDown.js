import { useState } from "react"

function DropDown({options,selection,onSelect}){
    const [isOpen,setIsOpen]=useState(false);
    
    let labelTxt=selection?.label|| 'Select...';

    const handleOptionClick=(option)=>{
        //close dropdown
        setIsOpen(false);
        //what option the user has selected/clicked
        onSelect(option);
    }
    const DropDownList=options.map((option)=>{
        return <div key={option.value} 
        className="border-b cursor-pointer justify-start" 
        onClick={()=>handleOptionClick(option)}>{option.label}</div>
    })
    const handleClick=()=>{
        setIsOpen(!isOpen);
    }
    return(
    <div className="w-full border-x border-t rounded ">
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
        onClick={handleClick}>
            {labelTxt}</div>
        {isOpen && <div>{DropDownList}</div>}
    </div>)
}

export default DropDown