const menuList = [
    {
        menuName:"Home"
       
    },
    {
        menuName:"About"
        
    },
    {
        menuName:"Menu"
        
    },
    {
        menuName:"BookATable"
        
    },
    {
        menuName:"Features"
        
    },
    {
        menuName:"Blog"
        
    },
    {
        menuName:"Shop"
        
    },
    {
        menuName:"Elements"
        
    }

];
// Creating menu items 
function mainFunction(){
   
    const div = document.createElement("div");
//    Inserting menu items inside a ul
    div.innerHTML= ` <div class="fixfloat fixwidth">
                        
                        <div class="r8"><ul id="menuItem"></ul></div>
                                          
                    </div>
                  `
//  Inserting ul inside the div 
    document.body.appendChild(div);
  
    div.classList.add("menuMainheader");
    // <div class="left"><a href="">Nav Bar</a></div>
    

}
mainFunction();
