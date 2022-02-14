

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
    let sTotal = document.getElementById("sTotal");
    // sTotal.addEventListener('input', function(){
        sTotal * 3;
        };
        console.log(sTotal)
    

    // let sTotal = document.getElementById('sTotal').value;
    // let price = document.getElementById('price').value;
    // document.getElementById('taxBtn').value = parseInt(sTotal)*parseInt(price)

//Adding Item
function btn() {
const myBtn = document.getElementById('myBtn');
window.alert('Item Added')
}
