

let running = true;

const _C = document.querySelector('.container');


const togglePointThuster = (e) =>{
    if(running){
        e.preventDefault();
        document.querySelectorAll(".triangle").forEach((t)=>t.classList.toggle("activated"));
        _C.classList.toggle("activated");
        window.navigator.vibrate(300);
        running=false;
        setTimeout(()=>running=true,400);
    }
}


_C.addEventListener("click",e=>togglePointThuster(e));
_C.addEventListener("touchstart",e=>togglePointThuster(e));
_C.addEventListener('touchmove', e => {e.preventDefault()}, false)
