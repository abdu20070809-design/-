

let input = document.querySelector('#inputEl');
let btn = document.querySelector('#btnEl');
let box = document.querySelector('#boxEl');

function task(){
    const taskTest = input.value.trim();

    if (taskTest === "") {
        return
    }

    const li = document.createElement('li');

    li.textContent = taskTest

    box.appendChild(li)

    input.value = "";

    let delBtn = document.createElement('Button');

delBtn.textContent = 'Удалть';

delBtn.addEventListener('click', function() {
    li.remove()
})

let addBtn = document.createElement('button')

addBtn.textContent = 'купить'

addBtn.addEventListener('click', function() {
    addBtn.textContent = input.value

})

li.appendChild(addBtn)
li.appendChild(delBtn)

let counterElement = document.querySelector('.caunt--nam')
let count = 0;
if (li.classList.contains("completed")) {
boughtBtn.textContent = "Cancel";
count++; 
} else {
boughtBtn.textContent = "Buy";
count--;
}
count

if (li.classList.contains("completed")) {
    boughtBtn.textContent = "Отменить";
    count++; 
} else {
    boughtBtn.textContent = "Купить";
    count--; 
}
counterElement.textContent = "куплено " + count; 

if (li.classList.contains('completed')) {
    count--;
    counterElement.textContent = "куплено " + count;
}
li.remove();

}



btn.addEventListener('click', task)

    input.addEventListener('keydown', function (acc) {
        if (acc.key === 'Enter') {
            task()
        }
    })
