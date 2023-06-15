let n = parseInt(prompt('Nhập số cần tính giai thừa'));
let giaithua=1;
for (let i=1;i<=n;i++){
    giaithua *=i;
}
document.write(giaithua)