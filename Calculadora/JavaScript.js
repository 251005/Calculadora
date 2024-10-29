/*(INICIO) var*/
    
    let sinalFora = document.querySelector(".op");
    let sinaValidador = "";
    let num1 = "";
    let num2 = "";
    let resultado = "";
    let reultadoFinal = 0;
    let caixa = document.querySelector("#result");
    let caixaAnterior = document.querySelector("#conta_anterior");
    let acumulador = "";

/*(FIM) var*/

//função ao clicar no CE
    function limpar(){
        caixa.innerHTML = "";
        acumulador = "";
        num1 = "";
        num2 = "";
        caixaAnterior.innerHTML = "";
        
    }
//função ao clicar no back
    function back(){
        let back = document.getElementById('result').innerHTML; 
        document.getElementById('result').innerHTML = back.substring(0, back.length -1);
        num2 = acumulador;
        acumulador = "";

        acumulador = back.substring(0, back.length -1);        
        num2 = back.substring(0, back.length -1);

    }
//coleta de valores e operadores por parametro
    function calculadora(n1){
        
        caixa.innerHTML +=  n1;
        num2 += String(n1); 
        if(n1 == "^"){
            n1 = "**";
        }
        if(n1 == "%"){
            
            n1 ="/100 *"
        }
        acumulador += String(n1) ;
        num1 = acumulador;   
        resultado = num2;
        console.log(acumulador);
    }

//função ao clicar no igual
    function calcular(){
        caixa.innerHTML = eval(acumulador);
        resultado = eval(acumulador);
        
        caixaAnterior.innerHTML = num2 + " = " + eval(acumulador);
        acumulador = resultado;
        num2 = resultado;
    }
        

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
