const binValue = document.querySelector('main input#bin');
const resultValue = document.querySelector('main input#resultado');



function renderResult(){
 const valor=binValue.value;
 resultValue.value = parseInt(valor,2);
 
}
