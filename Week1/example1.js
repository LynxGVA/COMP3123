console.log("Hello World");
console.log("This is an example JavaScript file")
a = 10
var x = 10;
x = "Hello";
console.log(x);
let y = 200;
// let y = 300;
console.log(y)
{
let y = 20;
x = 300;
y = 30;
console.log(y);  
}

console.log(typeof 100);
console.log(typeof null);
console.log(typeof {});
console.log(typeof function(){});


function add(a,b) {
    return a + b;
}

console.log(add(5,10));
console.log(typeof add);


add = function(a,b){
    return a * b;
}

add = (a,b) => {
    return a * b;
}

add = (a,b) =>{

}

add = (a,b) =>{
    a * b;
}

add = (a,b) => a * b;
x = a => a + 1
y = () => 100

function Student(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
}

console.log(Student);
Student.prototype.study = function(subject) {
    console.log(`${this.name} is studying ${subject}`)
}

console.log(typeof Student);
var s1 = new Student("Alice", 20)

employee = {
    name:"Bob",
    age:30,
    "city": "New York",
    100: "This is a number key",
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
}

console.log(typeof employee);
employee.greet();
console.log(employee[`age`])
console.log(employee[`city name`])
console.log(employee[100])