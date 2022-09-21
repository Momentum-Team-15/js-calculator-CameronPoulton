
const display = document.querySelector("#answer")





let buttons = document.querySelectorAll('.button')
for (let button of buttons)
    button.addEventListener('click', (event) => {
        console.log(button.innerText)

        let newElement = document.createElement('div')
        let text = document.createTextNode(event.target.innerText)
        newElement.appendChild(text)
        display.appendChild(newElement)
    })
