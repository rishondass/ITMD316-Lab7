function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");
  let output = window.document.getElementById("textoutput");
  alertMetBtn.addEventListener("click",()=>{
    let input = window.document.getElementById("entryinput").value;
    output.innerHTML = `Rishon Dass: ${input}`;
    window.alert(`Rishon Dass: ${input}`);
  });

  
  
}







window.addEventListener('load', init);
