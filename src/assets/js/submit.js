function trigger(){
    alert("Hello");
}
const form = document.getElementById("signin");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    alert("Submitted");
})
