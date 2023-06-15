let a='';
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i>j){
            a += '&nbsp&nbsp'
        }else{
            a +='*'
        }
    }
    a +='<br>'
}
document.write(a)