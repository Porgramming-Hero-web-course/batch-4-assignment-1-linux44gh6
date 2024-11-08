{
    type guards is the features of typeScript that allow type narrow of a variable withing condition statement.when we need to check the type of any arguments then we can use this type guards.It will provide you specific type.lets see the example of type guards:-

    const useTypeGuards=(value:string|number)=>{
        if(value==='number'){
            console.log("Argument type is number");
        }
        else if(value==="string"){
            console.log("Argument type is string");
        }
    }

    let's see another example of type guards using unknown:

    const useTypeGuards2=(value:unknown)=>{
        if(value==='number'){
            console.log("Argument type is number");
        }
        else if(value==="string"){
            console.log("Argument type is string");
        }
    }

    here we can see the type is boolean function and it's return boolean value.we can also use typeOf for checking the arguments type.let's see the use of typeOf key word

    const useTypeOf=(value:unknown)=>{
        if(typeof value==='string'){
            console.log("this is string");
        }
        else if(typeof value==="number"){
            console.log("this is number");
        }
        else if(typeof value==="boolean"){
            console.log("boolean value");
        }
    }

     since we can see we can use type guards in many ways.Also we can see that how the type guards give us the specification of type.By using this type guards we got type error safety.
    
}