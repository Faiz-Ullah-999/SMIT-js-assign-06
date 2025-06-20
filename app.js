//                                    📝 JavaScript Array Assignments
//////////////////////////////////////////////////////////////////////////////////

const a = document.querySelector("#lists");
  const arr = ["Zubair", "Ilham", "Abdullah"];
  showList();
  function pushMethod() {
    const name = prompt("Enter name to add:");
    if (name) {
      arr.push(name);
      showList();
    }
  }
  function showList() {
    if (arr.length <= 5) {
      a.innerHTML = arr.map((name, index) => `<div>${index + 1}. ${name}</div>`).join("");
    } else {
      a.innerHTML = "Too many names!";
    }
  }

// 2. Remove the last item from an array of fruits using pop().


var popArr = ["Farhan", "Darman", "Zeeshan"];
var result = document.querySelector("#result1");
result.innerHTML = popArr;
function poparray() {
  popArr.pop(result);
  result.innerHTML = popArr.length ? popArr.join(", ") : "Array is empty";
}

// 3. Add "Monday" to the beginning of a days array using unshift().

var UnshiftArray = ["Tuesday", "Wedenesday", "Thursday", "Friday"];
var result2 = document.querySelector("#result2");
result2.innerHTML = UnshiftArray;
function UnshiftArr() {
  UnshiftArray.unshift("Monday");
  result2.innerHTML = UnshiftArray.length ? UnshiftArray.join(", ") : "Array is empty";
}

// 4. Remove the first item from an array of colors using shift().

const shiftArray = ["Red", "Green", "Blue"];
const result3 = document.getElementById("result3");
result3.textContent = shiftArray.join(", ");
function shiftArr() {
  shiftArray.shift();
  result3.innerHTML = shiftArray.length ? shiftArray.join(", ") : "Array is empty";
}

// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.

const subArray = ["Urdu", "Computer"];
const result4 = document.getElementById("result4");
result4.textContent = subArray.join(", ");
function subArr() {
  subArray.splice(2, 3, "Math", "Science");
  result4.innerHTML = subArray.join(", ");
}

// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.

const spliceArray = ["Quetta", "Karachi", "Lahore", "Islamabad"];
const result5 = document.getElementById("result5");
result5.textContent = spliceArray.join(", ");
function spliceArr() {
  spliceArray.splice(1, 2);
  result5.innerHTML = spliceArray.join(", ");
}

// 7. Use slice() to get the first 3 items from a countries array.

var sliceArray = ["Pakistan", "Afghanistan", "Iran", "China"];
var result6 = document.querySelector("#result6");
var CloneArr = sliceArray.slice(0, 3);
result6.innerHTML = `<strong>Original Array:</strong><br>${sliceArray}`;

function sliceArr() {
  CloneArr = sliceArray.slice(0, 3);
  result6.innerHTML = `
    <strong>Original Array:</strong> <br> ${sliceArray} <br>
    <strong>Cloned Array <br> </strong> ${CloneArr}
  `;
}

// 8. Convert the string "apple,banana,mango" into an array using split().

var splitSTR = "Apple,Banana,Mango";
var updatedSTR = splitSTR.split(",");
var result7 = document.querySelector('#result7');
result7.innerHTML = `<strong>Old Array Str</strong> <br>${splitSTR}`;
function splitArr() {
  result7.innerHTML = `<strong>Old Array Str</strong> <br>${splitSTR}<br> <strong>updated Split Str</strong> <br> ${updatedSTR}`;
}

// 9. Join an array of characters ['J','S'] into a single string using join().

var result8 = document.getElementById('result8')
const characters = ['JAVASCRIPT'];
const joinedString = characters.join('');
result8.innerHTML = joinedString;
function joinArr() {
  var splitjs = characters[0].split("");
  result8.innerHTML = splitjs;
}

// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().

var ArrOne = ["Pen", "Pencil"];
var ArrTwo = ["Eraser", "Sharpener"];
var result9 = document.querySelector("#result9");
result9.innerHTML = `<strong>Array One </strong>:- ${ArrOne} <br> <strong> Array Two </strong>:- ${ArrTwo}`;
var concating = ArrOne.concat(ArrTwo).join(", ");

function arrayConcat() {
  result9.innerHTML = `<strong>Concatinated Array:- </strong> ${concating}`;
}

// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).

const sortArray = [10, 7, 3, 9, 1, 6, 5, 4];
const result10 = document.getElementById("result10");
result10.innerHTML = `<strong>Random Array</strong>:- ${sortArray}`;

function SortArray() {
  var sorted = sortArray.slice().sort(function (a, b) { return a - b; });
  result10.innerHTML = "<strong>Sorted Array</strong>: " + sorted;
}



// 12. Sort an array of names alphabetically using sort().

var nameString = ["mahlI hallU ziaF"];
var result11 = document.querySelector("#result11");
result11.innerHTML = nameString.join(" ");

function SortNames() {
  // Manually reorder and fix names
  var corrected = ["ziaF  hallU mahlI"];

  // Convert to lowercase and join
  var finalNames = corrected.map(name => name.toLowerCase()).join(" ");

  console.log(finalNames);
  result11.innerHTML = finalNames;
}



// 13. Reverse the order of an array of numbers using reverse().
const numbersArray = [10, 20, 30, 40, 50];

function ReverseArray() {
  const reversed = numbersArray.slice().reverse(); // Non-destructive
  document.getElementById("result13").innerHTML = reversed.join(", ");
}



// 14. Use indexOf() to find the index of "Blue" in a colors array.

const colorsArray = ["Red", "Green", "Blue", "Yellow"];

function FindBlueIndex() {
  const index = colorsArray.indexOf("Blue");
  document.getElementById("result14").innerHTML = `"Blue" is at index: ${index}`;
}


// Task 15: Add three new items using push()
let emptyArr = [];
function AddItems() {
  emptyArr.push("Item1", "Item2", "Item3");
  document.getElementById("result15").innerHTML = emptyArr.join(", ");
}

// Task 16: Remove middle item from array of 5 numbers
let numbers16 = [1, 2, 3, 4, 5];
function RemoveMiddleItem() {
  let midIndex = Math.floor(numbers16.length / 2);
  numbers16.splice(midIndex, 1);
  document.getElementById("result16").innerHTML = numbers16.join(", ");
}

// Task 17: Convert string to array using split()
function ConvertStringToArray() {
  let str = "HTML CSS JavaScript";
  let arr = str.split(" ");
  document.getElementById("result17").innerHTML = JSON.stringify(arr);
}

// Task 18: Reverse array and join with "-"
function ReverseAndJoin() {
  let arr = ['a', 'b', 'c'];
  let result = arr.reverse().join("-");
  document.getElementById("result18").innerHTML = result;
}

// Task 19: Find "Karachi" index
let cities = ["Lahore", "Islamabad", "Karachi", "Quetta"];
function FindKarachi() {
  let index = cities.indexOf("Karachi");
  let result = index !== -1 ? `"Karachi" found at index: ${index}` : `"Karachi" not found.`;
  document.getElementById("result19").innerHTML = result;
}

// Task 20: Concat and reverse arrays
function ConcatAndReverse() {
  let evens = [2, 4, 6];
  let odds = [1, 3, 5];
  let combined = evens.concat(odds).reverse();
  document.getElementById("result20").innerHTML = combined.join(", ");
}


