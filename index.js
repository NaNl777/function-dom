const body = document.body;

//Функция которая добавит внутрь body (до блока div) заголовок с текстом “Работа с DOM”.
const start = () => {
 const main = document.querySelector("h1");
 const title = document.createElement("h1");
 title.textContent = "Работа с DOM" 
 body.prepend(title)
}

start()
//Функция которая добавит внутрь div#main в самый конец ссылку на статью о DOM.
const startTwo = () => {
    const divMain = document.querySelector("#main")
    const a = document.createElement("a")
    a.setAttribute("href", "https://learn.javascript.ru/dom-nodes");
    a.textContent = "Дом дерево"
    divMain.append(a)
};

startTwo()
//Функция которая принимает один параметр - название цвета - и меняет фоновый цвет
const startThree = (color) => {
    const document = body.style.background = color;
}

startThree('red')
//Функция которая принимает один параметр - текст - и добавляет в конец списка #list новый элемент li c текстом переданным в функцию.
const startFour = (text) => {
    const li = document.createElement("li")
    li.textContent = text;
    const divList = document.querySelector("#list");
    divList.append(li)
}

startFour("Coke")
//Функция которая удаляет блок с копирайтом (`#copyright`)
const startFive = () => {
    const copirigth = document.querySelector("#copyright");
    copirigth.remove()
}

startFive()