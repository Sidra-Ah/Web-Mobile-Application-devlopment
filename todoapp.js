function addTodo(){
    var todoItem = document.getElementById("todo_item");
    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.setAttribute("class","list-group-item")
    li.appendChild(liText)

     // create del button
     var delbtn = document.createElement("button")
     var delText = document.createTextNode("Delete")
     delbtn.setAttribute("class","btn btn-outline-secondary")
     delbtn.setAttribute("onclick","deleteItem(this)")
     delbtn.appendChild(delText)
     // create edit button
var editbtn = document.createElement("button");
var editText = document.createTextNode("EDIT")
editbtn.appendChild(editText)
editbtn.setAttribute("class","btn btn-outline-secondary")
editbtn.setAttribute("onclick","editItem(this)")
li.appendChild(editbtn )


  li.appendChild(delbtn)
    list.appendChild(li)
    todoItem.value =""
  }
  function deleteItem(e){
    e.parentNode.remove()
   }
   function editItem(e){
       var val = e.parentNode.firstChild.nodeValue;
       var editValue = prompt("Enter value",val)
   e.parentNode.firstChild.nodeValue = editValue
    
   }
   function deletetodo(){
       list.innerHTML = ""
   }
    
