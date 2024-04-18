const resultBox = document.getElementById('result-box');

function input(output){
    resultBox.value += output;
}

function solution(){
    try{
        resultBox.value = eval(resultBox.value);
    }
    catch(err){
        alert('Invalid');
    }
}

document.getElementById('clear-btn').addEventListener('click', function(){
    resultBox.value = "";
})

function del(){
    resultBox.value = resultBox.value.slice(0, -1);
}
