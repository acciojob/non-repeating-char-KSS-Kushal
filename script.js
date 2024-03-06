function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i = 0; i < str.length; i++) {
      let j = str.charAt(i)
      if (str.indexOf(j) == str.lastIndexOf(j)) {
        return j;
      }
   }
   return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
