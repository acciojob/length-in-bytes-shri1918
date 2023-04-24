const byteSize = (str) => {
  // write your code here
	const utf8Bytes = new TextEncoder().encode(str);
  // Return the length of the array (i.e., the size of the string in bytes)
  return utf8Bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
