let a,i,j;
a="<table border={1}>"
for(i=1;i<10;i++){
    a +="<tr>";
    for(j=1;j<9;j++){
        a +="<td>" + j + "*" + i + "=" + j*i + "</td>"
    }a +="</tr>"
}a += "</table>"
document.write(a)
