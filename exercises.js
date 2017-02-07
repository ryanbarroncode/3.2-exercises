// /**
//  *
//  */
//
// // ---------------------
// // Define a function max() that takes two numbers as arguments and returns the
// // largest of them. Use the if-then-else construct available in Javascript.
// // ---------------------
function max(num1, num2){
    "use strict";
  if(num1 > num2){
    return num1;
  } else {
   return num2;
  }
}
console.log(max(1,20))

// // ---------------------
// // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// // ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";

  if(num1 > num2){
    return num1;
  }else{
    if(num2 > num3){
      return num2;
    }else{
        return num3;
      }
  }

}
console.log(maxOfThree(3,4,1));

// // ---------------------
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // ---------------------

function isVowel(char){
    "use strict";

   var vowels = ['a', 'e', 'i', 'o', 'u'];
   for(var i = 0; i < vowels.length; i++){
     if(char === vowels[i]){
       return true;
     }
   }
  return false;
};
console.assert(isVowel('a') == true);
console.assert(isVowel('b') == false);

// // ---------------------
// // Write a function rovarspraket() that will translate a text into "rövarspråket".
// // That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// // ---------------------

function rovarspraket(phrase){// (phrase) is the variable were using in the for loop to collect each letter and decide whether or not the letter is a consonant by using the function we created in the previous function assignment.
    "use strict";
    var translate = "";//translate is a blank
    for(var i = 0; i < phrase.length; i++){// gets the index.
      if (isVowel(phrase[i]) || phrase[i] == ' '){
          // console.log(phrase[i]);
          translate = translate + phrase[i];
        }else{
          // console.log(phrase[i]);
          translate = translate + phrase[i] + 'o' + phrase[i];
        }
  }
  // console.log(translate)
  return translate;
}
console.log(rovarspraket("this is fun"));
console.assert(rovarspraket("this is fun") == "tothohisos isos fofunon");
// // ---------------------
// // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// // ---------------------
var numArray = [1,2,3,4];

function sum(array){
    "use strict";

    var summed = 0;
    for(var i = 0; i < array.length; i++){
      summed = summed + array[i];
      console.log(summed);
    }
    return summed;
    console.log(summed);
}
sum(numArray);



var numArray = [1,2,3,4];
function multiply(array){
    "use strict";

        var product = 1;
        for(var i = 0; i < array.length; i++){
          product = product * array[i];
          console.log(product);
        }
        return product;
        console.log(product);
    }
    multiply(numArray);

//
// // ---------------------
// // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// // ---------------------

function reverse(string){
    "use strict";
    var reverseString = string.split("").reverse().join("");
    return reverseString;
}
console.assert(reverse("jag testar") == "ratset gaj");
// // ---------------------
// // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// // ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var longestWordLength = 0;

  for(var i = 0; i < words.length; i++){
     console.log(words[i].length);
    if(words[i].length > longestWordLength){
      longestWordLength = words[i].length;
    }
  } return longestWordLength;

  console.log(words);
}
var wordsToCheck = ['cool', 'stuff', 'awesome', 'bro'];
findLongestWord(['cool', 'stuff', 'awesome', 'bro']);
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, size){
    "use strict";
    var newArray = [];
    console.log(words);


    for(var i = 0; i < words.length; i++){
     var word = words[i];
      if(word.length > size){
        newArray.push(word);
      }
    }
    console.log(newArray);
    return newArray;
    }

   filterLongWords(['cool', 'stuff', 'awesome', 'bro'], 4)
---------------------
Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
---------------------

function charFreq(string){
    "use strict";
    var freqList = {};
    console.log(freqList);

    for (var i = 0; i < string.length; i++) {
      var char = string.charAt(i);
      console.log(char);
      if (freqList[char]) {
         freqList[char]++
      }else{
        freqList[char] = 1;
      }
    }
    return freqList;
    }

// console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
charFreq("abbabcbdbabdbdbabababcbcbab");
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['a'] == 7);
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['b'] == 14);
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['c'] == 3);
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['d'] == 3);
