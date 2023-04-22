//values and dataattypes
let s="avinash"
let d=1
let r=true
let k=12.3
let x=null
let z
let arr=[1,2,3,4,5,6,7]
console.log(s,d,r,k,x,z,arr);
//2
asd=["mobile","keyboard","mouse","key","laptop","lens","water bottle","watch","bag","bottle"]
console.log(asd);
//3
s={1:"avinash",2:"abhijeeth","3":"unini","4":"puthu","5":"kuthu"}
console.log(s);
console.log(s[1]);
//variables and type of 1
console.log(typeof "this sis avinash ");
console.log(typeof 12);
console.log(typeof 12.33);
console.log(typeof null);
console.log(typeof true);
console.log(typeof 12.33);
console.log(typeof [1,2,3,4,5]);
console.log(typeof true);
console.log(typeof 12.33);
console.log(typeof null);
console.log(typeof 4/0);

//2
vg=12
vg1=13
console.log(vg+vg1);
//console.log(vg2+vg1);  im commenting this because it is the wrong decleration

//operators 1
for (let index = 1; index < 10; index++) {
console.log("the multiplication of 5 is ",5,"*",index,"=",5*index);
    
}
//2
let num1=10
let num2=3
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);

// 3
let length=40
let breadth=50
console.log("the perimeter is ",length*breadth);

//4

let k1=10
let k2=12

console.log(k1==k2);//false
console.log(k1!=k2);//true
console.log(k1===k2);//false
console.log(k1>k2);//false
console.log(k1<k2);//true
console.log(k1>=k2);//false
console.log(k1<=k2);//false



//if,if else,if else if
//1
let traffic="red"
if (traffic=="red") {
    console.log("stop the vehicle");
}
else if (traffic=="green") {
    console.log("go man ");
}
if (traffic=="yellow") {
    console.log("rais e the vehicle");
}
//2
let a=10
let b=20

if (a>b) {
    console.log("greater uis the number");
}
else{
    console.log("bakshimath hai teri ");
}
let hj=5
if (hj%5==0 && hj%3==0) {
    console.log("fizz buzz");
}
else if(hj%3==0){

    console.log("Buzz");
}
else if(hj%5==0){

    console.log("Fizz");
}
else{

    console.log("teri bathkishmath ");
}
//Switch case
let day="wednesday"


switch (day) {
    case "monday":
        console.log("this is smonday man ");
        break;
        case "tuesday":
            console.log("this is tuesday man ");
            break;
            case "wednesday":
                console.log("this is wednesday man ");
                break;
                case "thursday":
                    console.log("this is thursday man ");
                    break;
                    case "friday":
                        console.log("this is friday man ");
                        break;

                        case "saturday":
                            console.log("this is saturday man ");
                            break;
                        
    default:
        console.log("this is sunday man ");
        break;
}
let jk=6
switch (jk) {
    case 1:
        console.log("january");
        break;

          case 2:
        console.log("febuary");
        break;
        case 3:
            console.log("march");
            break;

            case 4:
                console.log("april");
                break;

                case 5:
                    console.log("may");
                    break;
                    case 6:
                        console.log("june");
                        break;
                        case 7:
                            console.log("july");
                            break;
                            case 8:
                                console.log("august");
                                break;
                                case 9:
                                    console.log("september");
                                    break;
                                    case 10:
                                        console.log("october");
                                        break;
                                        case 11:
                                            console.log("november");
                                            break;


    default:
        console.log("december");
        break;
}
//ternary conditions
let hkl=1
hkl==0?console.log("the number is zero"): hkl>0?console.log("positive"): console.log("negative");


let  nuk1=10
let nuk2=20

nuk1==nuk2?console.log("equal"):nuk1>nuk2?console.log("positive"):console.log("negative");


//loops
//1
for (let index = 1; index < 10; index++) {
    console.log("the multiplication of 5 is ",5,"*",index,"=",5*index);
        
    }

    //2

    let ip=1
    for (let ip = 1; ip <=10; ip++){
        if (ip%2==0) {
            console.log(ip);
        }
     
    }








