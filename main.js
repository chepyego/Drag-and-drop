const items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')
let dragItem = null

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});

function dragStart() {
    console.log ('drag started');
     dragItem = this;
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    console.log ('drag ended');
    this.className = 'list-item'
    dragItem = null;
}

lists.forEach(list =>{
    
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', dragDrop);

});

function dragOver(e) {
    e.preventDefault()
    console.log('drag over');
}

function dragEnter() {
    console.log( ' drag entered');
}

function dragLeave() {
    console.log( ' drag left');
}
function dragDrop() {
    console.log( ' drag dropped');
    this.append(dragItem);
}