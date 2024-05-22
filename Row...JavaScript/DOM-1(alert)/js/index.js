const userInput = document.getElementById('inputBox');
const userSubmit = document.getElementById('submit');
const userResult = document.getElementById('result');

userInput.addEventListener('click',function(){
alert("UserData by id");
});

userSubmit.addEventListener('click', function () {
    alert("User submit by id");
});

userResult.addEventListener('click',function(){
    alert("User result by id");
});
//onclick
function fun3(){
    alert("fun3...Onclick");
};