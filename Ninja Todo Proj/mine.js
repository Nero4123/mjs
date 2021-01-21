const addItem = document.querySelector('.add');
const check = document.querySelector('.todos')
const span = document.querySelectorAll('span');
const li = document.querySelectorAll('li')
const search = document.querySelector('.search input')

    search.addEventListener('keyup', e => {
    for (i=0;i<span.length;i++) {
    if(!span[i].innerText.includes(search.value)){
        li[i].classList.add('filtered');
    } else if(span[i].innerText.includes(search.value)){ 
        li[i].classList.remove('filtered');

    }

    }});


const addLi = (adds) =>{
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${adds}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
`;

check.innerHTML += html;

};


addEventListener('click', e=>{

if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}

});






addItem.addEventListener('submit', e => {
  
    e.preventDefault();
    const todo = addItem.add.value.trim();
  
    if(todo.length){
      addLi(todo);
      addItem.reset();
    }
  
  });

  addEventListener('click', a =>{


    console.log(a.target);
    
    });


