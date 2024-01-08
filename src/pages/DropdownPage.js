import { useState } from "react";
import DropDown from "../components/DropDown"
import DropDownItems from "../dummyData/DropDown";

function DropDownPage(){
    const [selection,setSelection]=useState(null);
    const handleSelect=(option)=>{setSelection(option);}
    return (<div className="flex " >
         <DropDown options={DropDownItems.call()} selection={selection} onSelect={handleSelect} />
    </div>)
}
    
export default DropDownPage