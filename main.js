const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", calculateAverage);

document.addEventListener("keydown", (keyClickEvent)=>{
    if(keyClickEvent.key === "Enter"){
        calculateAverage();
    }
})

function calculateAverage(){
    let number1 = parseFloat(document.querySelector(".number1").value);
    let number2 = parseFloat(document.querySelector(".number2").value);
    let number3 = parseFloat(document.querySelector(".number3").value);
    
    if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
        alert("Write a valid number!");
        return;
    }else{
        let average = (number1 + number2 + number3)/3;
        alert(`The average is ${average}`);
        let inputs = document.querySelectorAll("input");
        inputs.forEach(input =>{
            input.value = "";
        })
    }

}