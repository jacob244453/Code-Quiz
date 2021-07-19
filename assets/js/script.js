
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


//when start button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

//when exit button is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

//when continue button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    startTimer(10)

}

let que_count = 0;
let counter;

const next_btn = quiz_box.querySelector(".next_btn")

//when next button is clicked
next_btn.onclick = ()=>{
   if(que_count < questions.length - 1){
       que_count++;
       showQuestions(que_count)
   }
   else{
       window.alert("Quiz completed")
   }

}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                        +'<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                        +'<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                        +'<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".optiion")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)"); 
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    console.log(userAns);
}

function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer(){
        timeCount.textContent = time;
        time--;
    }
}

