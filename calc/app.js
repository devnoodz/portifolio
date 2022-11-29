function resultado (valor){
  form.display.value = form.display.value + valor;
  //document.getElementById('display').value = valor;
}
function calcular(){
  if (form.display.value === ""){
    alert ('por favor digite um numero ou mais para acontecer a conta')
  }else{
    form.display.value = eval(form.display.value)
  }
}

function limpar(){
  form.display.value=""
}

form.equal.addEventListener('dblclick', limpar)

/*
document.addEventListener('keydown', function(evento){
  if(evento.keyCode == 13){
    calcular()
  }

  if(!isNaN(evento.key)){
    form.display.value = form.display.value + evento.key
  }



})
*/
