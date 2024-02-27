// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var a = 'I am a ';
var b = 'Kalvian';
var c = a + b;
console.log(a + b);

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var str='If you fail, never give up because FAIL means "First Attempt In Learning"'
console.log(str)

// Challenge 3: Store a string in a variable and display the length of the string.
 var str="Sweatha"
 console.log(str.length)
// Challenge 4: Store a string in a variable and convert it into uppercase.
var str="dharan"
console.log(str.toUpperCase())
//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var s = "I love programming"
console.log(s.replace('programming','JavaScript programming'))
// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var s="kalvium "
console.log(s.repeat(3))
//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var p="I am a Kalvian"
array=p.split(" ")
console.log(array)

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var b="Time and Tide wait for none"
console.log(b.indexOf("Ti"))

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var a="When life gives you lemons make lemonade"
var result=a.includes("lemon",20)
console.log(result)
// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var t="You must be the change you wish to see in the world."
console.log(t.slice(16,22))
console.log(t.substring(46,51))