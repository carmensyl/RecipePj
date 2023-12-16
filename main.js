// recipes data
const recipes = [
    {
        id: 1,
        img:"images/soup.JPG",
        name: "Pork Chop and Rice with Veggie Soup",    
        intro: "Marinate some pork chops and store in the fridge. They will be ready when you want to cook. Frozen veggies and instant miso soup packs are your best friends to make this heart-warming and easy-to-make soup.",
        ingredients: "Pork Chops (seasoning: soy sauce, sugar, cornstarch, cooking oil), Rice, Frozen Mixed Veggies, Instant Miso Soup Pack",
        guides: [
        "For about every 100g of pork chop, add 1Tbsp soysauce, 1tsp sugar, 1tsp cornstarch and 1Tbsp cooking oil to marinate and leave it in the fridge overnight.",
        "Defrost the frozen veggies by soaking in tap water bath. Change water from time to time.",
        "Cook the rice or microwave leftover rice later.",
        "Heat the pan, add some oil and fry both sides of pork chops to golden color. Better use a pan with lid to lock in moisture.",
        "While frying, boil 1 to 1.5 bowl of water. Then, add the drained frozen veggies in and boil for several minutes until the veggies are soft. Then, add in instant miso soup pack, stir, and cook 1-2 more minutes. And put into a bowl.",
        "Microwave leftover rice just before the pork chop is done. And put the pork chop on plate.",
        "Ta-da! Enjoy your meal!"
        ]  
    },
    {
        id: 2,
        img:"images/white-rice.JPG",
        name: "White Rice (without cooker)",    
        intro: "The basic Asian staple food you need all the time.",
        ingredients: "Rice",
        guides: [
        "Wash and rinse the rice.",
        "Soak it in tap water for 15-30 minutes until it turns to all white in color (lost the original transparency).",
        "Drain the water, and add water of same volume as the rice (1:1).",
        "Put on stove and heat with small to medium flame/ heat until water boils. Keep stirring to prevent sticking.",
        "After boil, change the flame/ heat to the smallest. Let it boil for 5 more minutes.",
        "Remove from heat and keep the lid closed for 5 more minutes.",
        "You can take out your rice now!"
        ]   
    },
    {
        id: 3,
        img:"images/tomato-spaghetti.JPG",
        name: "Spaghetti with Tomato Sauce",    
        intro: "Add your favourite meat and veggies to ready-made tomato sauce to pair with spaghetti. Perfecto!",
        ingredients: "Spaghetti, Ready-made Tomato Sauce, Minced Beef, Mushrooms, Shredded Cheese",
        guides: [
        "Bring water to boil and cook the spaghetti.",
        "Slice the mushrooms.",
        "Heat a pan, add some cooking oil to fry the mushrooms, minced beef.",
        "When beef is cooked, add the tomato sauce and bring it to boil.",
        "Add the cheese to let it melt.",
        "Place spaghetti on the plate first, and glace the sauce on it. You may add some herbs on top for extra aroma.",
        "Ta-da! Enjoy your meal!"
        ]    
    },
    {
        id: 4,
        img:"images/chicken.JPG",
        name: "Chicken Breast with Tomato and Cabbage",    
        intro: "Tomato and cabbage usually have longer shelf life than leafy greens. Store them up and they can save you when you don't want to go out.",
        ingredients: "Chicken Breast, Tomato, Green Cabbage, Frozen Mixed Veggies",
        guides: [
        "Defrost the frozen veggies by soaking in tap water bath. Change water from time to time.",
        "Cook the rice or microwave leftover rice later.",
        "Fry both sides of the chicken breast.",
        "Wash and cut the tomato and green cabbage.",
        "Fry the frozen veggies.",
        "Fry the tomato and green cabbage.",
        "Microwave leftover rice just before the everything is done.",
        "Ta-da! Enjoy your meal!"
        ]  
    },
    {
        id: 5,
        img:"images/avocado-egg.JPG",
        name: "Boiled Egg and Avocado Veggie Bowl",    
        intro: "Good for brunch or afternoon snacking.",
        ingredients: "Egg, Avocado, Frozen Veggies You Like (I used corn kernal and okra)",
        guides: [
        "Defrost the frozen veggies by soaking in tap water bath. Change water from time to time.",
        "Add water to cover half of the eggs (You can cook more eggs to store it up).",
        "Heat with medium to large heat until water boils.",
        "Turn down the heat to the smallest and boil for 7 to 10 minutes (depends on how hard you like the eggs to be).",
        "Prepare ice water bath 3 minutes before eggs are done and soak the eggs after they are done for 10 minutes (It helps to peel off the shell).",
        "Fry the drained fozen veggies on the pan with cooking oil and a pinch of salt.",
        "Cut the avocado and add it to the bowl.",
        "Ta-da! Enjoy the superfood!"
        ]    
    },
]

// make ref to items
const img = document.getElementById("food-img")
const recipeName = document.getElementById("recipe-name")
const intro = document.getElementById("intro")
const ingredients = document.getElementById("ingredients")
const guideList = document.getElementById("guidelist")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// show recipe base on item
function showRecipe(){
    const item = recipes[currentItem]
    img.src = item.img
    recipeName.textContent = item.name
    intro.textContent = item.intro
    ingredients.textContent = item.ingredients
// guideList.textContent = item.guides
// listing items in ordered list

    // console.log(item.guides)
    // console.log(item.guides.length)
    for (i = 0; i < item.guides.length; i++) {
        let li = document.createElement('li');
        li.innerText = item.guides[i];
        guideList.appendChild(li);
    }
}
// console.log(recipes[0].guides)

// set starting item
let currentItem = 0

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    showRecipe()
})

// show next recipe
nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > recipes.length - 1) {
        currentItem = 0
    }
    showRecipe()
})

// show previous recipe
prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = recipes.length - 1
    }
    showRecipe()
})

// show random recipe
randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * recipes.length)
    showRecipe()
})