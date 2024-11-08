{
    interface Profile{
        name:string
        age:number
        email:string
    }
    interface updateProfile{
        name?:string
        age?:number
        email?:string
    }
    const updateProfile=(myProfile:Profile,update:updateProfile):Profile=>{
        return {...myProfile,...update}
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile,{name:"akij"}));
}