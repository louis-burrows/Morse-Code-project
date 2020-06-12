const input = document.getElementById("inputbox");
console.log(input);
const convert = document.getElementById("convert");
const output = document.getElementById("output");
console.log(output);

const moveText = () => {
  let arrayOfInput = (input.value).split("");
  console.log(arrayOfInput);

  let converted = arrayOfInput.map(letters => {
    console.log(letters);
    if (arrayOfInput[letters] == "A" || "a") {
      console.log("the letter AaAAAA")
    }
  });


  console.log(converted);
  
};

convert.addEventListener("click", moveText);






// a A - .-
// b B - -...
// c C - -.-.  
// d D - -..
// e E - .
// f F - ..-.
// g G - --.
// h H - ....
// i I - ..
// j J - .---
// k K - -.-
// l L - .-..
// m M - --
// n N - -.
// o O - ---
// p P - .--.
// q Q - --.-
// r R - .-.
// s S - ...
// t T - -
// u U - ..-
// v V - ...-
// w W - .--
// x X - -..-
// y Y - -.--
// z Z - --..
// space space