const ham = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
let ham_off = true;
function hamclick()
{
    if(ham_off)
    {
        navbar.classList.add("active");
        ham.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        ham_off=false;
    }
    else
    {
        navbar.classList.remove("active");
        ham.innerHTML=`<i class="fa-solid fa-bars"></i>`;
        ham_off=true;
    }
}