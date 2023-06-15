let a = '';
for (let i=0;i<7;i++){
    for (j=0;j<21;j++){
       if ((i===0) || (i===6) || (j===0) || (j===20)){
           a += '*'
       }else{
           a += '&nbsp&nbsp'
       }
    } a +='<br>'

}
document.write(a)