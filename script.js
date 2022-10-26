// initialize the count as o 
// listen  for clicks on the increment button
//

let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById("count")
let count = 0

function increment(){
    count+= 1 
   countEl.textContent = count
   
}

function save(){
    let container = count + " - "
    saveEl.textContent += container
    count = 0
    countEl.textContent= count
    
    
}
