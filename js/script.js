console.log("connected");

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

function toggleMenu(){
    const toggleMenu =  document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navUl");
    navigation.classList.toggle("active")
    toggleMenu.classList.toggle("active")
}