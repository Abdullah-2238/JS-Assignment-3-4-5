var num;
num = prompt("Enter a No.:");
num = Number(num);
for( let i=1 ; i <= 10 ; i++)
{
    console.log(num + '*' + i + '=' + num*i);
}


// Factorial of 5


var num2 = 5;
let i = num2;
while( i >=1 )
{
    num2 = num2 * i ;
    --i; 
}
console.log(num2);