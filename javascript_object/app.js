let product ={
    name : "mouse",
    price: 1500,
    color:"Black",
    catergory:"computer",
    //method show data
    displayProduct:function() {
        return "Name: "+this.name+" price: "+this.price;
    },
    discount:function() {
        return this.price-1000
    }
};//javascript object

console.log(product.displayProduct());
document.write(product.displayProduct());
document.write("price pay :",product.discount());

// console.log("Name Product:",product.name);
// console.log("Price Product:",product.price);
// console.log("Name Product:",product.catergory);

// let item = ["mouse",1500,"black"];//array 
// console.log("name(array):",item[0]);


