const botonNav = document.getElementById("menu-toggle");
const navegacionUl = document.querySelector("header .navegacion ul");

botonNav.addEventListener("click",()=>{
    navegacionUl.classList.toggle("hidden");
    console.log("clicked")
})
;
const obj = {
    name: "wilfredo",
    age: 18,
    profession: "programmer"
}



