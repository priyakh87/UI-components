import { useState } from "react"
import { GoChevronDown,GoChevronLeft } from "react-icons/go";

function Accordion({items}){
    const [expandedIndex,setExpandedIndex]=useState(-1);

    const handleClickHeader=(nextIndex)=>{
        if(expandedIndex===nextIndex){
            setExpandedIndex(-1);
        }else{
            setExpandedIndex(nextIndex)
        }
        
    }

    const renderAccordionItems=
        items.map((item,index)=>{
            const isExpanded=index===expandedIndex;
            const icon=<span className="text-2xl">{isExpanded?<GoChevronDown/> : <GoChevronLeft/>}</span>
            return(
            <div key={item.id} className="border ">
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClickHeader(index)}>
                {item.label} {icon}
                </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}    
            </div>)
        })
    
    
    return <div className="w-full border-x border-t rounded">{renderAccordionItems}</div>
}

export default Accordion