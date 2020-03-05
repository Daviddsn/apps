const binValue = document.querySelector('main input#bin');
const resultValue = document.querySelector('main input#resultado');

function resolve (){
    if(binValue.value.match(/^[0-1]+$/g) === null){
        document.querySelector('label').style.display ="inline";
        resultValue.value="";        
    }else{
        document.querySelector('label').style.display ="none";
        const valor=binValue.value;
        resultValue.value = parseInt(valor,2);
       }
    };


