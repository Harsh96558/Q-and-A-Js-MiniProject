const Questions=document.querySelectorAll('.question')

Questions.forEach((question)=>{
  const Btn=  question.querySelector('.question-btn')
    Btn.addEventListener('click',()=>{
        question.classList.toggle('show-text')
    })
})
 