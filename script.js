

document.querySelector('.container').addEventListener("click",()=>{
    document.querySelectorAll(".triangle").forEach((t)=>t.classList.toggle("activated"));
    document.querySelector(".container").classList.toggle("activated");
});

