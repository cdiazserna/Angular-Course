//Forma de declarar un array de tipo string[]
let skills: string[] = ['Bash', 'Counter', 'Healing'];

//Una interface no tiene representación en JS
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
};

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Medallo';

console.table(strider);

export {};