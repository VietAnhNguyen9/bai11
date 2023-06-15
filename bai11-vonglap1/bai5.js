let fib1=0;
let fib2=1;
let fibonacci=0;
let sum= fib1+fib2;
for(i=0;i<18;i++){
    fibonacci=fib1+fib2;
    fib1=fib2;
    fib2=fibonacci;
    sum +=fibonacci;
}
console.log(sum);