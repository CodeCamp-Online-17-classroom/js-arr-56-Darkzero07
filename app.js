// จงหา unique array element ของ alphabets

let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const unique = [...new Set(alphabets)];
console.log(unique);
// expected result: ['a', 'b', 'c', 'e', 'd']
