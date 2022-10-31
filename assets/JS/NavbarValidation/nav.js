
// Menu Link validation
function createNavBar(menuObj){
    console.log(menuObj);
   
    for(let x=0; x<menuObj.length; x++){
        // menuLink validation
        let menuNameValidated= menuNameValidation(menuObj)[x];

        console.log(menuNameValidated);
        if(!menuNameValidated){
            // alert("Menu Name is not allowed");
            // return
        }
   


// Validation completed create a form
// It's a loop so we will create the object once


    
    }
    let n= document.createElement("div");
     n.setAttribute("class","fixfloat","fixwidth")
     let u = document.createElement('ul');
     u.setAttribute("id","menuItem");
     let l=document.createElement("li");
     let a=document.createElement("a");
     a.setAttribute("link",menuObj[x]["link"])
     let nod= document.createTextNode(menuObj[x]["menuName"]);
     a.appendChild(nod);


     l.appendChild(a);  
     u.appendChild(l);
     n.appendChild(u);
     document.body.appendChild(n);
     

    
    
    



    
     

     


    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //    Inserting menu items inside a ul
    //     div.innerHTML= ` <div class="fixfloat fixwidth">
                            
    //                         <div class="r8"><ul id="menuItem"></ul></div>
                                              
    //                     </div>
    //                   `
    //      const menuBarItem=document.getElementById("menuItem")
    //      menuObj.map((data) => {
    //         const list_Item = document.createElement("li");
    //         list_Item.innerHTML=`<a href=${data.link}>${data.menuName}</a>`
    //         menuBarItem.appendChild(list_Item)
    // //  Inserting ul inside the div 
    //     document.body.appendChild(div);
      
    //     div.classList.add("menuMainheader");



    

}






























// function createNavBar(menuObj){
    // console.log(menuElements);
    // navListItem();
   
    // const div = document.createElement("div");

//    Inserting menu items inside a ul

    // div.innerHTML= ` <div class="fixfloat fixwidth">
                        
    //                     <div class="r8"><ul id="menuItem"></ul></div>
                                          
    //                  </div>
    //                `
    //         const menuBarItem=document.getElementById("menuItem")
    //         console.log(menuBarItem);
    //         let item = menuList.map((data) => {
    //                     const list_Item = document.createElement("li");
    //                     list_Item.innerHTML=`<a href=${data.link}>${data.menuName}</a>`
    //                     // menuBarItem.appendChild(list_Item)
    //                 })
   
    // const list_Item = document.createElement("li");
    // menuBarItem.appendChild(list_Item)
//  Inserting ul inside the div 
    // document.body.appendChild(div);
  
    // div.classList.add("menuMainheader");
    // <div class="left"><a href="">Nav Bar</a></div>
    

// }
// mainFunction(8,menuList);
