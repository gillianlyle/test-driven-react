// Write a program that prints the numbers from 1 to 100. 
// But for multiples of 3 print 'Fizz' instead of the number 
// and for the multiples of 5 print 'Buzz'. For numbers 
// which are multiples of both 3 and 5 print 'FizzBuzz'.

module.exports = (num) => {
    if (num % 15 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz'
    return `${num}`
};
