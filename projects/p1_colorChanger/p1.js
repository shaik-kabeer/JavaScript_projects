const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button)  {
    console.log(buttons);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(button);
switch(e.target.id){
    case 'Red': body.style.backgroundColor=e.target.id;
    break;
    case 'Orange': body.style.backgroundColor=e.target.id;
    break;
    case 'Yellow': body.style.backgroundColor=e.target.id;
    case 'Green': body.style.backgroundColor=e.target.id;
    case 'Blue': body.style.backgroundColor=e.target.id;
    case 'Indigo': body.style.backgroundColor=e.target.id;
    case 'Violet': body.style.backgroundColor=e.target.id;

}

// Red 2. Orange 3. Yellow 4. Green 5. Blue 6. Indigo 7. Violet
        // if (e.target.id === 'Red'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if (e.target.id === 'Blue'){
        //     body.style.backgroundColor=e.target.id;
        // }
        // if (e.target.id === 'Green'){
        //     body.style.backgroundColor=e.target.id;
        // }

    });
    
});