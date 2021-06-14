let color = ["red","white","blue","yellow","purple"]

let fruit = ["mango","apple","banana","durian"]

let points = [20,100,-100,5,-25,10];

let count = color.length;//check number of array member
// console.log("before sort:",color);
// let result = color.sort();//sort array member
// console.log(count);
// console.log("After Sort:",result);

// console.log(fruit.sort());
// console.log(fruit.reverse());//sort by reverse

console.log(fruit[0]);//first member of array
console.log(fruit[fruit.length-1]);//last member of array

console.log("Before push:",color);
color.push("grey");
console.log("After push:",color);


//sort number 

points.sort(function(a,b) {
    return a-b;
})

console.log(points);//less to more

points.sort(function(a,b) {
    return b-a;
})
console.log(points);//more to less