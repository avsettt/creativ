var icon = document.getElementById("my_icon");
var jsMenu = document.getElementById("id_menu");


icon.addEventListener("click", cntrol)
function cntrol(){
if(jsMenu.className === "menu"){
       jsMenu.className += " jsFix";
      }else{
        jsMenu.className = "menu";
    }
}

