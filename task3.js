/* Task 3 */
var str = process.argv[2];
var length = str.length;
if (length >=1 && length <=10000) {
    console.log(splitString(str));
}

function splitString(str) {
    var result = [];
    var str_without_numbers = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,'');

    result[0] = str_without_numbers.replace(/[^aAeEiIoOuUyYаАуУоОыЫиИэЭяЯюЮёЁеЕ]/ig, '');
    result[1] = str_without_numbers.replace(/[aAeEiIoOuUyYаАуУоОыЫиИэЭяЯюЮёЁеЕ]/ig, '');
    result[2] = parseInt(str.replace(/\D+/g,""));
    if (isNaN(result[2])) {
        result[2] = '';
    }
    return result.join(' ');
}
/* Put your code here */