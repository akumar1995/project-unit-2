
let arr=JSON.parse(localStorage.getItem("signup"))||[]

form=document.querySelector("form");
form.addEventListener("submit",function(e){
e.preventDefault();
 let obj={
     Pemail:form.email.value,
     
 }
 
    arr.push(obj)
 localStorage.setItem("login",JSON.stringify(arr))
 
 console.log(arr)
})