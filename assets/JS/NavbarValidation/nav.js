
// Menu Link validation
function createNavBar(menuObj){
    console.log(menuObj);
   
    for(let x=0; x < menuObj.length; x++){
        // menuLink validation
        let menuNameValidated= menuNameValidation(menuObj)[x];

        // console.log(menuNameValidated);
        // if(!menuNameValidated){
        //     // alert("Menu Name is not allowed");
        //     // return
        // }
   


// Validation completed create a form
// It's a loop so we will create the object once

x==0 ? u= document.createElement("ul"):null;
u.setAttribute("class", "js-powered-nav")


let l=document.createElement("li");
l.setAttribute("menuName",menuObj[x]["menuName"],"id","list")
l.setAttribute("link",menuObj[x]["link"],"id","link")
let an=document.createElement("a")
an.setAttribute("link",menuObj[x]["link"])
console.log(an);
let nod=document.createTextNode(menuObj[x]["menuName"]);
console.log(menuObj[x]["menuName"]);
// an.appendChild("nod")
console.log(an)
l.appendChild(nod);
u.appendChild(l);













    // let n= document.createElement("div");
    //  n.setAttribute("class","fixfloat","fixwidth")
    //  let u = document.createElement('ul');
    //  u.setAttribute("id","menuItem");
    //  let l=document.createElement("li");
    //  l.setAttribute("id","item")
    //  let a=document.createElement("a");
    //  a.setAttribute("link",menuObj[x]["link"])
    //  let nod= document.createTextNode(menuObj[x]["menuName"]);
    //  a.appendChild(nod);

    //  l.appendChild(a);  
    //  u.appendChild(l);
    //  n.appendChild(u);
    //  document.body.appendChild(n);


    
    }

    var div=document.getElementsByClassName("js-nav")[0];
    console.log(div);
    div.appendChild(u);

    

    
     

    
    
    



    
     

     


    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
