let myName = "vishii     "
let myChannel = "chai    "

// console.log(myName.trueLength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vishii = function(){
    console.log(`vishii is present in all objects`);
}

Array.prototype.heyNonuu = function(){
    console.log('Nonuu says hello');
}

// heroPower.vishii()
myHero.vishii();
myHero.heyNonuu();
// heroPower.heyNonuu();

// inheritance
const User = {
    name: "Nonu",
    email: "nonu@mine.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(Teacher.email);

let anotherUsername = "myNonu   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length of ${anotherUsername} is: ${this.trim().length}`)
}

anotherUsername.trueLength();
