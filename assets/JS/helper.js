const menuBarItem=document.getElementById("menuItem")
function navListItem(){
    menuList.map((data) => {
        const list_Item = document.createElement("li");
        list_Item.innerHTML=`<a href=${data.link}>${data.menuName}</a>`
        menuBarItem.appendChild(list_Item)
    })
}
navListItem();

// function navListItem(){
//     menuList.map(function(Elements) {
//             const list_Item = document.createElement("li");
//         //    Insert menuName(Home,About...) into li
//             list_Item.innerHTML=`${Elements.menuName}`;
//             // Insert li into ul
//             menuBarItem.appendChild(list_Item);
//         })
//     }
// navListItem();