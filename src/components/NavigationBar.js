
import Link from "./Link"

const navigationLink=[
    {label:'button',path:'/button'},
    {label:'accordion',path:'/accordion'},
    {label:'dropDown',path:'/dropdown'},
    {label:'modal',path:'/modal'},
    {label:'tabel',path:'/table'}
]

const renderNavLinks=navigationLink.map((link)=>{
    return <Link activeLink='font-bold border-l-4 border-blue-500 pl-2' className="mb-3" key={link.label} to={link.path} >{link.label}</Link>
})

function NavigationBar(){
    return<div className="flex flex-col p-2 text-center items-start">
    <strong className="m-3 ">
        Components</strong>
    {renderNavLinks}
    <hr/>
    </div>

}

export default NavigationBar