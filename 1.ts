{
    const sumArray=(number:number[]):number=>{
       
       const value=number.reduce((acc:number,cur:number)=>acc+cur)
       return value
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
}