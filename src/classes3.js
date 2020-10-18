//animal class should have 2 properties when instanciating
//name
//energy
//3 methods: eat, sleep, play

class Animal {
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    };
    eat(amount){
        console.log(`${this.name} is eating.`)
        this.energy = this.energy + amount;
    };
    sleep(length){
        console.log(`${this.name} is sleeping.`)
        this.energy = this.energy + length
    };
    play(length){
        console.log(`${this.name} is playing!`)
        this.energy = this.energy - length
    }
    displayInfo(){
        console.log(`${this.name} has ${this.energy} points of energy.`)       
};
}
/*
let animals = [];
for(let i = 0; i<10; i++){
    animals.push(new Animal('John', 100));
}
*/

let koala = new Animal('John', 100);
let guineapig = new Animal('Rute', 100);
koala.play(25);
koala.displayInfo();


//

class Dog extends Animal {
    constructor(name, energy, breed){
        super(name, energy); //relates to parent constructor
        this.breed = breed //only in this class
    }
    bark(){
        console.log('Woof woof');
        this.energy -= 1;
    }
}

let dog1 = new Dog('turbo', 100, 'german sheppard');
dog1.bark();