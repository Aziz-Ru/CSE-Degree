# Modern Javascript syntax

## fat arrow function
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
 
 ```
 let number=()=>  10;
console.log(number())
 ```
if use return then must use {} bracket

 ```
 let number=()=>  {
  return 10;
}
console.log(number())
 ```

 To Solve this problem:
 In ForEach funtion the callback function this is not parent this so that is error.To solve this problem Arow function Comes.

 
 ```
 const js={
    name:'Language',
    Library:['react','svelte','vue'],
    printLibrary:function(){
    //const self=this;
        this.Library.forEach(function(a){
            console.log(`${this.name} built ${a}`);
        });
    }
}
js.printLibrary()
 ```
 ```
 const js={
    name:'Language',
    Library:['react','svelte','vue'],
    printLibrary:function(){
        this.Library.forEach((a)=>{
            console.log(`${this.name} built ${a}`);
        });
    }
}
js.printLibrary()
 ```

## Ternary Operator
```
const ok=true;
const date=ok?"Aziz":"Kaboo";
```
## Array.find
iterate all function if it get true then  return true .Returns the value of the first element in an array that pass a test
```
const ar=[1,2,3,4,5];

const b=ar.find((current,index,arr)=>{
   // console.log(current,index,arr)
    // current=currentValue ,index=currentIndex, arr=ar
    if(current==4){
        return true;
    }
});
console.log(b);
```
## Array.map
Creates a new array with the result of calling a function for each array element
```
const ar=[1,2,3,4,5];

const b=ar.map((current,index,arr)=>{
    //console.log(current,index,arr)
    // current=currentValue ,index=currentIndex, arr=ar
    return current*2
// nothing change in ar 
});
console.log(b);
```
## Array.reduce
Reduce the values of an array to a single value (going left-to-right)
```
const ar=[1,2,3,4,5];

const b=ar.reduce((previous,current,currentIndex,arr)=>{
    return current+previous
},previosInitialValue);
console.log(b);
```
## Object tricks
```
const obj={
    name:"Aziz",
    status:'single',
    home:'bd'
}
const keys=Object.keys(obj); //get all key of object
const values=Object.values(obj); //get all values
console.log(keys);
console.log(values);

```
## spread operator

```
const num1=[1,2,3];
const num2=[...num1,4,5,6];
```
