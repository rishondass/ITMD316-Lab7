function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");
  
  alertMetBtn.addEventListener("click",()=>{
    let input = window.document.getElementById("entryinput").value;
    window.document.getElementById("textoutput").value = "test";
    window.alert(`Rishon Dass: ${input}`);
  });

  
  
}







window.addEventListener('load', init);
