

let a=1;
for(a;a<=10;a++)
    {
        document.write(a+"<br>");
    }
    document.write("<br>");
a=0;
    while(a<=5)
    { 
        document.write(a);
        a++;

    }

    do{
        document.write(a);
        a--;
    }
    while(a>=0)

    for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; 
  }

  if (i === 8) {
    break; 
  }

  console.log(i);
}
for (let i = 1; i <= 3; i++) {         
  for (let j = 1; j <= 3; j++) {       
    console.log(`${i} × ${j} = ${i * j}`);
  }
  console.log("");          
}
