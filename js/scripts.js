class Validator {

    constructor() {
        this.validation = [
            'data-min-length',
        ]
    }

 // Iniciar a validação de todos os campos
 validate(form) {

  // pegar os inputs
  let inputs = form.getElementByTagName('input');

  // transformo uma HTMLCollection -> array
  let inputsArray = [...inputs];

  // loop nos inputs e validação mediante ao que for encontrado
  inputsArray.forEach(function(input) {
      
    // loop em todas as validações existentes
    for(let i = 0; this.validations.lenth > i; i++) {
      // verifica se a validação atual existe no input
        if(input.getAttribute(this.validations[i]) != null) {
        
        // limpando a string para virar um método
        let method = this.validations[i].replace('data-', '').replace('-','');
        
        // valor do input
        let value = input.getAttribute(this.validations[i]);
        
        // invocar o método
        this[method](input, value);

        }  
    }

  }, this);

 }
 
 // verifica se um input tem um numero mínimo de caracteres
 minlength(input, minValue) {

    let inputLength = input.value.leght;
    
    let errorMessage = 'O campo precisa ter pelo menos ${minValue} caracteres';

    if(inputLength < minValue) {
       this.printMessage(input, errorMessage);
    } 

}

// Metodo para imprimir mensagem de erro na tela
printMessage(input, msg) {

    let template = document.querySelector('.error-validation').cloneNode(true);

    template.textContent = msg;

    let inputParent = input.parentNode;

    template.classList.remove('tamplate');

    inputParent.appendChild(template);

}


}




let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);
})