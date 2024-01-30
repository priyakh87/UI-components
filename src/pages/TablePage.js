import SortableTable from "../components/SortableTable";
import Table from "../components/Table"

const config=[
    {
        label:'Name',
        render:(data)=>data.name,
        sortValue:(data)=>data.name
    },
    {
        label:'Color',
        render:(data)=><div className={`p-4 ${data.color}`}></div>
    },
    {
        label:'Price',
        render:(data)=>data.price,
        sortValue:(data)=>data.price
    },
    {
        label:'Quantity',
        render:(data)=>data.quantity,
        sortValue:(data)=>data.quantity
    },
    {
        label:'Total',
        render:(data)=>data.total,
        sortValue:(data)=>data.total
        // header:()=><th className="bg-red-500">Score</th>
    }
]
const data = [
    { name: "Apple",color:"bg-orange-600", price: 80, quantity : 3, total : 240 },
    { name: "Orange",color:"bg-slate-950", price: 50, quantity : 4, total : 200 },
    { name: "Banana",color:"bg-amber-600", price: 20, quantity : 8, total : 160 },
    { name: "Cherry",color:"bg-lime-600", price: 250, quantity : 10,total : 2500 }
];

const config1=[
    {label:'Name1',render:(data)=>data.name},
    {label:'age',render:(data)=>data.age},
    {label:'email',render:(data)=>data.email},
]

const data1 = [  
    { name: 'John', age: 30, email: 'john@example.com' },  
    { name: 'Jane', age: 25, email: 'jane@example.com' },  
    { name: 'Bob', age: 40, email: 'bob@example.com' }  
    ];  
const keyFn=(data)=>{
    return data.name
}
function TablePage(){
    return (
        <>
        <SortableTable data={data} config={config} keyFn={keyFn} />

        <hr/>
        <Table data={data1} config={config1} keyFn={keyFn} />
        </>
        
    )
}

export default TablePage