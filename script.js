document.addEventListener("contextmenu", function (event) {
    alert("Follow Pandriya Da Body Soda");
    event.preventDefault();
})

var overlayout = document.querySelector(".over-layout")
var popupbox = document.querySelector(".popup-box")
var abi = document.getElementById("abi")

abi.addEventListener("click", function () {
    popupbox.style.display = "block"
    overlayout.style.display = "block"
})


var cancel = document.getElementById("cancel")

cancel.addEventListener("click", function (event) {
    event.preventDefault()
 popupbox.style.display = "none"
    overlayout.style.display = "none"

})