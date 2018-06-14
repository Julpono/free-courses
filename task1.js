/* Task 1 */
var stringForCheck = process.argv[2];
stringForCheck = stringForCheck.toLowerCase().replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s/g, '');
var strLength = stringForCheck.length;
if (strLength >=1 && strLength <=10000) {
    process.stdout.write(isPalindrome(stringForCheck) ? 'YES' : 'NO');
}

function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join('');
    return strReverse == str;
}
/* Put your code here */
