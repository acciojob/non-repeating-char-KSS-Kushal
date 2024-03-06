function firstNonRepeatedChar(str) {
 // Write your code here
	if ((str.length===2 && str[0]!==str[1])|| str.length===1) {
		return str[0];
	}else if (str.length===0 || (str.length===2 && str[0]===str[1])) {
		return null;
	}
	let i=0;
	let j = 1;
	let k = 2;
	while (k<str.length) {
		if (str[i]!==str[j] && str[j]!==str[k]) {
			return str[j];
		}
		i++;
		j++;
		k++;
	}
	if (str[str.length-2]!==str[str.length-1]) {
		return str[str.length-1];
	}else{
		return null;
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
