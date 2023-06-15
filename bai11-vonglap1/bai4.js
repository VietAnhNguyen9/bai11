let fib1=0;
let fib2=1;
let fibonacci=1;
while(fibonacci % 5 !== 0){
fibonacci=fib1+fib2
    fib1=fib2;
    fib2=fibonacci;
}
console.log( fibonacci)