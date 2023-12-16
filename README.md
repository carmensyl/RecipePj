# Recipe Project

## Objectives
Develop a simple and dynamic interface to showcase different recipes. It should be able to:

1. Show the first recipe by default

2. By clicking the next button, it will go to the next recipe

3. By clicking the previous button, it will go to the previous recipe

4. For point 2-3, the order will go round and around, and will not stop at the first or the last recipe

5. By clicking the random button, it will show a random recipe

## Plan/ Requirement

Plan

| Day | Task |
| ------ | ------- |
| 1-2 | Research for tutorials and online resources for ideas |
| 3 | Finalise idea; construct html/ css structure of the page
| 4 | Fine-tune the html/css; define JS constants and functions

----
Requirement
1. Store info of every single recipe as an object

2. Make reference to the html element

3. Write a function to show a single recipe by getting the current item number (starting point is 0)

4. Add event listener and call back function to window to show the initial recipe (current item number = 0)

5. Add event listeners and call back functions to buttons to change the current item number variable for changing recipe on screen

6. Write a function to get a random number as the current item number for the random button to show the random recipe

## Instruction

Link: https://github.com/carmensyl/RecipePj

Clone the repo and open `index.html` using Chrome browser


## Reference
1. Build 15 JavaScript Projects - Vanilla JavaScript Course on YouTube by freeCodeCamp.org (Link: https://www.youtube.com/watch?v=3PHXvlpOkf4&t=2644s&ab_channel=freeCodeCamp.org)

## Problem unsolved
1. For the order list under the recipe guide, since I used a for loop to append the array items to the `ol` tag, the list will keep expanding when clicking to other recipes. May be append is not a good method for showing the dynamic order list. I should explore on other methods like map() / join().


## Potential features to add
When the number of recipes increase, one more html page can be created and a filter function can be used to show a list of related recipes in a certain category.(Like this: https://medium.com/@benjamin.flanders96/how-to-create-a-simple-javascript-filter-67e50b32ccb5)
