//Exercise 1
function LeapYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        return "Yes, " + year + " is a leap year.";
      } else {
        return "No, " + year + " is not a leap year.";
    }
      
}
const year = 2024;
const result = LeapYear(year);
console.log(result);

//Exercise 2
function findSunday(startYear, endYear) {
    let Years = [];
    for (let year = startYear; year <= endYear; year++) {
      const date = new Date(year, 0, 1);
      if (date.getDay() === 0) {
        Years.push(year);
      }
    }
    return Years;
  }
  
  const sundayYears = findSunday(2014, 2050);
  
  console.log("Years when January one is a Sunday:");
  console.log(sundayYears);

  //Exercise 3
  for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is an even number");
    } else {
      console.log(i + " is an odd number");
    }
  }

  //Exercise 4
  function check_palindrome(word){
    let i = 0
    let j = word.length -1

    while (i<word.length && j>-1){
        if (word[i]!=word[j]){
            return console.log('It is not palindrome')

        }
        i++;
        j--;
    }

    return console.log('It is a palindrome')
  }