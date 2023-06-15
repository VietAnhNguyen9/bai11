let a='';
for (let i=0;i<5;i++){
    for (let j=5;j>=0;j--)
    if (j>i){
        a +='&nbsp&nbsp'
    }
    else{
        a+="*"
    }
    a+="</br>"
}
document.write(a)
