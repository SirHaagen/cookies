
if(localStorage.getItem("cookies")== "accepted"){
  //Si se está permitiendo guardar cookies se pueden ejecutar todas las funcionalidades
  
  function sumarDias(dias){
    let fecha= new Date();
    if(dias== 0) fecha= "Session";
    else fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
  //Esta función entrega la fecha actual (si no se especifica parámetro de entrada) o
  //un día pósterior, dependiendo de los días que sume
  
  function crearCookie(key,value, expiration=0){
    document.cookie= `${key}=${value}; expires=${sumarDias(expiration)}`
  }
  
  function getCookie(consulta){
    let cookies= document.cookie;
    let array= cookies.split(";");
    for(let i in array){
      array[i]= array[i].trim().split("=");
      if(array[i][0]== consulta) return array[i][1];
    } 
    return "No hay valores para la consulta realizada";
  }
  
  crearCookie("Nombre","Vato",1);
  crearCookie("Apellido", "Serduro", 1);
  crearCookie("Idioma", "ES");
  
  console.log(getCookie("Apellido"));
}