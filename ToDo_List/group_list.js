let form = document.getElementById('addForm');

let parentUL = document.getElementById('items'); //itemList
//console.log(itemList);

// Form sumbit event
form.addEventListener('submit', addItem);



// Add eventListener to 'Remove' item from list     // Part 1: will not run without Part 2
parentUL.addEventListener('click', removeItem);     // create 'removeItem() function' for Part 2 (line 51)

//Add an addItem Function
function addItem(e) {
    e.preventDefault();

    // Grabbing the text box of the document
    let textBox = document.getElementById('new-item');

    // Get input .value
    let textValue = textBox.value;    // newItem        getting this .from()

    // Manipulate value of new text to 'clear it' in search bar         // clear text box input. Use "" strings, '' characters
    textBox.value = "";

    // create new <li> element
    let newLi = document.createElement('li');

    // Add .class
    newLi.className = 'list-group-item';
//    console.log("hi");
 //   console.log(newLi);     // log in variable  // parent is 'newLi' let (variable)

    // Append text node[array list] with input value
    newLi.appendChild(document.createTextNode(textValue));

    // 1. Create 'Delete' button element
    let del = document.createElement('button');

    // 1a. Add classes to 'Delete' button
    del.className = 'btn btn-danger btn-sm float-right delete';

    // 1b. Append text node (logo/symbol/name) inside of button
    del.appendChild(document.createTextNode('-'));

    // 1c. Append(add) button to list (right-align)
    newLi.appendChild(del);

    // 1d. Append new variable 'li' to list
    parentUL.appendChild(newLi);

    // End of addItem function
}

// Part 2:
// Create removeItem() function                // This will remove listed item when clicking 'delete' button
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Do you want to remove this item?')){
            let newLi = e.target.parentElement;
            parentUL.removeChild(newLi);          // parentElement (parentUL), newLi (child) --> to (remove button)

        }
    }
}
