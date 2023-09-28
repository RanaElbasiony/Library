var allProducts = document.querySelectorAll(".product")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var totalPrice=0
var div2=document.querySelector("#div2")

allProducts.forEach(function(item){
    item.onclick = function (){
        div.innerHTML += item.textContent + "   +   "
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
        }
    }
})

btn.onclick = function(){
    div2.innerHTML = "Total Price: $" + totalPrice // Display the total price in div2
}