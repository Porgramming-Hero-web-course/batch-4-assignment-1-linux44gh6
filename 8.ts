{
    const validateKeys = <T, K extends keyof T>(obj: T, key: K[]): boolean => {
        for (let i = 0; i < key.length; i++) {
            if (!(key[i] in obj)) {
                return false
            }
        }
        return true
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}