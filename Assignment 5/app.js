var Uname;
Uname = prompt("Yourname:");

function greetUser() {
    let greeting = 'Welcome '+Uname;
    return greeting
}

alert(greetUser());

// Prime No. Finder

var num;
num = prompt("Enter any +ve Number");
num = Number( num )

var g , result ;

function isPrime(){
    if(num > 0){
       if( num % 2 !== 0){
           g = true;
       }
       else{
           g = false;
       }
    }
    result = 'The given Number is Prime Number:'+g ;
    return result
}

alert(isPrime());