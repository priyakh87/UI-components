import Accordion from "../components/Accordion"
import AccordionItems from "../dummyData/Accordion";

function AccordionsPage(){
    
    
    return (<div className="flex " >
         <Accordion items={AccordionItems.call()} />
    </div>)
}
    
export default AccordionsPage