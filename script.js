//Subtotal gets the price and enters in substotal
window.onload = function () {
  let price = document.getElementById("price");
  // sTotal = document.getElementById("sTotal");
  // price.addEventListener('input', function() {
  // sTotal.value = price.value;
  // });
};

// calculates tax
// takes string 42, then passes it to test2 as an integer then multiplies it by 2 then prints to the console 84 ex. 42 * 2, the 10 in the test2 arguments is the base.

// let text = '42.25'
// let test2 = parseFloat(text, 10)*2;
// console.log(test2)

// function tax(){
//     const taxBtn = document.getElementById('taxBtn');
//     console.log(taxBtn)
//     return parseFloat(t) * 7.25 * Math.round();
// }

function tax(r) {
  return parseFloat(r) * 7.25;
}

console.log(tax(5));

//Adding Items
function btn() {
  const myBtn = document.getElementById("myBtn");
  window.alert("Item Added");
}
