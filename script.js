

//Subtotal gets the price and enters in substotal
window.onload = function() {
    let price = document.getElementById("price"),
        sTotal = document.getElementById("sTotal");
    price.addEventListener('input', function() {
        sTotal.value = price.value;
    });
};


//calculates tax

function tax() {
    const taxBtn = document.getElementById("price");
    taxBtn.addEventListener('input', function() {
       Total = sTotal * 5;
        console.log(Total)
    });
};

// let add = 12+9
// let multiply = 8 * 5;
// let subtract = 10-4;
// let mod = 15%5
// let div = Math.round(19/7)


// console.log(add)
// console.log(multiply)
// console.log(subtract)
// console.log(mod)
// console.log(div)

//Adding Items
function btn() {
const myBtn = document.getElementById('myBtn');
window.alert('Item Added')
}