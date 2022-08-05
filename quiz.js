const quiz = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "option4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Super Sheets",
        c: "Cartoon Style Sheets",
        d: "Cascading Style Sheep",
        ans: "option1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "option4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JustScan",
        ans: "option1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const submit = document.querySelector('#submit');

const result = document.getElementById('show');
const answers = document.querySelectorAll('.input');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const questionList = quiz[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};
loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        };
    });
    return answer
};

const deSelectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quiz[0].ans){
        score++;
    };

    questionCount++;

    deSelectAll();

    if(questionCount < quiz.length){
        loadQuestion();
    }else{

        result.innerHTML = `
        <h3>Your score is ${score}/${quiz.length} 👍</h3>
        <button id="btn" onclick="location.reload()">Start Again</button>
        `;
        result.classList.remove('showarea');

    }
});