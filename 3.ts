{
    const countWordOccurrences=(str1:string,str2:string):number=>{
        let count:number=0
        const splitValue:string[]=str1.split(' ')
        for(let i=0;i<splitValue.length;i++){
            if (splitValue[i]===str2) {
                count++
            }
        }
        return count
    }
    const value=countWordOccurrences("I love typescript", "typescript")
    console.log(value);
}