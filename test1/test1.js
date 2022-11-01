function callMyName(name) {
  return "Hallo, " + name;
}

console.log(callMyName("Arnold"));

const shoutName = (name) => {
  console.log(name.toUpperCase());
};

shoutName("arnold");

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 6));
console.log(addTwoNumbers(10, 5));

const whisperName = function (name) {
  return name.toLowerCase();
};

console.log(whisperName("ARNOLD"));
