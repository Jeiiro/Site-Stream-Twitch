console.log("test")
const planning = document.getElementById("planning");
planning.addEventListener("click", () => { 
    document.getElementById("planning_image").classList.add("planning_show");
    document.body.classList.add("body_overflow");
})
document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("planning_image").classList.remove("planning_show");
    document.body.classList.remove("body_overflow");
})