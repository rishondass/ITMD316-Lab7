function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");
  let input = window.document.getElementById("entryinput").value;

  alertMetBtn.addEventListener("click",()=>{
    window.alert(`Rishon Dass: ${input}`);
  });
}







window.addEventListener('load', init);
