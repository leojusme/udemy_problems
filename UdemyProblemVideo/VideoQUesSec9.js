//Instructions are insert true and false keys from question map in the prompt

//Populating a Map without using SET METHOD
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number")
    console.log(`Answer 
  ${key}: ${value}`);
}

//My answer to Challenge of putting keys true and false in prompt answer
const answer = Number(prompt("Your answer"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(true);
  if (typeof key !== "number") console.log(false);
}
console.log(answer);

//Udemy answer / this is way more simple
console.log(question.get(question.get("correct") === answer));
