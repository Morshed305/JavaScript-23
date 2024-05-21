
// Math
function Morshed() {
    const income = document.getElementById('Income').value;

    const food = document.getElementById('Food').value;
    const rent = document.getElementById('Rent').value;
    const clothes = document.getElementById('Clothes').value;

    const calculate = document.getElementById('Calculate').value = (parseInt(food) + parseInt(rent) + parseInt(clothes));
    const total_Expenses = document.getElementById('Total_Expenses').innerHTML = calculate;
    // alert(total_Expenses);
    const balance = document.getElementById('Balance').innerHTML = parseInt(income) - total_Expenses;

    // alert("hi")
    // if(income==0){
    //     income.innerHTML=" Invalid ";
    // }
}

function Morshed_alam() {
    const income = document.getElementById('Income').value;
    // alert("hi,morshed")
    const food = document.getElementById('Food').value;
    const rent = document.getElementById('Rent').value;
    const clothes = document.getElementById('Clothes').value;
    const calculate = document.getElementById('Calculate').value = (parseInt(food) + parseInt(rent) + parseInt(clothes));
    const balance2 = parseInt(income) - calculate;
    const persent = document.getElementById('persent').value;
    const save = document.getElementById('Saved').value = (persent * balance2) / 100;
    const saving_Amount = document.getElementById('Saving_Amount').innerHTML = save;
    const remaining_Balance = document.getElementById('Remaining_Balance').innerHTML = balance2 - saving_Amount;
}
// Math...Sid...End



// Uncompleat


// const pic1 = document.querySelectorAll('.pic1')[0]
// const pic2 = document.querySelectorAll('.pic2')[0]
// const pic3 = document.querySelectorAll('.pic3')[0]
// const pic4 = document.querySelectorAll('.pic4')[0]
// const pic5 = document.querySelectorAll('.pic5')[0]




