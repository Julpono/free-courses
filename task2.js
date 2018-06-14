/* Task 2 */

var n = process.argv[2];
if (n >=-10000 && n <=10000) {
    console.log(fib(n));
}

function fib(n) {
    if (n <= 0) {
        return 0;
    }
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
/* Put your code here */
