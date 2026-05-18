class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    geet(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
        
    }
}


const user1 = new Person("Ram", 25);

const user2 = new Person("Mohan", 88);

user1.geet();

user2.geet();