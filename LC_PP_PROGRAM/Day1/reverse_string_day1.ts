export function reverse(str: string) {
  let reversedString: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverse('StefA')); // Outputs: "AfetS"
