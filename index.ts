import products from './products';

const productName:string = "fanny pack";

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '575 Broadway, New York City, New York';

const product = products.filter(product => product.name === productName)[0];
console.log(product);

if(product.preOrder === true){
   console.log("We will send you message as soon as your product gets on its way.");
}

if (Number(product.price) >=25){
 shipping = 0;
  console.log("We provide free shipping for this product ")
} else{
   shipping = 5;
  console.log("Your shipping fee for this product is" + " " + "5 dollars please");
}


if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}else{
  taxPercent = 0.05
}


taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);