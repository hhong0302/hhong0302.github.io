const ham = document.getElementById("hamburger");
let ham_off = true;
function hamclick()
{
    if(ham_off)
    {
        ham.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        ham_off=false;
    }
    else
    {
        ham.innerHTML=`<i class="fa-solid fa-bars"></i>`;
        ham_off=true;
    }
}