// Foi criado uma classe onde é informado nome, idade e level de dois gameplayers profissionais,
//quando é executado, mostra nome, nickname, idade e level de cada jogador

class UserAccount {
    name: String;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    } 
 } 
 class CharAccount extends UserAccount {
    nickname: string;
    level: number;

     constructor(name: string, age: number, nickname: string, level: number) {
         super(name, age);

         this.nickname = nickname;
         this.level = level;
    }

    get getLevel() {
        console.log("*****Get*****");
    return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`The Player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }
 }

const joao = new CharAccount("joao", 25,"jo", 80);
console.log(joao);
console.log(joao.level);
joao.logDetails();
joao.logCharDetails();

const jose = new CharAccount("José", 30,"Zé", 68);
console.log(jose);
console.log(jose.level);
jose.logDetails();
jose.logCharDetails();

