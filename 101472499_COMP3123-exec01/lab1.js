//Task 1
function upperCase(str) {
  if (!str) return str;
  return str
    .split(' ')                                   
    .map(word => {
      if (word.length === 0) return word;         
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}


console.log(upperCase("the quick brown fox")); 

//Task 2
function maxNumber(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maxNumber(1000, 510, 440)); 

//Task 3
function toTheRight(str) {
  if (!str) return str;
  if (str.length < 3) return str;
  const lastThree = str.slice(-3);
  const rest = str.slice(0, -3);
  return lastThree + rest;
}

console.log(toTheRight("Python"));

//Task 4
function angle_Type(angle) {
  if (typeof angle !== 'number' || isNaN(angle)) return "Invalid input";
  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Invalid angle";
}

console.log(angle_Type(47));  
console.log(angle_Type(90));  
console.log(angle_Type(145)); 
console.log(angle_Type(180));