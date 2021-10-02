const createPalindrom = (text) => {
	const parseTextToArray = [...text];
	const reverseArr = parseTextToArray.reverse().join("");
	return reverseArr === text ? "palindrom" : "bukan palindrom";
};

console.log(createPalindrom("kakak"));
