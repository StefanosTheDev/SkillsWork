function greet(name: string, callback: () => void): void {
  console.log('Hello', name);
  callback();
}

function sayGoodBye(): void {
  console.log('Goodbye!');
}

greet('Alice', sayGoodBye);


// CALLBACKSZ Functions!