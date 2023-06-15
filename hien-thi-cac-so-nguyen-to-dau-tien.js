let numbers=2;
let count= 0;
let snt = ""
let flag = true;
while (count<20){
    flag = true;
    // kiểm tra number có phải là số nguyên tố không
    for (let i=2;i<=numbers-1;i++){
        if(numbers % i ===0){
            flag = false;
            break;
        }
    }
    if (flag){
        snt += numbers +", "
        count++
    }
    // tănhg trưởng number++
    numbers++;
}
document.write(snt)
