{
    
type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type ShapeArea = Circle | Rectangle;

const calculateShapeArea = (value: ShapeArea): number => {
    if (value.shape === "circle") {
       const aria=parseFloat((Math.PI * value.radius*value.radius).toFixed(2))
        return aria
    } else if (value.shape === "rectangle") {
        return(value.width * value.height);
    }
    return 0; 
};

const circle: Circle = {
    shape: "circle",
    radius: 5
};

const rectangle: Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 5
};
console.log(calculateShapeArea(circle));       
console.log(calculateShapeArea(rectangle)); 

}