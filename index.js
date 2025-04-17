let parent = document.getElementById('listItemsContainer');

let count = 0;

let list = [];

document.getElementById('add').addEventListener('click',function(){
    let inputText = document.getElementById('inputText').value;
    let section = document.createElement('section');
    section.classList.add('listItems');
    section.dataset.number = count;

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
    save.classList.add('save');
    save.classList.add('button');
    save.classList.add('hidden');
    save.dataset.number = count;

    let deleted = document.createElement('button');
    deleted.textContent = "delete";
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
    document.getElementById('inputText').value = '';

    count++;
})


document.querySelector('#listItemsContainer').addEventListener('click',function(event){
    let listItemIndex = event.target.dataset.number;
    let section = document.querySelector(`section[data-number = '${listItemIndex}']`);
     
    console.log(section)
    if(event.target.classList.contains("edit")){
        let p = section.querySelector('p');
        let input = section.querySelector('input');
        let edit = section.querySelector('.button.edit');
        let save = section.querySelector('.button.save');
        
        p.classList.add('hidden');
        input.classList.remove('hidden');
        edit.classList.add('hidden');
        save.classList.remove('hidden');
    }
    if(event.target.classList.contains('save')){
        let p = section.querySelector('p');
        let input = section.querySelector('input');
        let edit = section.querySelector('.button.edit');
        let save = section.querySelector('.button.save');

        let value = input.value;

        p.textContent = value;
        p.classList.remove('hidden');
        input.classList.add('hidden');
        save.classList.add('hidden');
        edit.classList.remove('hidden');
    }
    if(event.target.classList.contains('delete')){
        section.remove();
    }
})