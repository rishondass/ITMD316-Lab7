function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");
  let output = window.document.getElementById("textoutput");
  alertMetBtn.addEventListener("click",()=>{
    window.alert(`Rishon Dass: ${window.document.getElementById("entryinput").value}`);
  });

  
  
}







window.addEventListener('load', init);
