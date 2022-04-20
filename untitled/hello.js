var calculatorElements = [];

function addCalculatorElements(clicked_value){
    if (calculatorElements.length<3){
        document.getElementById("inp").value += clicked_value;
    }
}
function operation(clicked_value){
    if(clicked_value=="CE"){
        document.getElementById("inp").value = "";
        calculatorElements = [];
    }
    else if(clicked_value=="C"){
        document.getElementById("inp").value = "";
    }
    else if(clicked_value=="Backspace"){
        document.getElementById("inp").value = document.getElementById("inp").value.slice(0,-1);
    }
    else if(clicked_value=="x"){
        calculatorElements.push(document.getElementById("inp").value);
        calculatorElements.push("*");
        document.getElementById("inp").value = "";
    }
    else{
        calculatorElements.push(document.getElementById("inp").value);
        calculatorElements.push(clicked_value);
        document.getElementById("inp").value = "";
    }
}
function calculate(clicked_value)
{
    calculatorElements.push(document.getElementById("inp").value);
    console.log(calculatorElements);
    let a = calculatorElements[0]+calculatorElements[1]+calculatorElements[2];
    console.log(a);
    document.getElementById("inp").value = eval(a);
    calculatorElements = [];
    // var firstNumber = parseFloat(calculatorElements[0]);
    // var secondNumber = parseFloat(document.getElementById("inp").value);
    // var operation = calculatorElements[1];
    // calculatorElements.push(secondNumber);
    // if(operation=="+"){
    //     document.getElementById("inp").value = firstNumber+secondNumber;
    // }
    // else if(operation=="-"){
    //     document.getElementById("inp").value = firstNumber-secondNumber;
    // }
    // else if(operation=="/"){
    //     document.getElementById("inp").value = firstNumber/secondNumber;
    // }
    // else if(operation=="x"){
    //     document.getElementById("inp").value = firstNumber*secondNumber;
    // }
    // calculatorElements = [];
    // console.log(calculatorElements);
}