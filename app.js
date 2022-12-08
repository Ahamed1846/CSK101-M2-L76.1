// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var kalvian_1 = 'Ahamed';
console.log(kalvian_1);
var kalvian_2 = 'Rida';
console.log(kalvian_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (kalvian_1.length > kalvian_2.length) {
  console.log(
    'The driver has the longest name, it has',
    kalvian_1.length,
    'characters'
  );
} else if (kalvian_1.length > kalvian_2.length) {
  console.log(
    'The navigator has the longest name, it has',
    kalvian_2.length,
    'characters'
  );
} else {
  console.log('Both have equally long name', kalvian_1.length, 'characters');
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
function checkVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var letter = [];
  var index = [];
  for (i = 0; i < string.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        letter.push(string[i]);
        index.push(i);
      }
    }
  }
  if (letter == []) {
    console.log('no vowels');
  } else {
    var letters = '';
    var indices = '';
    for (k = 0; k < letter.length; k++) {
      letters += ' ' + letter[k];
      indices += ' ' + index[k];
    }
  }
  console.log(string, letters, indices);
}
checkVowels(kalvian_1);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function checkForUpperCase(string) {
  var upper = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      upper += 1;
    }
  }
  console.log(upper);
}
function checkForLowerCase(string) {
  var lower = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == string[i].toLowerCase()) {
      lower += 1;
    }
  }
  console.log(lower);
}
checkForUpperCase(kalvian_1);
checkForLowerCase(kalvian_2);
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
function nameWithSpace(string) {
  ans = '';
  for (i = 0; i < string.length; i++) {
    ans += string[i] + ' ';
  }
  console.log(ans);
}
nameWithSpace(kalvian_1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
function reverseName(string) {
  ans = '';
  for (i = string.length - 1; i >= 0; i--) {
    ans += string[i];
  }
  console.log(ans);
}
reverseName(kalvian_2);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
let mergedName = kalvian_1 + ' ' + kalvian_2;
let reversedName = kalvian_2 + ' ' + kalvian_1;
console.log(mergedName, reversedName);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
lexicographicOrderList = [kalvian_1, kalvian_2];
lexicographicOrderList.sort();
if (lexicographicOrderList[0] == lexicographicOrderList[1]) {
  console.log('What?! You both have the same name?');
} else if (lexicographicOrderList[0] == kalvian_1) {
  console.log("The driver's name goes first");
} else {
  console.log('Yo, the navigator goes first definity');
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

function wordCounter() {
  var word = [];
  var etCount = 0;
  const string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra pretium dapibus. Fusce nulla dolor, ornare blandit purus sed, accumsan mattis sem. Quisques uscipit urna a vestibulum rutrum. In nec finibus nibh, viverra fringilla nunc. Aenean lobortis fermentum eros vel dictum. Praesent sit amet tellus sodales, vehicula justo id, euismod purus. Aliquam at tortor arcu. Suspendisse neque tortor, fermentum eu ullamcorper a, vehicula et leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus ullamcorper lobortis. Etiam lacus tortor, venenatis a hendrerit ac, venenatis a erat. Fusce velit nibh, fringilla eu scelerisque vitae, interdum et nibh. Phasellus vehicula purus libero, id dictum quam iaculis vitae. Maecenas quis metus bibendum,  commodo tortor eget, placerat urna. Sed facilisis tincidunt diam ac mollis. Donec suscipit  malesuada massa sit amet blandit. Phasellus in consequat nibh. Vivamus vestibulum dolor metus,  id molestie odio porttitor quis. Mauris tempus tempus gravida. Aenean consequat blandit odio, eu eleifend dolor hendrerit nec. Aliquam volutpat tortor in eros porta, consequat facilisis ipsum lacinia. Vestibulum facilisis tempus ligula id sodales. Donec at libero magna. Donec egestas lacus tellus, vitae suscipit felis tristique eget. Praesent ex erat, imperdiet a molestie facilisis, laoreet a ipsum. Vestibulum et metus a turpis fringilla egestas quis vitae leo. Maecenas tempus eu nunc sed pellentesque. Suspendisse ultricies metus eget porta pharetra. Donec interdum dapibus dolor, vitae tempor magna maximus id. Nullam ut erat at odio accumsan molestie non non dolor. Integer in vehicula ipsum, ornare efficitur nibh. Praesent in gravida velit. Aliquam vitae nisi dictum justo sollicitudin suscipit quis condimentum arcu. Vivamus ac ex sollicitudin tortor eleifend dignissim. Maecenas ultrices arcu augue, quis cursus nisi aliquam quis. Nunc egestas nibh augue, id sollicitudin quam tincidunt in.';
  word = string.split(' ');
  console.log(word.length);
  for (i = 0; i < string.length; i++) {
    if (word[i] == 'et') {
      etCount += 1;
    }
  }
  console.log(etCount);
}
wordCounter();
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
phraseToCheck = 'CIVIC';
reversePhrase = '';
for (i = phraseToCheck.length - 1; i >= 0; i--) {
  reversePhrase += phraseToCheck[i];
}
if (phraseToCheck == reversePhrase) {
  console.log("Yes, it's a palindrome");
}
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
