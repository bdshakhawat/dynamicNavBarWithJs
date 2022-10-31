// Helper function for menuName validation
function menuNameValidation(navmenuObject){
        // console.log(navmenuObject);
        // Base menuName list
        let allowedMenuNameList=["Home","About","Menu","BookATable","Features","Blog","Shop","Elements"];
        // Logic to compate with Base menuName
        return allowedMenuNameList.includes(navmenuObject["menuName"]);
}
// function nav(){
//         const div= document.createElement("div")
//      div.innerHTML= ` <div class="fixfloat  fixWidth">
//                     <div class="left"><a href=" ">Nav Bar</a></div>
//                     <div class="r8"> <ul id="menuIteam"></ul></div>
//                  </div>

//                `
//     document.body.appendChild(div);
//     div.classList.add("menuMainheader");
// }
// const menuBarItem=document.createElementById("menuIteam")
// function navIteam(){
//         menuObj.map((data)=>{
//                 const list_Item=document.createElement("li");
//                 list_Item.innerHTML=`<a href=${data.link}> ${data.menuName}</a>`
//                 menuBarItem.appendChild(list_Item)
//         })
// }
// navIteam()

















