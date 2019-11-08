# week2-CEFG-To-do

hey from your faves



## WHY
To practise using test driven development, pure functions and working as a TEAM <3

## WHAT
We wanted to create an app which was easy to use and pretty

## HOW (describing the journey to completion)
There were 3 broad project objectives which are detailed by our sub-headings below:

### Using TDD to create the logic needed to modify our to-do list
We started by splitting up the pure functions and tackling them by pair programming using test driven development.
We had varying levels of success between pairs but made sure to come together in order to make sure we had a fully functioning "logic.js" file. 

- We honestly found TDD to be rather counterintuitive, having to write your test before your code 'feels' like its the wrong way around. The way we navigated this in terms of writing the logic for our tests was by employing the use of pseudocode.
- We would try to think though what exactly we would like the function to acheive, by drawing diagrams, suring up our knowledge of javascript syntax and creating arbituary values we would test in place of having a pre-existing workable function.
- You can probably see from our tests that once we had created a good flow and figured out the relevant methods to use, we managed to make all of our (non-stretch goal) functions working. 
- An example of how we were initially using the 'wrong' method was by using .join to compare the values vs using deepEqual 
- We had spent some time overcomplicating the instructions given to us in our code. For example we spent quite a while figuring out a way to test whether the description of the array object with idToMark stayed the same when its boolean vakue had been changed... this now seems obviously unnecessary.

### DOM Manipulation
We then used a combination of pair programming and mobbing to tackle the DOM Manipulation. 
- We then used a combination of pair programming and mobbing to tackle the DOM Manipulation. 
- Sometimes we overcomplicated the Dom by creating new variables for instance by adding event listeners to the submit button, whereas there was already addTodoForm with event Listener in the code.

As you will see from our code, this was A LOT of trial and error...:) 
### Adding our own features
We used a mobile first approach to keep our design minimal and used flexbox to center the form and added a background image we thought was jazzy 

## USER STORIES
- We wrote out the user stories incl the stretch goals on a piece of paper to make sure we were consistently working towards them. 
- We managed to get everything working but didnt have a chance to go onto the stretch goals. 

## FUNCTIONS

## CSS - to make it look pretty
- We decided to go for background image like we did the week before and use this as the base of our future colour scheme
- We employed a lot of the techniques we'd used from the week before like manipulating images and using flexbox
- We imported fonts we felt were inkeeping with the theme and were reminiscent of what a manual to-do list may look like

## WHAT WE'VE LEARNED

Testing is initially a bit counter-intuitive but useful when you get your head round it!

We're much better at DOM manipulation 

We sometimes overcomplicated solutions - sometimes the most logical thing is actually the answer! 

## WHERE NEXT?

With more time we could add/fix some features, such as:

fix the slight glitchiness of the checkboxes
Achieve the stretch goal of sorting To Dos
Create a page with multiple lists 
Being able to edit ToDos
Making tests more granular
In terms of workflow: more commits with less lines of code :----) 

## HOW TO RUN OUR TESTS

clone our repo https://github.com/fac18/week2-CEFG-To-do (apologies for no .gitignore file)

install npm on your computer by typing - npm install -g as a command

run npm test to check our tests
