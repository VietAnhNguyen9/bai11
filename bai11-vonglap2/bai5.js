let tienbandau=+prompt('Nhập số tiền');
let sothang =+prompt('Nhập số tháng');
let laixuat =+prompt('Nhập lãi suất');
let lai=0;
let tienlai1thang;
for (let i=1;i<=sothang;i++){
    tienlai1thang=tienbandau*laixuat;
    lai +=tienlai1thang;
}
document.write(lai)