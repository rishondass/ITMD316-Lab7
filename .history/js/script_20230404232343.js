function init(){
//add your javascrip between these two lines of code
  let alertMetBtn = window.document.getElementById("entrybutton");
  alertMetBtn.addEventListener("click",()=>{
    window.alert("ALERT BUTTON WAS CLICKED!!!")
  });
}







window.addEventListener('load', init);
