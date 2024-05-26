# Modern Javascript syntax

## fat arrow function
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
- Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
 
 ``
 let number=()=>  10;
console.log(number())
 ``
if use return then must use {} bracket

 ``
 let number=()=>  {
  return 10;
}
console.log(number())
 ``

 To Solve this problem:
 In ForEach funtion the callback function this is not parent this so that is error.To solve this problem Arror Function Comes.

 
 ``
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
 ``
 ``
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
 ``
