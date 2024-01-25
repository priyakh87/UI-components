
const data=[
    { name:"tomato",cost:50,weight:2 },
    { name:"Onion",cost:150,weight:2.2 },
    { name:"brocali",cost:500,weight:1}
]

function getSort(data){
    return data.name
}

const sortOrder='asc';
data.sort((a,b)=>{
    const valA=getSort(a);
    const valB=getSort(b);
    const flipOrder=sortOrder==='asc' ? 1 : -1;
    if(typeof valA==='string'){
        return valA.localeCompare(valB) * flipOrder;
    }
    else{
        return valA - valB * flipOrder
    }
})


// function getSortByCost(data){
//     return data.cost
// }

// function getsortByWeight(data){
//     return data.weight
// }

// //combination of 2 and more number value (cost and weight)

// function getsortbyCostNweight(data){
//     return data.cost / data.weight
// }

// //sort by name property
// data.sort((a,b)=>{
//     const val1=getSortByName(a);
//     const val2=getSortByName(b);
//     return val1.localeCompare(val2)
// })


// //data sort by cost property
// data.sort((x,y)=>{
//     const a=getSortByCost(x);
//     const b=getSortByCost(y);
//     return a-b
// })

// //data sort by weight property
// data.sort((x,y)=>{
//     const a=getsortByWeight(x);
//     const b=getsortByWeight(y);
//     return a-b
// })

// //data sort by cost and weight property
// data.sort((x,y)=>{
//     const a=getsortbyCostNweight(x);
//     const b=getsortbyCostNweight(y);
//     return a-b
// })