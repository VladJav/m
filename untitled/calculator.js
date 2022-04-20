let expression = "";

function addCalculatorElements(clicked_value){
    document.getElementById("inp").value += clicked_value;
}
function operation(clicked_value){
    switch (clicked_value){
        case "CE":
            document.getElementById("inp").value = "";
            expression = '';
            break;
        case "C":
            document.getElementById("inp").value = "";
            break;
        case "Backspace":
            document.getElementById("inp").value = document.getElementById("inp").value.slice(0,-1);
            break;
        case "x":
            expression = document.getElementById("inp").value + "*";
            document.getElementById("inp").value = "";
            break;
        default:
            expression=document.getElementById("inp").value+clicked_value;
            console.log(expression);
            document.getElementById("inp").value = "";
    }
}

function calculate(clicked_value)
{
    expression+=document.getElementById("inp").value;
    console.log(expression);
    document.getElementById("inp").value = eval(expression);
    expression='';

}