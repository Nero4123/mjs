const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers =[form.q1.value,form.q2.value,form.q3.value,form.q4.value,];

  userAnswers.forEach((answer,index) => {
    if(answer === correctAnswers[index])
    score +=25;
  }

);

scrollTo(0,0);
//scrollTo(x coord, y coord); scrolls you to specified coords.


result.classList.remove('d-none');

let output=0;
const timer = setInterval(() => {
  result.querySelector('span').textContent = `${output}%`;
  if(output === score){
    clearInterval(timer);
  } else {
    output++;
  }
}, 10);

});








//setTimeout(() => {

  //alert('hello ninjas');
//}, 3000);

//executes the alert code after 3000 milliseconds. This method works
//by setting a time like above to execute code within a cb f'n.



//let i=0;
//const timer = setInterval(()=>{
//i++;
//if (i === 5){
 // clearInterval(timer);
  //stops an interval specified within a const/var
//}

//}, 1000);
//executes the bracketed code similar to how setTimeout does, 
//but does so infinitely according to the time set
