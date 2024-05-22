//main
const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
document.getElementById("math_random").addEventListener('click', () => {
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
        colorCode += colorArray[Math.floor(Math.random() * 16)];
    }
    //for main body
    // document.body.style.backgroundColor = colorCode; 
    //for specic div or id
    const x=document.getElementById('main');
    x.style.backgroundColor = colorCode;
    //other Div
    // const x2=document.getElementById('main1');
    // x2.style.backgroundColor = colorCode;
    //colorcode
    const code=document.getElementById('Random_color');
    code.innerHTML=colorCode;
});

//main1
const Name = document.getElementById("Name");
const Red = document.getElementById("Red");
const Green = document.getElementById("Green");
//css
// bd.style.width = "max-content";
// bd.style.padding = "10px";

Name.addEventListener("mouseover", () => {
    Name.style.backgroundColor = "white";
    Name.style.color = "red";
    Name.innerHTML = "Mouse in";
});
Name.addEventListener("mouseout", () => {
    Name.style.backgroundColor = "white";
    Name.style.color = "blue";
    Name.innerHTML = "Mouse out";
});

//red green
Red.addEventListener("click", () => {
    main1.style.backgroundColor = "red";
    main1.style.color = "Red";
    Name.innerHTML = "It's Red Color";
});

Green.addEventListener("click", () => {
    main1.style.backgroundColor = "green";
    main1.style.color = "Green";
    Name.innerHTML = "It's Green Color";
});

