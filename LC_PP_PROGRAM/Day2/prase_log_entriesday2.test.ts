import { describe, expect, test } from '@jest/globals';
import { parse } from './parse_log_entriesday2';

describe('parse function', () => {
  test('counts Server Failure errors correctly', () => {
    // Sample data
    const sampleLogs: string[] = [
      '2025-03-02 10:15:23 ERROR 500: Server Failure', // Should count (1)
      '2025-03-02 10:16:45 INFO User Login Successful', // No ERROR, no count
      '2025-03-02 10:17:01 ERROR 404: Resource Not Found', // ERROR, but no Server Failure
      '2025-03-02 10:18:12 ERROR 500: Server Failure', // Should count (2)
      '2025-03-02 10:19:34 ERROR: Oops', // ERROR, but no Server Failure
    ];

    // Run the function
    const result: number = parse(sampleLogs);

    // Check the result
    expect(result).toBe(2);
  });
});
