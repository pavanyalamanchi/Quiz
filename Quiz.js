window.onload = function() {
    questionCreator()
}

var questions = [{
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
    ],
}, {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
}, {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
}, {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
        "Counter Strike Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
    ],
}, {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
    ],
}, {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
}, {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
}, ];

//let questions[i].answers = []
//let newArray = []
for (let i = 0; i < questions.length; i++) {
    questions[i].answers = questions[i].correct_answer + "," + questions[i].incorrect_answers
        //newArray = questions[i].answers.split(',')
}
//let arrOfArrays=[]
//try using insert adjacent html
//learn DOM
//learn CSS
//js Regex

let radioButton = {}

function questionCreator() {
    let body = document.getElementsByTagName('body')[0] // getting body by tag
    let div = document.createElement('div') // creating a div
    let brTag = document.createElement('br') // creating a break tag
    body.appendChild(div) // appending div into body
    div.id = 'startFunction' // adding id to created div tag
    for (let i = 0; i < questions.length; i++) {
        div.appendChild(brTag) // providing br tag before questions
        div.innerHTML = div.innerHTML + questions[i].question + '<br>' //adding questions to html from js object
        let j = 0
        for (let j = 0; j < 4; j++) {
            let radioButton = document.createElement('button') // creating buttons
            radioButton.setAttribute('type', 'radio') // setting type of button to radio
            radioButton.setAttribute('onClick', 'radioClick(this.id)')
            radioButton.innerHTML = radioButton.innerHTML + questions[i].answers.split(',')[j] // answers added to radio buttons
            div.appendChild(radioButton) // appending the radio buttons to div
            div.appendChild(brTag)
            let breakTag = document.createElement('br') // creating another break tag between buttons
            div.appendChild(breakTag) // appending br to div
        }
    }
    let allButtons = document.getElementsByTagName('button')
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].setAttribute('id', i)
    }
    let inputButton = document.createElement('input') // creating an input button
    inputButton.setAttribute('type', 'button')
    inputButton.setAttribute('value', 'Finish')
    inputButton.setAttribute('onClick', 'finishButton()')
    div.appendChild(inputButton)
    div.appendChild(brTag)
}



function startClick() {
    let divTag = document.getElementById('startFunction')
    divTag.style.display = 'block'
}

let count = 0

function radioClick(clickedId) {

    if (clickedId == 0 || clickedId % 4 == 0) {
        let correctAnswerButton = document.getElementById(clickedId)
        correctAnswerButton.style.backgroundColor = 'green'
        count++
    } else {
        let wrongAnswerButton = document.getElementById(clickedId)
        wrongAnswerButton.style.backgroundColor = 'red'
    }
}

function finishButton() {
    let labelTag = document.createElement('label')
    labelTag.innerHTML = 'Final score of the Quiz: ' + count + ' out of 7 <br>'
    let body = document.getElementsByTagName('body')[0]
    body.appendChild(labelTag)
    let secondLabelTag = document.createElement('label')
    if (count < 5) {
        secondLabelTag.innerHTML = "Well! That's bad <br> TryAgain"
    } else {
        secondLabelTag.innerHTML = "Hell yeah! You are fucking smart"
    }
    body.appendChild(secondLabelTag)
}