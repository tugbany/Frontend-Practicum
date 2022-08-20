//elementlerin oluşturulması ve çağırılması
function newElement(txt) {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = txt;
    list.insertBefore(liDOM, list.childNodes[0]);
    const deleted = `<img class="rounded float-right" onclick="deleteItem(this)"  width="23" style="background: transparent;" src="assets/trash.svg" alt=""> `
    liDOM.innerHTML= txt + deleted;
    
   
} 
//delete item 
function deleteItem(e, txt) {
    e.parentElement.remove();
    savedTasks = savedTasks.filter((e) => e !== txt);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
};
let inputVal = document.querySelector("#task");
let addBtn = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");

let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(newElement);

//click function ile lteye ekleme koşulu oluşturuldu.
addBtn.addEventListener('click', () => {
    let txt = inputVal.value;
    if(typeof inputVal.value === "string" && inputVal.value.trim().length === 0) {
        $("#errorToast").toast("show");
    }
    else{
        
        savedTasks.push(txt);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        inputVal.value="";
        newElement(txt);
    }
});

//checked classı eklendi.
list.addEventListener("click", (e) => {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
})