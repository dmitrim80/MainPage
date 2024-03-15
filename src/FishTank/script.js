const wElement = document.getElementById("width");
const hElement = document.getElementById("height");
const lElement = document.getElementById("length");
const result = document.getElementById("result");
let volume;

const tempInput = document.getElementById("textBox");
const toCel = document.getElementById("toCel");
const toFah = document.getElementById("toFah");
const resultTemp = document.getElementById("resultTemp");

//calculate water volume
function calculate(){
    volume = (Number(wElement.value) * Number(hElement.value) * Number(lElement.value))/231;
    console.log(volume);
    result.textContent = volume.toFixed(2) + " Gallons";
}

//convert temperature
function convert(){
    let temp = Number(tempInput.value);
    if(!isNaN(temp)){
            if(toCel.checked){
                temp = (temp-32) * (5/9)
                resultTemp.textContent = temp.toFixed(1) + " °C";
            }else if(toFah.checked){
               
                temp = temp * 9/5+32
                resultTemp.textContent = temp.toFixed(1) + " °F";
            } else{
                resultTemp.textContent = "Select the type of conversion units.";   
            }
    }

}