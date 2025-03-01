// Reverse String Problem Solve
function reverse(str: string) {
  // How to solve this.
  let reversedString: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverse('StefA'));
