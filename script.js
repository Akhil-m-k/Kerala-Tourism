/* scroll function for changing 
header background-color */
function bgChange(){
    let full_nav = document.getElementById('full-nav');
   let scrollValue = window.scrollY;
   if(scrollValue < 150){
    full_nav.classList.remove('bg-full-nav');
   }else{
    full_nav.classList.add('bg-full-nav');
   }
}
window.addEventListener("scroll", bgChange);

const toggleBtn = document.getElementById('navbar-toggler');
const elementToToggle = document.getElementById('full-nav');
toggleBtn.addEventListener('click', function(){
    elementToToggle.classList.toggle('active')
})