const menu = document.querySelector(".menubtn")
const side = document.querySelector(".sidebarNav")
const cross = document.querySelector(".crossIcn")
menu.addEventListener("click",function () {
  side.style.display="block"
    
})
cross.addEventListener("click",function () {
    side.style.display="none"
      
  })
document.querySelector('.no-reload').addEventListener('click', function(event) {
    event.preventDefault();  });