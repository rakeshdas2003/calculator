let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByTagName('input'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === '=') {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = 'Error';
            }
        } else if (e.target.value === 'AC') {
            screen.value = '';
        } else if (e.target.value === 'DC') {
            screen.value = screen.value.slice(0, -1);
        } else {
            screen.value += e.target.value;
        }
    });
});


/*let screens = document.getElementById("screen");
let buttons = document.getElementsByTagName("input");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string); // Corrected variable name
            screens.value = string;
        } 
        string +=e.target.innerHTML;
        screens.value = string;
    })
});*/



