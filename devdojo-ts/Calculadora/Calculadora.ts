import { question } from "readline-sync";
// Aceitar a entrada de comando no console

type Operador = '+' | '-' | '*' | '/';


function main(): void
{
    const primeiraStr:string = question('Digite o primeiro numero:\n');
    const operador: string = question('Digite o operador:\n');
    const segundaStr: string = question('Digite o segundo numero\n');
    
    
    const validInput:boolean = isNumber(primeiraStr) && isOperador(operador) && isNumber(segundaStr);
    // Verifica se tudo e valido em uma unica instrução

    if (validInput)
    {
        const primeiroNum: number = parseInt(primeiraStr);
        const segundoNum: number = parseInt(segundaStr);
        const resultado = calculate(primeiroNum, operador as Operador, segundoNum);
        console.log(resultado);
        //converte seu primeiro argumento para uma string e resultado mostra resultado
    }
    else
    {
        console.log('\nInformacao invalida\n');
        main()
    }  
}

function calculate(primeiroNum: number, operador: Operador, segundoNum: number)
// Realiza o calculo de primeiro numero com o operador e segundo numero
{

    switch(operador)
    {
        case '+':
            return primeiroNum + segundoNum;
        case '-':
            return primeiroNum - segundoNum;
        case '*':
            return primeiroNum * segundoNum;
        case '/':
            return primeiroNum / segundoNum;
    }
}

function isOperador(operador: string): boolean
// recebe tipo de operador
{
    
    switch(operador)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;    
    }
}

function isNumber(str: string): boolean
// verificação se é numero e convert para uma string
{
    const podeSerNum = parseInt(str);
    const isNum: boolean = !isNaN(podeSerNum);
    return isNum;
}

main();