let languages =[
'C#',
'C+',
'PHP',
'Swift',
'Java',
'Go',
'SQL',  
]

let check = languages.reduce2((accumantor,value,index)=>
{
    return accumantor+`<h2>${value}<h2>`
},[])
console.log(check)



Array.prototype.reduce2= function (callback , init)
{
    let length= this.length;
    for(let i=0;i<length;i++)
    {
        callback(init,this[i],i)
        let check = init+this[i];
    }
    return check;
}



