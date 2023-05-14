
let date = document.querySelector(".date")

window.onload = (function(){
  getDate()
});

function getDate (){
    const d = new Date()
    let year = d.getFullYear();
    date.innerHTML = year
}