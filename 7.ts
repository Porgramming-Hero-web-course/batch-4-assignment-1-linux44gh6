{ 
    class Car{
        constructor(public name:string,public model:string,public year:Number){
            this.name=name
            this.model=model
            this.year=year
        }
        getCarAge(){
            const d=new Date()
            return d.getFullYear()
        }
    }
    const car=new Car("honda","civic",445)
    console.log(car.getCarAge());
}