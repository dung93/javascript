let languages =[
    'C#',
    'C+',
    'PHP',
    'Swift',
    'Java',
    'Go',
 ]

 Array.prototype.map2= function(callback)
{
let out=[];
let check;
let length=this.length;
for(let i=0;i<length;i++)
{
 check = callback(this[i],i);
 out.push(check);
}
return out
}

let languagesnew=languages.map2((value,index)=>{
    return value;
})
console.log(languagesnew)
