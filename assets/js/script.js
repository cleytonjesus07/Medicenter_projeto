let btn_menu = document.getElementsByClassName("menu")[0];
let menu = document.getElementsByClassName("menu_lista")[0];

window.onload = btn_menu.addEventListener("click",()=>{
    if(btn_menu.dataset.pressed == "" || btn_menu.dataset.pressed == null){ 
        menu.style.display = "flex";
        btn_menu.dataset.pressed = 'pressed'; 
        return;
    }else{
        menu.style.display = "none";
          btn_menu.dataset.pressed = '';
          return;
    }
   /*  (this.onclick) ? menu.style.display = "flex" : menu.style.display = "none"; */
})