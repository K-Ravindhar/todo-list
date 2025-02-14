
let parent = document.getElementById('listItems');

let count = 0;

let list = [];

document.getElementById('add').addEventListener('click',function(){
    let inputText = document.getElementById('inputText').value;
    let section = document.createElement('section');
    section.classList.add('listItems');

    let p = document.createElement('p');
    p.textContent = inputText;
    p.dataset.number = count;

    list.push(inputText);

    let input = document.createElement('input');
    input.type = "text";
    input.value = inputText;
    input.classList.add('hidden');
    input.dataset.number = count;

    let edit = document.createElement('button');
    edit.textContent = "edit";
    edit.classList.add('edit');
    edit.classList.add('button');
    edit.dataset.number = count;

    let save = document.createElement('button');
    save.textContent = "save";
    save.classList.add('edit');
    save.classList.add('button');
    save.classList.add('hidden');
    save.dataset.number = count;

    let deleted = document.createElement('button');
    deleted.textContent = "deleted";
    deleted.classList.add('button');
    deleted.classList.add('delete');
    deleted.dataset.number = count;

    section.appendChild(p);
    section.appendChild(input);
    section.appendChild(edit);
    section.appendChild(save);
    section.appendChild(deleted);
    parent.appendChild(section);
    console.log(section);

    count++;
})



document.querySelector('#listItems').addEventListener('click',function(event){
    let listItemIndex = event.target.dataset.number;
    document.querySelector(`[data-number = '${listItemIndex}']`).classList.add('hidden');

    let inputChild = document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.value;
    console.log(inputChild);
    document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.classList.remove('hidden');
    document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.nextSibling.classList.add('hidden');
    // console.log(document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.nextSibling);
    let a = document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.nextSibling.nextSibling.classList.remove('hidden');
    
    let save = document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.nextSibling.nextSibling; 
    let deleted  = document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.nextSibling.nextSibling.nextSibling;

    // console.log(save);
    save.addEventListener('click',function(){
        inputChild = document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.value;
        document.querySelector(`[data-number = '${listItemIndex}']`).innerHTML = inputChild;
        document.querySelector(`[data-number = '${listItemIndex}']`).classList.remove('hidden');
        document.querySelector(`[data-number = '${listItemIndex}']`).nextSibling.classList.add('hidden');   
    });

    // let deletes = document.querySelectorAll(`[data-number = '${listItemIndex}']`).classList.add('hidden');
    // deleted.addEventListener('click',function(deletes){
    //     document.querySelector('#listItems').forEach(element => {
    //         element.remove(element);    
    //     });
    // })

});
