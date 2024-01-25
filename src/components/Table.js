import { Fragment } from "react";

function Table({data,config,keyFn}){  
    

    const renderedHeaders=config.map((col)=>{
        if(col.header){
            return <Fragment key={col.label}>{col.header()}</Fragment> ;
        }

        return(
            <th key={keyFn(col.label)} className="p-2">{col.label}</th>
        )
    })


    const renderedData=data.map((item)=>{
        const renderRows=config.map((col)=>{
            return(
                    <td className="p-2" key={col.label} >{col.render(item)}</td>            
            )
        })
        return(<tr  className="border-b-2">
                {renderRows}
        </tr>)  
    })
    
    
    return (
    
        <table className="table-auto border-spacing-2 mt-4">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
<tbody>
    {renderedData}
</tbody>
        </table>

    )
}

export default Table