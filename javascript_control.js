// What are control sturctures? They are javascript syntax/feature that allow you to control under which condition is code executed or how often. 


// if statements

const myName = 'Julio';
const other = 'James';
const background = document.querySelector('#div-change')
function accessName(name){
    
    if(name.toLowerCase() === "julio"){
        const paraGraph = document.querySelector('.old');
        paraGraph.innerHTML ="hello"+ ' '+ name;
        background.style.backgroundColor = " green"
    }else{
        const paraGraph = document.querySelector('.old');
        paraGraph.innerHTML ="hello , You do not have access!";
        background.style.backgroundColor ='red'
    }

    
}

accessName(myName)

// loops