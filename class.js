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

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const names = [
    "Rahul",
    "Aman",
    "Priya",
    "Neha",
    "Karan",
    "Riya",
    "isha",
    "Shnya",
    "sofia",
    "Siya",
    "Radhika",
    "Jyoti",
    "Jarin",
    "jaya",
    "Hema",
    "Rekha",
    "Tanshika",
    "Tanya",
    "Komal",
    "Rahul"
];

const students = [];

for (let i = 0; i<names.length;i++){
    let student = new Student(names[i],18+i);
    students.push(student);
}
console.log(students);

