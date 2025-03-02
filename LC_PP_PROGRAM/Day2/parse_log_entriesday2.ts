// Objective
// Count how many times each unique error code appears in the logs.
// Return the results in a format thats easy to understand.
// Expected Output:

// 404: 2
// 500: 2

// So what I need to do is first, check if ERROR exists as a word in the log.
// If ERROR exists in this. look for
const abc: string[] = [
  '2025-03-02 10:15:23 ERROR 500: Server Failure',
  '2025-03-02 10:16:45 INFO User Login Successful',
  '2025-03-02 10:17:01 ERROR 404: Resource Not Found',
  '2025-03-02 10:18:12 ERROR 500: Server Failure',
  '2025-03-02 10:19:34 ERROR 404: Resource Not Found',
];

export function parse(logs: string[]) {
  let count: number = 0;
  const findError = logs.filter((val) => val.includes('ERROR'));
  for (let i = 0; i < findError.length; i++) {
    if (findError[i].includes('Server Failure')) {
      count++;
    }
  }
  return count;
}

console.log(parse(abc));
