function fun1() {
    const userInput = document.getElementById('inputBox').value;
    const U_convart = parseInt(userInput);
    const userResult = document.getElementById('result');
    userResult.innerHTML = "";//clear previous result
    for (let i = 1; i <= 10; i++) {

        //prothom bar jokhon loop run korce tokhon += ...maddome useresult seta nijwer kace rakce 
        //then loop 2nd bar gurce se nijer kace data rekhe dice 
        //finaly 10tth number loop e loop off howa matroey result show korce

        userResult.innerHTML += (U_convart + " x " + i + " = " + (U_convart * i) + "<br>");
    }
}


function fun2(){
const inpur1=document.getElementById('inputBox1').value;
const inpur2=document.getElementById('inputBox2').value;
const Result=document.getElementById('result1');
Result.innerHTML=""; //clear previous result
Result.innerHTML=(parseInt(inpur1)+parseInt(inpur2));
}
function fun3(){
const inpur3=document.getElementById('inputBox3').value;
const inpur4=document.getElementById('inputBox4').value;
const Result=document.getElementById('result2');
Result.innerHTML=""; //clear previous result
Result.innerHTML=(parseInt(inpur3)-parseInt(inpur4));
}
function fun4(){
const inpur5=document.getElementById('inputBox5').value;
const inpur6=document.getElementById('inputBox6').value;
const Result=document.getElementById('result3');
Result.innerHTML=""; //clear previous result
Result.innerHTML=(parseInt(inpur5)*parseInt(inpur6));
}
function fun5(){
const inpur7=document.getElementById('inputBox7').value;
const inpur8=document.getElementById('inputBox8').value;
const Result=document.getElementById('result4');
Result.innerHTML=""; //clear previous result
Result.innerHTML=(parseInt(inpur7)/parseInt(inpur8));
}






