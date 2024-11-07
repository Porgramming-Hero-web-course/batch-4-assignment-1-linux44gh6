{
    const removeDuplicates=(number:number[]):number[]=>{
        let disArray:number[]=[]
        for(let i=0;i<number.length;i++){
            if(number[i]!=number[i+1]){
                disArray.push(number[i])
            }
        }
        return disArray
    }
   const value= removeDuplicates([1, 2, 2, 3, 4, 4, 5])
   console.log(value);
   
}