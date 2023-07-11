const ham = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
let ham_off = true;
let mybirth = new Date(1999,2,2);
let now = new Date();
window.onload=()=>
{
    const age = Math.floor((now-mybirth)/(1000*60*60*24*365));
    document.getElementById("age").innerHTML=age;
}
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
const copyContent= async(text)=>
{
    try{
        await navigator.clipboard.writeText(text);
    }
    catch(err){console.log("error!");}
}
function copied(num)
{
    const cpspan = document.getElementsByClassName("copy");
    const arr = ["wonhong0302@naver.com","01071052805"];
    copyContent(arr[num]);
    cpspan[num].innerHTML="copied!";
    setTimeout(()=>{
        cpspan[num].innerHTML="click to copy!";
    },2000);
}



