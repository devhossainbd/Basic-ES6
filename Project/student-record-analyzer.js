/* Part A mark 10
📌 Step-by-Step Instruction:
js
Copy
Edit
// Step 1: একটা student object তৈরি করো নিচের মতো করে
const student = {
  name: "Hossain",
  age: 21,
  subjects: ["Math", "English", "Physics"],
  scores: {
    Math: 85,
    English: 78,
    Physics: 92
  },
  isPassed: true
};
🔨 তোমার করণীয় Tasks:
Destructuring:

name, age, subjects destructure করে দেখাও।

Arrow Function:

একটা arrow function বানাও getTotalScore নামে, যেটা scores object থেকে সব subject এর যোগফল রিটার্ন করবে।

Spread Operator:

student object কপি করো, এবং নতুন একটা skill যোগ করো যেমন JavaScript।

Loop (for...in, for...of):

subjects গুলা loop করে দেখাও।

scores object এর key-value গুলো loop করে দেখাও।

keys(), values(), entries():

scores object এর keys, values, এবং entries আলাদা করে দেখাও।

Seal & Freeze:

student object টি seal এবং freeze করে পরীক্ষা করো যে প্রপার্টি মুছা বা আপডেট করা যায় কিনা।


*/


// Project Name: Student Record Analyzer

const student = {
    namee: "Hossain",
    age: 21,
    subject: ["Math", "English", "Physics", "Chemistry"],
    scores: {
        Math: 85,
        English: 78,
        Physics: 92,
        Cehmistry: 87
    },
    isPassed: true
};

// Destructure
const {namee, age, subject, scores} = student;

// Arrow Function
const totalResult = () => {

}


// Spread Oparator
const obj = {
    subjecte: [...subject,"Javascript"]
}
// console.log(obj)


// Loop (for..in)

for (let key in student){
    // console.log(`subject: ${subject}`)
}

for (let key in student){
    // console.log(`key: ${key} value:${student[scores]}`)
}
// This is try but not work 



// key, value, entries

console.log(Object.keys(student))
// traying but not working

// Seal and Freeze

Object.seal(student)
student.country = "Not define";

// console.log(Object.keys(student))

student.namee = "Rafiq"
Object.freeze(student)
console.log(Object.values(student))


/* Par B question mark 10
✅ তোমার জন্য ৫টি Interview-Level প্রশ্ন ❓
let, const, আর var এর মধ্যে পার্থক্য কী? কোনটা কখন ব্যবহার করা উচিত?

Arrow function এর context (this) কিভাবে কাজ করে?

Spread operator আর destructuring এর মধ্যে সম্পর্ক ও পার্থক্য কী?

Object.freeze() আর Object.seal() এর মধ্যে পার্থক্য কী?

তুমি যদি একটা object এর প্রতিটা key-value pair দেখতে চাও, তুমি কোন loop বা মেথড ব্যবহার করবে?


*/