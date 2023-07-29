function addNumbers(a: number, b: number){
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

//const result: string = addNumbers(1, 2).toString();
//const resultArrowFunct: string = addNumbersArrow(2, 3);
//const multiplyResult = multiply(5);

//console.log({ result, resultArrowFunct, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void; //Así es como se declara un método dentro de una interface con su respectivo tipo de dato de retorno, en este caso es void.
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    },
}

const healCharacter = (character: Character, amount: number ) => {
    character.hp += amount;
}

healCharacter( strider, 10 );
strider.showHp();

export {};