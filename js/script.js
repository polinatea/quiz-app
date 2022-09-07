const question = document.querySelector('#question');
const choices = document.querySelectorAll(".choice-container");
const choice_text = document.querySelectorAll(".choice-text");
const score = document.querySelector(".score");
let quiz = [
    {
        question : "The web is based on",
        choices : ["Images","Text","HTML","Information"],

        answer : "HTML",
    },
    {
        question : "What language is used for frontend developmend?",
        choices : ["C","Javascript","Assembler","Swift"],
        answer : "Javascript",
    },
    {
        question : "What is used for style?",
        choices : ["HTML", "PHP","Javascript" ,"CSS"],
        answer : "CSS",
    }
]

// startGame = () =>{
//     questionsCounter = 0;
//     getNewQuestion()
// }

// getNewQuestion = () =>{

// }

let points = 0;
let questionNumber = 0;
document.addEventListener("DOMContentLoaded", function(event) {
    info_change();
})

function info_change(){
    score.innerHTML = points;
    if (questionNumber>quiz.length){
        
    }
    question.innerHTML = quiz[questionNumber]["question"];
    
    choice_text.forEach(element => {
        element.innerHTML = quiz[questionNumber]["choices"][element.id-1];
    });
    
}



choices.forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        // e.preventDefault();  
        let choiceCont = e["path"][1]; //   choice-container
        let choice_txt = choiceCont.childNodes[3] // choice-text

    if (choice_txt.innerHTML==quiz[questionNumber]["answer"]){
        choiceCont.className = "choice-container correct";
        points+=1;
        questionNumber+=1;
        setTimeout(()=>{
            choiceCont.classList.remove("correct");
            info_change()
        },500);


    }
    else{
        choiceCont.className = "choice-container incorrect";
        questionNumber+=1;
        setTimeout(()=>{
            choiceCont.classList.remove("incorrect");
            info_change()
        },500);
    }
     });
  });



