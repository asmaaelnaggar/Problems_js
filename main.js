// Problems js 
// problem 1
function addCommasAndUnderscore(num) {
    let result = num.toLocaleString();
    result = result.split("");
    result[result.length - 4] = "_";
    result = result.join("");
    return result;
}

console.log(addCommasAndUnderscore(120)); // 120
console.log(addCommasAndUnderscore(1530)); // 1_530
console.log(addCommasAndUnderscore(120510650)); // 120,510_650
console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032

console.log("#".repeat(100));

// problem 2
function removeChar(string ,char){
    let  result = string.split("");
    let fin="";
    result.forEach(element => {
        if(element != (char.toLowerCase()) && element != char.toUpperCase()){
            fin+=element;
        }
    });
    return fin;
}

console.log(removeChar("ElddzeroD WebDD ddSchool", "d"));//Elzero Web School
console.log(removeChar("ElxzeroX Web Sxchool", "x"));//Elzero Web School
console.log(removeChar("Elzero@ Web@@ @@School", "@"));//Elzero Web School

console.log("#".repeat(100));

// problem 3
