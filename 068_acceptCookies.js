
const accepted= document.querySelector(".accept");
const rejected= document.querySelector(".reject");
const modal= document.querySelector(".modal-bg");

if(localStorage.getItem("cookies") !== "accepted"){
  //Con este if se pregunta si se autorizan las cookies y no se dejará de mostrar hasta
  //Que se acepten
  document.body.style.overflow = 'hidden'; //Bloqueo temporalmente el scroll
  modal.style.animation= "show 0.5s linear"
  rejected.addEventListener("click", ()=>{
    modal.setAttribute("hidden", "true");
    document.body.style.overflow = "auto"; 
  }) 

  accepted.addEventListener("click", ()=>{
    //Una vez se acepta, se guarda la aceptación en localStorage para que no aparezca más
    //la modal
    document.body.style.overflow = "auto";    
    modal.setAttribute("hidden", "true");
    localStorage.setItem("cookies","accepted")
  })
}
else modal.setAttribute("hidden", "true")
