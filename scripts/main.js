//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("飞起来！");
// } else {
//     alert("黑手！");
// }

// document.querySelector("html").addEventListener("click",() =>{
//     alert("不玩明日方舟你点什么?")
// ;});

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/main.png") {
        myImage.setAttribute("src","img/img2.png");
    } else {
        myImage.setAttribute("src", "img/main.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("请输入prts ID.");
    if (!myName) {
        setUserName();
    } else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `欢迎你，${myName}博士`;
}};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `欢迎你,${storedName}博士`;
};

myButton.onclick = () => setUserName();
