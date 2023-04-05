function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");
  let input = window.document.getElementById("entryinput");
  
  alertMetBtn.addEventListener("click",()=>{
    window.alert("ALERT BUTTON WAS CLICKED!!!");
  });
}







window.addEventListener('load', init);
