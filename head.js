const assertEqual = require ('./assertEqual');

const head = (arr) => {
  return arr[0];
}

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Goodbye"));