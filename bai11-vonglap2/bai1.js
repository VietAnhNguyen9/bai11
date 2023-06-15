let fib1=0;
let fib2=1;
let fib3;
let fibonacci="0,1";
let n = parseInt(prompt('Nhập số lượng phần tử trong dãy Fibonacci'));
for (let i=3;i<=n;i++){
    fib3=fib1+fib2
    fibonacci+=","+fib3
    fib1=fib2;
    fib2=fib3;
}
document.write(fibonacci)