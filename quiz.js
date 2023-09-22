
const questions=[
    {
        question:"Which of the following is an advantage of using JavaScript?",
        options:[
            { text:"Less server interaction", correct:false},
            { text:"Immediate feedback to the visitors", correct:false},
            {text:"All of the above.", correct:true}
            ]
        
    },
    {
        question:"Which built-in method returns the length of the string?",
        options:[
            {text:"length()",correct:true},
            {text:"size",correct:false},
            {text:"index",correct:false}
           
        ]
        
    },
    {
        question:"Which of the following function of String object returns the characters in a string between two indexes into the string?",
        options:[
            {text:"substring()",correct:true},
            {text:"split()", correct:false},
            {text:"slice()", correct:false},
            
        ]
      
    },
    {
        question:"Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
        options:[
            {text:"blink()",correct:false},
            {text:"bold()", correct:true},
            {text:"big()", correct:false},
           
        ]
      
    },
    {
        question:"Which of the following function of Array object removes the last element from an array and returns that element?",
        options:[
            {text:"push()",correct:false},
            {text:"shift()", correct:false},
            {text:"pop()", correct:true},
            
        ]
      
    }


];

const questionElement=document.getElementById("question");
const optionElement=document.getElementById("answer");
const nextButton=document.getElementById("nextButton");
const resultElement=document.getElementById("result");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.options.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        optionElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextButton.style.display="none";
    while(optionElement.firstChild){
        optionElement.removeChild(optionElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn=e.target;
    const isCorrect=selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(resultElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();




