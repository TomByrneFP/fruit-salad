const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul")

const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit
    li.addEventListener("click", removeFruit, {once:true})
    fruitList.appendChild(li)
}

const removeFruit = e => {
    e.target.remove()
}

fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})



