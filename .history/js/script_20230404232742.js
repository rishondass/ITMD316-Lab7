function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");

  alertMetBtn.addEventListener("click",()=>{
    window.alert(`Rishon Dass: ${window.document.getElementById("entryinput").value}`);
  });

  let output = window.document.getElementById("textoutput")
}







window.addEventListener('load', init);
