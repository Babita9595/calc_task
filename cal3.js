
 



let displayscreen = document.getElementById('Myscreen'); //declare input box
buttons1 = document.querySelectorAll('button'); //declare buttons
let calcdisplay = '';
for (item of buttons1) {
    item.addEventListener('click', (element) => {
        buttonText = element.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'Clr') {
            calcdisplay = "";
            displayscreen.value = calcdisplay;
        }
        else if (buttonText == '=') {
            displayscreen.value = eval(calcdisplay);
        }
      
  
           

        else {
            calcdisplay += buttonText;
            displayscreen.value = calcdisplay;
        }

    })
}

