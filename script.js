const btnOne = document.querySelector('.question-btn-one');
const btnTwo = document.querySelector('.question-btn-two');
const btnThree = document.querySelector('.question-btn-three');
const btnFour = document.querySelector('.question-btn-four');
const btnFive = document.querySelector('.question-btn-five')

btnOne.addEventListener("click", function(){
    const showTextOne = document.querySelector('.reply-text-one')
    showTextOne.classList.toggle('show-text')
    const showArrow = document.querySelector('.arrow-up-one')
    showArrow.classList.toggle('show-btn')
    const questionTextOne = document.querySelector('.question-one')
    questionTextOne.classList.toggle('bold-question')
})


btnTwo.addEventListener("click", function(){
    const showTextTwo = document.querySelector('.reply-text-two')
    showTextTwo.classList.toggle('show-text')
    const showArrowTwo = document.querySelector('.arrow-up-two')
    showArrowTwo.classList.toggle('show-btn')
    const questionTextTwo = document.querySelector('.question-two')
    questionTextTwo.classList.toggle('bold-question')
})

btnThree.addEventListener("click", function(){
    const showTextThree = document.querySelector('.reply-text-three')
    showTextThree.classList.toggle('show-text')
    const showArrowThree = document.querySelector('.arrow-up-three')
    showArrowThree.classList.toggle('show-btn')
    const questionTextThree = document.querySelector('.question-three')
    questionTextThree.classList.toggle('bold-question')
})

btnFour.addEventListener("click", function(){
    const showTextFour = document.querySelector('.reply-text-four')
    showTextFour.classList.toggle('show-text')
    const showArrowFour = document.querySelector('.arrow-up-four')
    showArrowFour.classList.toggle('show-btn')
    const questionTextFour = document.querySelector('.question-four')
    questionTextFour.classList.toggle('bold-question')
})

btnFive.addEventListener("click", function(){
    const showTextFive = document.querySelector('.reply-text-five')
    showTextFive.classList.toggle('show-text')
    const showArrowFive = document.querySelector('.arrow-up-five')
    showArrowFive.classList.toggle('show-btn')
    const questionTextFive = document.querySelector('.question-five')
    questionTextFive.classList.toggle('bold-question')
})