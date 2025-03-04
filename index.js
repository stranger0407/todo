// //adding the item

// function add(){
//     let input=document.getElementById("input-text").value;
//     let new_item_div=document.createElement("div")
//     let text=document.createTextNode(input);
//     let new_item_li=document.createElement("LI")
//     let new_item_edit=document.createElement("BUTTON")
//     let new_item_delete=document.createElement("BUTTON")
//     new_item_div.className="item";
//     new_item_edit.className="edit";
//     new_item_delete.className="delete";
    
    
//     let text2=document.createTextNode("Edit");
//     let text3=document.createTextNode("delete");
//     new_item_edit.appendChild(text2);
//     new_item_delete.appendChild(text3);
//     new_item_li.appendChild(text);
//     if(input===""){
//         alert("please write the task");
//     }
//     else{
//         new_item_div.appendChild(new_item_li);
//         new_item_div.appendChild(new_item_edit);
//         new_item_div.appendChild(new_item_delete);
//         document.getElementById("ul").appendChild(new_item_div);
        
//     }
//     document.getElementById("input-text").value="";

//     new_item_delete.addEventListener("click", handler1); 
//     function handler1(){
//          this.parentElement.style.display="none"
//     }
//     new_item_edit.addEventListener("click",handler2);
//     function handler2(){
//         new_item_li.setAttribute("contenteditable",true);
//     }



// }
function add() {
    let input = document.getElementById("input-text").value;
    if (input === "") {
        alert("Please write the task");
        return;
    }

    let new_item_div = document.createElement("div");
    let text = document.createTextNode(input);
    let new_item_li = document.createElement("LI");
    let new_item_edit = document.createElement("BUTTON");
    let new_item_delete = document.createElement("BUTTON");

    new_item_div.className = "item";
    new_item_edit.className = "edit";
    new_item_delete.className = "delete";

    let text2 = document.createTextNode("Edit");
    let text3 = document.createTextNode("Delete");
    new_item_edit.appendChild(text2);
    new_item_delete.appendChild(text3);

    new_item_li.appendChild(text);
    new_item_div.appendChild(new_item_li);
    new_item_div.appendChild(new_item_edit);
    new_item_div.appendChild(new_item_delete);
    document.getElementById("ul").appendChild(new_item_div);

    document.getElementById("input-text").value = "";

    // Event listeners
    new_item_delete.addEventListener("click", handlerDelete);
    new_item_edit.addEventListener("click", handlerEdit);

    // Delete handler
    function handlerDelete() {
        if (confirm("Are you sure you want to delete this task?")) {
            this.parentElement.style.display = "none";
        }
    }

   
    function handlerEdit() {
        let li = this.previousElementSibling;
        if (this.textContent === "Edit") {
            li.setAttribute("contenteditable", true);
            li.focus();
            this.textContent = "Save"; 
        } else {
            li.setAttribute("contenteditable", false);
            this.textContent = "Edit";  
        }
    }
}

