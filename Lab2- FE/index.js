function Quiz ( questions ) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question ( text, options, answer ) {
    this.text = text ;
    this.options = options ;
    this.answer = answer ;
}

Quiz.prototype.getQuestionByIndex = function (){
    return this.questions[ this.questionIndex ] //index of question, suppose[0] will fetch 0th element question
}

Quiz.prototype.checkOptionWithAnswer = function (ans) {
    if ( this.getQuestionByIndex().answer == ans ){
        this.score++
    }
    this.questionIndex++
}

Quiz.prototype.isEnded = function (){
    return this.questionIndex == this.questions.length
}
let questions = [
    new Question ( "JavaScript Supports ___", [ "Functions" , "XHTML" , "CSS" , "HTML" ] , "Functions" ),
    new Question ( "Which language used for styling web pages" , [ "HTML" , "JQuery" , "CSS" , "XML" ], "CSS" ),
    new Question ( "Which is not a JavaScript Framework", [ "Python", "JQuery", "Django", "NodeJS" ], "Django" ),
    new Question ( "Which is used to connect to Database", [ "PHP", "HTML", "JS", "All" ], "PHP" ),
    new Question ( "JavaScript is a ___ ", [ "Language", "Programming Language", "Development Language", "All" ], "Programming Language" )
]

let quiz = new Quiz ( questions );   

function displayQuestions (){
    if ( quiz.isEnded() ){
        showScores() ;
        } else {
        let qustionElem = document.getElementById( 'question' )
        qustionElem.innerText = quiz.getQuestionByIndex().text

        let choices = quiz.getQuestionByIndex().options
            for( let i = 0 ; i < choices.length ; i++){
                let elem = document.getElementById( "choice"+ i )
                elem.innerText = choices[i] 
                handleClickOnBtn( "btn" + i , choices[i] )
            }
            showProgress()
        }

    
}
function showProgress (){
    let curr = quiz.questionIndex +1
    let elem = document.getElementById( 'progress' )
    elem.innerText = `Question ${curr} of ${quiz.questions.length}`
}

function handleClickOnBtn ( id , choice ){
    let buttonElem = document.getElementById ( id )
    buttonElem.onclick = function (){
        quiz.checkOptionWithAnswer( choice )
        displayQuestions();
    }
}

function showScores (){
    let result = `<h1>Result</h1><h2 id="score">Your Score is:${quiz.score}.And mark Percentage is: ${(quiz.score/questions.length)*100}%</h2>`
    let quizElem = document.getElementById( "quiz" )
    quizElem.innerHTML = result;
}
displayQuestions();