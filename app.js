
 const divChange = document.querySelector('#div-change');
 const spanChange = document.querySelector('#warning');

function changeBackground(){
  divChange.style.background = 'green'
}
function changeSpan(){
spanChange.className = 'warning';

}
function spanRemove(){
    spanChange.classList.add('remove') 
}

divChange.addEventListener('mouseover', changeBackground);
spanChange.addEventListener('click', changeSpan);
spanChange.addEventListener('mouseout', spanRemove)


