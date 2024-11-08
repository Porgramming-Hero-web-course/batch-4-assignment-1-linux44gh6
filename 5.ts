{
    
const getProperty = <T, K extends keyof T>(value: T, property: K): T[K]|undefined => {
    if (property in value) {
        return value[property];
    }
    return undefined

};

const person = { name: "Alice", age: 30 }
console.log(getProperty(person, "name"))

}