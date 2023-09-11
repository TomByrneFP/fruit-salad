const fruitForm = document.querySelector("#inputSection form")

const fruitList = document.querySelector("#fruitSection ul")

const fruitNutrition = document.querySelector("#nutritionSection p")

const totals =document.querySelectorAll(".tol")

const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
    .then(resp => resp.json())
    .then(data => { 
        console.log(data)
        addFruit(data)
    })
    .catch(e => console.error(e))
}

let total = [0,0,0,0,0]

const addFruit = fruit => {
    
    const li = document.createElement("li")
    li.textContent = fruit.name
    li.addEventListener("click", removeFruit, {once:true})
    fruitList.appendChild(li)
    total[0] += fruit.nutritions.calories
    total[1] += fruit.nutritions.carbohydrates
    total[2]  += fruit.nutritions.protein
    total[3]  += fruit.nutritions.fat
    total[4] += fruit.nutritions.sugar
    total.forEach((value, index) => totals[index].textContent = value.toFixed(2))
}


const removeFruit = e => {
    e.target.remove()
}

fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})



