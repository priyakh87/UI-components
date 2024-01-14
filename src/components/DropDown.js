import { useEffect, useRef, useState } from "react"
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

function DropDown({options,selection,onSelect}){
    const [isOpen,setIsOpen]=useState(false);
    let labelTxt=selection?.label|| 'Select...';
    const useRefDropdw=useRef(null)
    // const cleanup=(handle)=>{
    //     document.removeEventListener('click',handle);
    //     console.log("cleanup")
    // }
    useEffect(()=>{
        const handle=(event)=>{
            //first check the useRef is not null it contains some element reference if not return 
            if(!useRefDropdw.current){
                return;
            }
            //if it contains reference and user clicks outside dropdown then it will close the dropdown if its open
            if(!useRefDropdw.current.contains(event.target)){
                setIsOpen(false)
            };
        }
        document.addEventListener('click',handle,true)
        return ()=>{
            document.removeEventListener('click',handle,true)
        }
    },[])
    const handleOptionClick=(option)=>{
        //close dropdown
        setIsOpen(false);
        //what option the user has selected/clicked
        onSelect(option);
    }
    
    const DropDownList=options.map((option)=>{
        return <div key={option.value} 
        className="hover:bg-slate-100 p-2 cursor-pointer" 
        onClick={()=>handleOptionClick(option)}>{option.label}</div>
    })
    const handleClick=()=>{
        setIsOpen(!isOpen);
    }
    return(
    <div className="w-48 relative" ref={useRefDropdw}>
        <Panel onClick={handleClick} className='flex justify-between items-center' >
            {labelTxt} <GoChevronDown className="text-lg" />
            </Panel>

        {isOpen && <Panel className="absolute top-full ">
            {DropDownList}</Panel>}
    
    </div>)
}

export default DropDown