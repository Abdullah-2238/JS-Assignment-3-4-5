var temp;
temp = prompt("Enter Tempurature in Celcius");
temp = Number(temp);

if(temp >= 30)
{
    alert("It's a Hot day!");
} 
else
{
    alert("The weather is moderate.");
}

// Marksheet for 3 students

var s1 , s2 , s3 , s1m1 , s1m2 , s1m3 , s2m1 , s2m2 , s2m3 , s3m1 , s3m2 , s3m3 , ts1 , ts2 , ts3 , gs1 , gs2 , gs3;

s1 = prompt("Enter Name of 1st Student");
s2 = prompt("Enter Name of 2nd Student");
s3 = prompt("Enter Name of 3rd Student");

s1m1 = prompt("For 1st Student: \nEnter Marks of 1st subject");
s1m2 = prompt("For 1st Student: \nEnter Marks of 2nd subject");
s1m3 = prompt("For 1st Student: \nEnter Marks of 3rd subject");

s2m1 = prompt("For 2nd Student: \nEnter Marks of 1st subject");
s2m2 = prompt("For 2nd Student: \nEnter Marks of 2nd subject");
s2m3 = prompt("For 2nd Student: \nEnter Marks of 3rd subject");

s3m1 = prompt("For 3rd Student: \nEnter Marks of 1st subject");
s3m2 = prompt("For 3rd Student: \nEnter Marks of 2nd subject");
s3m3 = prompt("For 3rd Student: \nEnter Marks of 3rd subject");

s1m1 = Number(s1m1);
s1m2 = Number(s1m2);
s1m3 = Number(s1m3);

s2m1 = Number(s2m1);
s2m2 = Number(s2m2);
s2m3 = Number(s2m3);

s3m1 = Number(s3m1);
s3m2 = Number(s3m2);
s3m3 = Number(s3m3);

ts1 = s1m1 + s1m2 + s1m3 ;
ts2 = s2m1 + s2m2 + s2m3 ;
ts3 = s3m1 + s3m2 + s3m3 ;

if( ts1 <= 300 && ts1 >= 260)
{
    gs1 = 'A' ;
}
else if( ts1 < 260 && ts1 >= 220)
{
    gs1 = 'B' ;
}
else if( ts1 < 220 && ts1 >= 180)
{
    gs1 = 'C' ;
}

if( ts2 <= 300 && ts2 >= 260)
{
    gs2 = 'A' ;
}
else if( ts2 < 260 && ts2 >= 220)
{
    gs2 = 'B' ;
}
else if( ts2 < 220 && ts2 >= 180)
{
    gs2 = 'C' ;
}

if( ts3 <= 300 && ts3 >= 260)
{
    gs3 = 'A' ;
}
else if( ts3 < 260 && ts3 >= 220)
{
    gs3 = 'B' ;
}
else if( ts3 < 220 && ts3 >= 180)
{
    gs3 = 'C' ;
}


console.log( s1+"\t"+s1m1+"\t"+s1m2+"\t"+s1m3+"\t"+ts1+"\t"+gs1);
console.log( s2+"\t"+s2m1+"\t"+s2m2+"\t"+s2m3+"\t"+ts2+"\t"+gs2);
console.log( s3+"\t"+s3m1+"\t"+s3m2+"\t"+s3m3+"\t"+ts3+"\t"+gs3);