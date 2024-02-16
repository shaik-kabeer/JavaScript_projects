// const form = document.querySelector('form');

const form =document.querySelector('form')
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector('#guide')
    guide
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
        console.log(height)
    }
     else if(weight === '' || weight < 0 || isNaN(weight))
     {
         results.innerHTML = `please give a valid height ${weight}`;
     }    else {
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         console.log(bmi)     
           results.innerHTML = bmi
 if(bmi<18.5){
     guide.innerHTML="You are Under Weight"
    
 }
 else if (bmi>18.5 || bmi< 24.9){
     guide.innerHTML="You are healthly";
 }
 else {
     guide.innerHTML="You are over weight";
 }
        //   switch(bmi){
        //      case ('18.5'): guide.innerHTML="You are Under Weight" ;
        //     case  ('>18.5'||'<24.9'): guide.innerHTML="You are healthly";
        //     case  ('>24.9'): guide.innerHTML="You are over weight";
        //   }
    }
     }
  

)