

const _C = document.querySelector('.container');


const togglePointThuster = (e) =>{
    e.preventDefault();
    document.querySelectorAll(".triangle").forEach((t)=>t.classList.toggle("activated"));
    _C.classList.toggle("activated");
}


_C.addEventListener("click",e=>togglePointThuster(e));
_C.addEventListener("touchstart",e=>togglePointThuster(e));
_C.addEventListener('touchmove', e => {e.preventDefault()}, false)
