const socialWall = document.querySelector(".carousel-inner")
const fetchData = async()=>{
    try{
        const api_call = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        const data = await api_call.json()
        console.log(data.meals)
        renderEntries(data.meals)
    }catch(error){
        console.log(error.message)
    }
}
const renderEntries = (meals)=>{
    let result = ""
    let slides = []
    meals.forEach((entry )=>{
        result += `<div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-img">
                                <img src=${entry.strMealThumb} class="img-fluid">
                            </div>
                            <div class="card-body">
            <p class="card-text">${entry.strMeal}</p>
        </div>
                        </div>
                    </div>
                </div>`



    })
    socialWall.innerHTML = result
    slides = document.querySelectorAll(".carousel-item")
    slides[0].classList.add("active")
    slides.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}




fetchData()

// let items = document.querySelectorAll('.carousel .carousel-item')
//
// document.addEventListener("DOMContentLoaded", function(event){
//     items.forEach((el) => {
//         const minPerSlide = 3
//         let next = el.nextElementSibling
//         for (var i=1; i<minPerSlide; i++) {
//             if (!next) {
//                 // wrap carousel by using first child
//                 next = items[0]
//             }
//             let cloneChild = next.cloneNode(true)
//             el.appendChild(cloneChild.children[0])
//             next = next.nextElementSibling
//         }
//     })
// })
